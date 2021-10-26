const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const app = express();
const helmet = require("helmet");

app.use(helmet());

app.get('/', (req,res) => {
    res.send("Secure Server Creation using node js");
});

const sslServer = https.createServer({
    key : fs.readFileSync(path.join(__dirname,'certificate','key.pem')),
    cert : fs.readFileSync(path.join(__dirname,'certificate','cert.pem'))
},app);

sslServer.listen(3000, ()=>{
    console.log('server running on port 3000')    
});
