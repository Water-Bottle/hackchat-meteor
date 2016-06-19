Template.home.rendered = function(){

	Session.set("showModal", false);

	$('body').scrollspy({
		target: '.navbar-fixed-top',
		offset: 51
	})

	$("h1").fitText(
		1.2, {
			minFontSize: '35px',
			maxFontSize: '65px'
		}
		);

	$('#mainNav').affix({
		offset: {
			top: 100
		}
	})

	sr = ScrollReveal();
	sr.reveal('.sr-icons', {
		duration: 600,
		scale: 0.3,
		distance: '0px'
	}, 200);
	sr.reveal('.sr-button', {
		duration: 1000,
		delay: 200
	});
	sr.reveal('.sr-contact', {
		duration: 600,
		scale: 0.3,
		distance: '0px'
	}, 300);


}

Template.home.events({

	"click a.page-scroll": function(event){
		event.preventDefault();
		var $anchor = $(event.target);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 50)
		}, 1250, 'easeInOutExpo');
	},

	"click .navbar-collapse ul li a:not(.dropdown-toggle)": function(event){
		$('.navbar-toggle:visible').click();
	},

	"click #getStartedButton": function(event){
		console.log("hello");
		Router.go("dashboard");
		Session.set("showModal", true);
	},

	'click #confirmsignup': function(event){
		event.preventDefault();
		var email = $('[name=signupemail]').val();
		var password = $('[name=signuppassword]').val();
		var reenterpassword = $('[name=reenterpassword]').val();
		console.log("Email", email);
		console.log("password", password);
		console.log("reenterpassword", reenterpassword);

		Accounts.createUser({username: email, password : password}, function(err){
			if (err) {
				console.log("error", err);
			} else {
				$("#myModal").modal('toggle');

				Router.go('dashboard');
			}

		});
	}










})
