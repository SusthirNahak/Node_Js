// server.js
const os = require('os');
const fs = require('fs');

// i am gettingoperating system
const operatingSystem = os.platform();

// i am Generating HTML content
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operating System Display</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .box {
            padding: 20px;
            border: 2px solid black;
            border-radius: 10px;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <div id="os-info" class="box">Operating System: ${operatingSystem}</div>
</body>
</html>
`;

// Write HTML content to a file named index.html
fs.writeFileSync('index.html', htmlContent);

console.log('HTML file generated successfully!');
