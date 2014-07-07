$(document).ready(function(){
	
	var buttonBreaker = function(){
		$("#submitButton").css('border-color','red')
	};
	
	$("#submitButton").click(function(){
		$(this).blur();
		var name = $("#inputName").val();
		var email = $("#inputEmail").val();
		var phone = $("#inputPhone").val();
		var message = $("#inputMessage").val();

		var proceed = true;

		if (name==""){
			$('#inputName').css('border-color','red');
			buttonBreaker();
			proceed = false;
		}
		if (email==""){
			$('#inputEmail').css('border-color','red');
			buttonBreaker();
			proceed = false;
		}
		if (phone==""){
			$('#inputPhone').css('border-color','red');
			buttonBreaker();
			proceed = false;
		}
		if (message==""){
			$('#inputMessage').css('border-color','red');
			buttonBreaker();
			proceed = false;
		}

			if(proceed){
			var messageBody = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message;
			var post_data = {
				to: //same address specified in mail.js,
				subject: 'a new message',  
				text: messageBody
			};
			$.ajax({
			    url: '/', 
			    type: 'POST', 
			    contentType: 'application/json', 
			    data: JSON.stringify(post_data)}
			);
			$("#submitButton, #contactForm input, #contactForm textarea").css('border-color','').val('');
			$(".hiddenP").fadeIn(400);
		}

		$("#contactForm input, #contactForm textarea").keyup(function() { 
	        $(this).css('border-color',''); 
	        // $("#result").slideUp();
	    });

		return false;
	})

})