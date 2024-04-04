//const express = require('express');
//const fs = require('fs');
//const https = require('https');
//const app = express();
//const port = 3000;
//let phrases = [];

// const options = {
//    key: fs.readFileSync('key.pem'),
//    cert: fs.readFileSync('cert.pem'),
//    rejectUnauthorized: false
//};

fs.readFileSync('phrases.txt').toString().split('\n').forEach(line => {
    if (line.trim() !== '') {
        phrases.push(line.trim());
    }
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

https.createServer(options, app).listen(port, () => {
    console.log(`Приложение доступно по адресу https://localhost:${port}`);
});