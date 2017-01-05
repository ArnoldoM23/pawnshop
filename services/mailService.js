(function(){
	'use strict'
	const mailer = require('nodemailer');
	const mailConfig = {
		host: 'smtp.gmail.com',
	  port: 465,
	  secure: true, // use SSL
	  // remember to removed password and email
	  auth: {
	      user: process.env.EMAIL || '@gmail.com',
	      pass: process.env.PASSWORD || ''
	  }
	};
	const transporter = mailer.createTransport(mailConfig);
	function mailSender(data, cb) {
		transporter.sendMail(data, cb);
	};
	module.exports = mailSender;
})()