var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport('SMTP', {
	service: "Gmail",
    auth: {
    	user: //email address,
    	pass: //application specific password
    	}
    }
);

var sendMessage = function(mailOptions){
		transport.sendMail(mailOptions, function(error, response){
			if(error){
	        console.log(error);
	    }else{
	        console.log("Message sent: " + response.message);
	    }
	});
};

module.exports.sendMessage = sendMessage;