$(document).ready(function() {
	$('.nav-item.dropdown').hover(function() {
		$(this).find('.dropdown-content').slideDown(500);
	}, function() {
		$(this).find('.dropdown-content').slideUp(200);
	});
});