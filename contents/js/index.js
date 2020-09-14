$(document).ready(function() {
	$('.nav-item.dropdown').hover(function() {
		$(this).find('.dropdown-content').slideDown(500);
	}, function() {
		$(this).find('.dropdown-content').slideUp(200);
	});
	$('.nav-item.dropdown').on('click',function() {
		$(this).find('.dropdown-content').slideToggle(500);
	});

	var pos_nav = $('nav').offset().top;
	$(window).scroll(function(event) {
		var pos = $('html,body').scrollTop();
		if(pos>10){
			$('nav').css({
				'opacity': '0.8',
				'background-color': 'rgba(90, 84, 184, .7)',
				'position':'fixed',
				'top':'0'
			});
			$('.nav-link').addClass('white-color');
		}
		else{
			$('nav').css({
				'background-color':'white',	
				'opacity' : '1',
				'position':'relative'
			});
			$('.nav-link').removeClass('white-color');
		}
	});
});