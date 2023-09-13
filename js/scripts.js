	$(document).ready(function(){
		/* Show Feedback form when feedback button clicked */
		$('#feedback_button a').click(function(){
			$('#feedback_overlay_box').show();
		});
		/* Hide Feedback form when close button clicked */
		$('#feedback_close a').click(function(){
			$('#feedback_overlay_box').hide();
		});
		
		/* Following code will be called when user submit the feedback form */
		$('.wp_feedback_form').submit(function(){
		var url = $(this).attr('action');
		var update = url.split("#")[1];
		var name = $("#feedback_name").val();
		var email = $("#feedback_email").val();
		var phone=$("#feedback_phone").val();
		var message=$("#feedback_message").val();
		var dataString = 'email='+ email + '&name=' + name+'&phone='+phone+'&message='+message; 
		var emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

		/* In first part of this code we validated inputs entered by user. */
		if (email == '' || name == '' || phone=='') {
			$("#feedback_error").fadeIn(200).html("All fields are required !");
		}else if (email.search(emailFormat) == -1) {
			$("#feedback_error").fadeIn(200).html("Invalid Email Address!");
		}

		else
		{
			/*
			Following code will send a jquery ajax request to the send_email.php file,
			with user inputs */
			$.ajax({
				type: "POST",
				url: "" + url + "",
				data: dataString,
				success: function(response){
			/* Response is add to the #feedback_response div */		
					$('#feedback_response').html(response);
					
				},
				complete: function(){
			/* On completion of ajax request following methods are called. */
					$("#feedback_error").fadeOut(200);
					$("#feedback_response").fadeIn(200);
					$(".feedback_text").val('');
					}
				
			});

		}
		return false;
		});
	});

/*
     FILE ARCHIVED ON 11:54:15 Jan 25, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:32:10 Jun 30, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/