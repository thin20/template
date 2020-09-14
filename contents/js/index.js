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
		if(pos>pos_nav){
			$('nav').css({
				'opacity': '0.8',
				'background-color': 'rgba(90, 84, 184, .7)'
			});
			$('.nav-link').addClass('color-white');
		}
		else{
			$('nav').css({
				'background-color':'white',	
				'opacity' : '1'
			});
			$('.nav-link').removeClass('color-white');
		}
	});
});