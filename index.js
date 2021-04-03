$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight ){
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