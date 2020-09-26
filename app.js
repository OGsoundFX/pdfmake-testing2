const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
    res.send("OMG it's working!");
    // res.sendFile('index.html');
});

app.get('/', (req, res) => {
    res.sendFile('test.html');
});

app.get('/folder', (req, res) => {
    res.sendFile('test2.html');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
})