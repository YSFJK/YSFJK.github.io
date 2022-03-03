$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight - 20 ){
				$(this).removeClass('fadein_out');
				$(this).addClass('fadein_in');
			}
			else{
				$(this).removeClass('fadein_in');
				$(this).addClass('fadein_out');
			}
		});
	});
});
$(document).on('click','.achievement', function() {
	$('.main_page').addClass('fadeout');
	setTimeout(function(){
		window.location.href = "ahievement.html";
	},1000);
});
$(document).on('click','.game', function() {
	$('.main_page').addClass('fadeout');
	setTimeout(function(){
		window.location.href = "game.html";
	},1000);
});