Template.home.rendered = function(){

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
		}, 1250, 'easeInOutExpo');},

		"click .navbar-collapse ul li a:not(.dropdown-toggle)": function(event){
			$('.navbar-toggle:visible').click();
		}



	})
