const express = require('express');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const mailer = require('nodemailer');
const mailSender = require('./services/mailService');

// const data = {
// 		from: '@gmail.com',
// 		to: '@yahoo.com',
// 		subject: 'Mail from website',
// 		text: 'This is a test mail from me to you'
// 	}

// mailSender(data, (err, info)=> {
// 	if (err) {
// 		console.log('There was an error',err)
// 	}else{
// 		console.log('Email was sent correctly', info.response)
// 	}
// })

const publicPath = path.resolve(__dirname, 'src');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(express.static(publicPath));

app.get('*', (req,res) =>{
	res.sendFile(path.resolve(__dirname, 'src', 'index.html'))
})

const server = http.createServer(app);

server.listen(port);
console.log("Server listening on: ", port);