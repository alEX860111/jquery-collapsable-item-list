$(document).ready(function() {
	$('.sub').hide();
	$('.main').click(function() {
		var sub = $(this).next('.sub');
		if (sub.is(':visible')) {
			sub.hide();
			$(this).removeClass('open');
		} else {
			sub.show();
			$(this).addClass('open');
		}
	});
});