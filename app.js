const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

const app = express();

app.use(express.static(path.join(__dirname, '/')));


// This line enables the programm to read content from the html body
app.use(bodyParser.urlencoded({extended:true}));

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

///////////////Create PDF////////////////////
const pdfRoute = require('./form.js')
app.use('/pdfMake', pdfRoute)

/////////////////////////////////////////////


app.listen(3000, () => {
    console.log('Server started on port 3000');
})