import { html, html2 } from "./renderHtml.js";
const workerUrl="https://website.workers.dev/";
async function cron(env) {
  try {
    // Fetch all websites from the database
    let websites = await env.db.prepare("SELECT * FROM websites").all();

    let responses = [];
    // Send requests asynchronously for each URL and collect the results
    await Promise.all(websites.results.map(async (item) => {
      const startTime = Date.now();
      let response;
      try {
        response = await fetch(item.name, {
          method: 'HEAD',
          headers: {
            "X-Source": "Cloudflare-Workers",
          },
          signal: AbortSignal.timeout(60000)
        });
      } catch (err) {
        // Handle request failure here, for example:
        responses.push({
          id: item.id,
          status: 500,  // We can give a status code like Internal Server Error
          time: Date.now() - startTime
        });
        return;
      }

      // If a response is received, collect the information
      const status = response.status;
      const responseTime = Date.now() - startTime;

      responses.push({
        id: item.id,
        status,
        time: responseTime
      });
    }));

    
    // Prepare batch insert statement
    let insertPromises = responses.map(response => {
      return env.db.prepare('INSERT INTO histories (websiteId, responseTimeMs, responseCode) VALUES (?1, ?2, ?3)')
                   .bind(response.id, response.time, response.status)
                   .run();
    });
    // Execute batch insert
    await Promise.all(insertPromises);
  } catch (error) {
    console.error("Error in scheduled event: ", error);
  }
}

var src_default = {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(cron(env));
  },

  async fetch(request, env) {
    const { db } = env;

    if (request.method == 'POST') {
      const body = {};
      try {
        const formData = await request.formData();
        for (const entry of formData.entries()) {
          body[entry[0]] = entry[1];
        }
        await db.prepare(`
        CREATE TABLE IF NOT EXISTS websites (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        );`).run();
        await db.prepare(`
        CREATE TABLE IF NOT EXISTS histories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            websiteId INTEGER NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            responseTimeMs INTEGER NOT NULL,
            responseCode INTEGER NOT NULL,
            FOREIGN KEY (websiteId) REFERENCES websites(id)
        );`).run();

        var first = await db.prepare('select * from websites where name=?1').bind(body.name).all();
        if (first.results.length > 0) {
          const destinationURL = workerUrl+"/history?id=" + first.results[0].id;
          const statusCode = 301;
          return Response.redirect(destinationURL, statusCode);
        }
        var result = await db.prepare('INSERT INTO websites (name) VALUES (?1)').bind(body.name).run();
        var first2 = await db.prepare('select * from websites where name=?1').bind(body.name).all();
        if (first2.results.length > 0) {
          const destinationURL = workerUrl+"/history?id=" + first2.results[0].id;
          const statusCode = 301;
          return Response.redirect(destinationURL, statusCode);
        }

      } catch (e) {
        return new Response(e.message);
      }

    }

    const url = new URL(request.url);
    if (request.method == "GET" && url.pathname == "/api") {
      let id = url.searchParams.get("id");
      var history = await db.prepare("select * from histories where websiteId = ?1").bind(id).all();
      return Response.json(history.results);
    }
    if (request.method == "GET" && url.pathname == "/history") {
      let id = url.searchParams.get("id");
      var history = await db.prepare("select * from websites where id = ?1").bind(id).all();
      var html3 = html2.replace("##id##", id);
      html3 = html3.replaceAll("##name##", new URL(history.results[0].name).host);
      return new Response(html3, {
        headers: {
          "content-type": "text/html; charset=UTF-8"
        }
      });
    }
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    });
  }
};
export {
  src_default as default
};
