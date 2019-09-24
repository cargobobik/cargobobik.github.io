var $ = jQuery.noConflict();

jQuery(function ($) {

	jQuery(document).ready(function($){

		// Плавная прокрутка

		$(".scroll a").click(function() {
      $("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
				duration: 1000,
				easing: "swing"
      });
      return false;
	 	});



		// Кнопка 'Наверх'

	 	var btn = $('.up');

	  $(window).scroll(function() {
		  if ($(window).scrollTop() > 300) {
		    btn.addClass('show');
		  } else {
		    btn.removeClass('show');
		  }
		});

		btn.on('click', function(e) {
		  e.preventDefault();
		  $('html, body').animate({scrollTop:0}, '1000') // Выставить время
		});



		// Бургер-меню

		$('.header__burger-menu').click(function (e) {
			e.preventDefault();
			$('ul.header__menu').toggleClass('menu-show');
			$('.nav').css('align-items', 'inherit');
			$('.header__tel').css('display', 'block');
			$('.header__menu').css('width', '100%').css('text-align', 'center');
		});
	});
});