const express = require('express');
const router = express.Router();

const pdfMake = require('./pdfmake/pdfmake.min');
const vfsFonts = require('./pdfmake/vfs_fonts');

// pdfMake.vfs = vfsFonts.pdfMake.vfs;
pdfMake.vfs = vfsFonts.pdfMake.vfs

router.post('/pdf', (req, res, next)=>{
    // res.send('PDF');

    const name = req.body.name;
    const email = req.body.email;

    // res.send(`Your name is: ${name}`)

    var docDefinition = {
        content: [
            `Hello ${name}` ,
            `Your email address is ${email}`,
            'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
        ]
    };

    // pdfMake.createPdf(docDefinition).download();
    const pdfDoc = pdfMake.createPdf(docDefinition);
    pdfDoc.getBase64((data)=>{
        res.writeHead(200, 
        {
            'Content-Type': 'application/pdf',
            'Content-Disposition':'attachment;filename="filename.pdf"'
        });

        const download = Buffer.from(data.toString('utf-8'), 'base64');
        res.end(download);
    });
});

module.exports = router;