// JavaScript Document

(function($){
	$.fn.ulLiAccordion = function(options){
		settings= {
			plus_class:null,
			minus_class:null,
		}
		$.extend(settings, options);
		var level = 0;	
		$(this).travarseUl(level);
		$(this).find('li>ul').css('display','none');
		$(this).addClass('accordion_top_ul');
		
		/**
		 * Bind click event for li
		 */
		 $('.accordion_clickable').not('.opendAccordion').on('click.ulli', function(e){
			if($(this).hasClass('opendAccordion') ){
				return;
			}
				
			e.stopImmediatePropagation(); 
			$(this).siblings('li').children('ul').slideUp();
			$(this).siblings('li').children('span.icon').addClass(settings.plus_class).removeClass(settings.minus_class);
			$(this).siblings('li.opendAccordion').removeClass('opendAccordion');
			$(this).children('ul').slideDown();
			$(this).children('span.icon').addClass(settings.minus_class).removeClass(settings.plus_class);
			$(this).addClass('opendAccordion');
		 })
		 $(document).on('click.ulli','.opendAccordion', function(e){
			 e.stopImmediatePropagation();
			 $(this).children('ul').slideUp();
			 $(this).children('span.icon').addClass(settings.plus_class).removeClass(settings.minus_class);
			 $(this).removeClass('opendAccordion');
			 $(this).children('ul').slideUp();
		 })
	}
	
	$.fn.travarseUl = function(depth){
		$(this).data('ul_level',depth);
		if(depth > 0){
			$(this).css('display', 'none');
		}
		$(this).addClass('ul-level-'+depth);
		if($(this).children('li').length > 0){
			$(this).children('li').each(function(){
				$(this).travarseli(depth);
			});
		}
	}
	
	$.fn.travarseli = function(depth){
		$(this).data('li_level',depth);
		$(this).addClass('li-level-'+depth);
		if($(this).children('ul').length > 0){
			$(this).addClass('accordion_clickable');			
			$(this).children('ul').each(function(){
				$(this).travarseUl(depth+1);
			});
		}
	}
	
})(jQuery,document);
