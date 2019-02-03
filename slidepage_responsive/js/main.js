/* $(document).ready(function() {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 20;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })

})












*/

jQuery(document).ready(function() {
	smoothScroll();
	onScroll();
	mobileMenu();
});

function smoothScroll() {
	jQuery("a[href^='#']").click(function() {

		mainMenuHeight = jQuery('.main-menu').innerHeight();

		jQuery('html, body').animate({
			scrollTop: jQuery(jQuery(this).attr('href')).offset().top - mainMenuHeight
		}, 1200);
	});
}


function onScroll() {
	var sections = jQuery('.section');
	var mainMenu = jQuery('.main-menu');
	var mainMenuHeight = jQuery('.main-menu').innerHeight();


	jQuery(window).on('scroll', function() {
		var cur_pos = jQuery(this).scrollTop();


		sections.each(function() {
			var top = jQuery(this).offset().top - mainMenuHeight;


			if(cur_pos >= top) {
				mainMenu.find('a').removeClass('active');
				mainMenu.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
			}

		})
	});
}

function mobileMenu() {
	jQuery('.menu-icon').on('click', function() {
		jQuery('.menu-icon').toggleClass('change');
		jQuery('.mobile-nav').toggleClass('active');
	});

	jQuery('ul.mobile-nav li a').on('click', function() {
		jQuery('.menu-icon').removeClass('change');
		jQuery('.mobile-nav').removeClass('active');
	});
}
