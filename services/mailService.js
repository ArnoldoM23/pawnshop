(function(){
	const mailer = require('nodemailer');
	const mailConfig = {
		host: 'smtp.gmail.com',
	  port: 465,
	  secure: true, // use SSL
	  // remember to removed password and email
	  auth: {
	      user: '@gmail.com',
	      // pass: ''
	  }
	};
	const transporter = mailer.createTransport(mailConfig);
	function mailSender(data, cb) {
		transporter.sendMail(data, cb);
	}
	module.exports = mailSender;
})()