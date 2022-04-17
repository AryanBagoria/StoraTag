const express = require('express');
const app = express();

const port = 4000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(`${base}/home-page.html`);
});

app.get('/insert-sack', (req, res) => {
    res.sendFile(`${base}/insert-sack.html`);
});

app.get('/sack-list', (req, res) => {
    res.sendFile(`${base}/sack-list.html`);
});

app.get('/send-command', (req, res) => {
    res.sendFile(`${base}/send-command.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});