
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

// Write HTML content to index.html
fs.writeFileSync('index.html', htmlContent);

//console.log('HTML file generated');



import fs from 'fs';

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
    console.log(typeof data);

    let sf_data = JSON.parse(data);
    console.log(sf_data);

    let emails = sf_data.map(sf => sf.email);
    console.log(emails);

    fs.writeFile('email.txt', emails.join('\n'), (err) => {
        if (err) throw err;
        console.log('Emails saved to email.txt');
    });
});
