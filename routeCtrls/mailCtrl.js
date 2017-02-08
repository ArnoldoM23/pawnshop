(function() {
	'use strict'
	const mailSender = require('../services/mailService');
	const mailCtrl = {
		sendMail (req, res) {
			const emailMessage = req.body;
			const data = {
					from: 'example@gmail.com',
					to: 'example@yahoo.com',
					subject: 'Mail from website'
				}
			let emailTemplate= `<h1>You have a message from ${emailMessage.name}</h1>
													<p>${emailMessage.message}</p>
													<h3>How did they hear about us?</h3>
													<p>${emailMessage.find_us}</p>
													<h3>Email should we reply to?</h3>
													<p>${emailMessage.email}</p>`
			data.html = emailTemplate;
			mailSender(data, (err, info)=> {
				if (err) {
					console.log('There was an error',err)
				}else{
					console.log('Email was sent correctly', info.response)
				}
			})
			res.send({message: 'Email has been sent'});
		}
	};
	module.exports = mailCtrl;
})()