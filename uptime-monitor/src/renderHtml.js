var html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Free Website uptime monitor</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
    <style>
    @keyframes backgroundAnimation {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 100% 0%;
        }
    }

    body {
        font-family: "Open Sans", sans-serif;
        background-color: #07FF62;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2349eaff'/%3E%3Cstop offset='1' stop-color='%2349eaff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2300bb92'/%3E%3Cstop offset='1' stop-color='%2300bb92' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230077fc'/%3E%3Cstop offset='1' stop-color='%230077fc' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2307FF62'/%3E%3Cstop offset='1' stop-color='%2307FF62' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%238B9BFF'/%3E%3Cstop offset='1' stop-color='%238B9BFF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2300596F'/%3E%3Cstop offset='1' stop-color='%2300596F' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
        animation: backgroundAnimation 10s infinite linear;
    }
</style>
</head>
<body class="d-flex align-items-center py-4">
<div class="w-100 m-auto" style="max-width: 700px;padding: 1rem;">
    <h1>Free Website uptime monitor</h1>
    <p>Keeping your website running smoothly is crucial for your online presence, and a reliable website uptime monitor can make all the difference. By using a top-notch uptime monitoring service, you ensure your site remains accessible to visitors around the clock. These tools provide instant alerts for any downtime, enabling you to take swift action and minimize disruptions. With real-time monitoring and detailed reports, you can track performance and improve your website's reliability. Invest in a website uptime monitor today to maintain a seamless user experience and safeguard your online reputation.</p>
    <div>
        <form action="/" method="post">
            <label for="name" class="form-label">Website domain url</label>
            <input placeholder='https://www.google.com' id="name" name="name" type="url" class="form-control"/>
            <button class="mt-3 w-100 btn btn-primary btn-lg" type="submit">Register</button>
        </form>
    </div>
</div>
</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</html>
`;

var html2=`
<!DOCTYPE html>
<html lang="en">
<head>
    <title>##name## - Uptime Monitor</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom"></script> <!-- Add this line -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
    <style>
    body{
        font-family: "Open Sans", sans-serif;
        background-color: #07FF62;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2349eaff'/%3E%3Cstop offset='1' stop-color='%2349eaff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2300bb92'/%3E%3Cstop offset='1' stop-color='%2300bb92' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230077fc'/%3E%3Cstop offset='1' stop-color='%230077fc' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2307FF62'/%3E%3Cstop offset='1' stop-color='%2307FF62' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%238B9BFF'/%3E%3Cstop offset='1' stop-color='%238B9BFF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2300596F'/%3E%3Cstop offset='1' stop-color='%2300596F' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
    }
    </style>

</head>
<body onload="load()">
<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-7">
            <h3>##name## website uptime monitoring</h3>
            <p>Last Result <span id="lastminute">It will start watching in 1 minute</span> <span id="laststatus"></span> <b id="lastmilis"></b></i>
            </p>
        </div>
        <div class="col-md-7">
            <canvas id="uptimeChart" width="400" height="200"></canvas>
            <canvas id="myChart" width="400" height="200"></canvas>
        </div>
    </div>
</div>

<script>

    function day(result) {
        const uptimePercentages = calculateDailyUptime(result);
        const labels = uptimePercentages.map(entry => entry.date);
        const successData = uptimePercentages.map(entry => entry.success);
        const errorData = uptimePercentages.map(entry => entry.errors);

        const config = {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Uptime (HTTP 200)',
                        data: successData,
                        backgroundColor: 'rgba(75, 192, 192, 0.5)',
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    {
                        label: 'Errors (Non-HTTP 200)',
                        data: errorData,
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        borderColor: '#fff',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        };

        const ctx = document.getElementById('uptimeChart').getContext('2d');
        new Chart(ctx, config);
    }

    function convertToLocalTimezone(dateTimeString) {
        const inputDate = new Date(dateTimeString.replace(" ","T")+".000-03:00");
        const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const utcDate = inputDate.toLocaleString('en-US', { timeZone: 'UTC', hour12: false });
        const localDate = new Date(utcDate);
        const localTime = localDate.toLocaleString('en-US', {
            timeZone: localTimeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).replace(new RegExp('(\\d+)/(\\d+)/(\\d+), (\\d+):(\\d+):(\\d+)'), '$3-$1-$2T$4:$5:$6.00z');
        return localTime;
    }


    function history(result) {
        const intervalMinutes = 10;
        const groupedData = groupDataByInterval(result, intervalMinutes);

        const labels = groupedData.map(entry => entry.timestamp);
        debugger;
        const dataPoints = groupedData.map(entry => entry.averageResponseTimeMs);

        const config = {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Average Response Time (ms)',
                    data: dataPoints,
                    fill: false,
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: '#fff',
                    borderWidth: 2,
                    tension: 0.1
                }]
            },
            options: {

                scales: {
                    x: {
                        type: 'timeseries',
                        time: {
                        }
                    },
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true // Enable zooming with mouse wheel
                            },
                            mode: 'x' // Zooming along the x-axis
                        },
                        pan: {
                            enabled: true,
                            mode: 'x'
                        }
                    }
                }
            }
        };

        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, config);
    }

    function msToTime(duration) {
        var milliseconds = parseInt((duration%1000))
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);
        
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        
        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }

    function load(){
        fetch("/api?id=##id##").then(res => res.json()).then(result => {
            day(result);
            history(result);
            
            try{
                document.getElementById("lastminute").innerText= new Date(convertToLocalTimezone(result[result.length-1].timestamp)).toLocaleString();
                document.getElementById("laststatus").innerHTML= result[result.length-1].responseCode;
                document.getElementById("lastmilis").innerText= msToTime(result[result.length-1].responseTimeMs);
            }catch(e){

            }
        });
    }

    function groupDataByInterval(data, intervalMinutes) {
        const groupedData = [];
        let intervalStart = null;
        let intervalSum = 0;
        let intervalCount = 0;

        data.forEach((entry) => {
            const timestamp = new Date(convertToLocalTimezone(entry.timestamp));
            if (!intervalStart) {
                intervalStart = timestamp;
            }

            const minutesDifference = (timestamp - intervalStart) / (1000 * 60);

            if (minutesDifference < intervalMinutes) {
                intervalSum += entry.responseTimeMs;
                intervalCount += 1;
            } else {
                if (intervalCount > 0) {
                    groupedData.push({
                        timestamp: intervalStart,
                        averageResponseTimeMs: intervalSum / intervalCount,
                    });
                }

                intervalStart = timestamp;
                intervalSum = entry.responseTimeMs;
                intervalCount = 1;
            }
        });

        if (intervalCount > 0) {
            groupedData.push({
                timestamp: intervalStart,
                averageResponseTimeMs: intervalSum / intervalCount,
            });
        }

        return groupedData;
    }

    function calculateDailyUptime(data) {
        const uptimeData = {};

        data.forEach(entry => {
            const date = new Date(entry.timestamp);
            const dateString = date.toISOString().split('T')[0];

            if (!uptimeData[dateString]) {
                uptimeData[dateString] = { total: 0, success: 0, errors: 0 };
            }

            uptimeData[dateString].total += 1;
            if (entry.responseCode === 200) {
                uptimeData[dateString].success += 1;
            } else {
                uptimeData[dateString].errors += 1;
            }
        });

        const uptimePercentages = Object.keys(uptimeData).map(date => {
            const { total, success, errors } = uptimeData[date];
            return {
                date: date,
                success: (success / total) * 100,
                errors: (errors / total) * 100
            };
        });

        return uptimePercentages;
    }

</script>
</body>
</html>
`

export {
    html,html2
};
