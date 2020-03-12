// JavaScript Document
jQuery('#custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

jQuery(document).ready(function () {
  jQuery('.mobile-toggle-button').click(function () {
    jQuery('.responsive-menu').addClass('open');
    jQuery('.wrapper').css({
      'left': '-50%'
    });
  });
  jQuery('.mobile-toggle-button.close').click(function () {
    jQuery('.responsive-menu').removeClass('open');
    jQuery('.wrapper').css({
      'left': '0%'
    });
  });

});

var windowSize = jQuery(window).width(); // Could've done $(this).width()
if (windowSize < 991) {
  jQuery('.responsive_dropo_ul').ulLiAccordion({
    plus_class: 'plus',
    minus_class: 'minus'
  });
}


 jQuery(function() {
      jQuery('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});


