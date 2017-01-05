'use strict'
const express = require('express');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const mailer = require('nodemailer');
const mailSender = require('./services/mailService');
const routeCtrl = require('./routeCtrls/mailCtrl');
const publicPath = path.resolve(__dirname, 'src');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(express.static(publicPath));

app.get('*', (req,res) => {
	res.sendFile(path.resolve(__dirname, 'src', 'index.html'))
})

app.post('/sendEmail', routeCtrl.sendMail)

const server = http.createServer(app);

server.listen(port);
console.log("Server listening on: ", port);