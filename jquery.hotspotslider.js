(function($) {

    $.fn.hotspotSlider = function() {
				
			var container = $(this);
			var slides = new Array();
			
			
			/* push all slides in an array */
			container.children(".hotspotslider-slide").each(function(index, element) {
        slides.push($(this));
      });	
			
			/* define first slide as active */
			var slides_current = 0;
			$(slides[0]).addClass("active");
			
			/* max count for all slides */
			var slides_count = slides.length;
			
			/* append buttons for next and previous slide */
			if(slides_count > 1) {
				container.append("<div class='button-next'></div>");
				container.append("<div class='button-prev'></div>");
			}
			
			$(container).on( "click", ".button-next", function() {
				if( (slides_current + 1) == slides_count) {
					var next_slide = 0;
				} else {
					var next_slide = slides_current + 1;
				}
				$(slides[next_slide]).fadeIn("fast").addClass("active");
				$(slides[(slides_current)]).fadeOut("fast").removeClass("active");
				slides_current = next_slide;
			});
			
			$(container).on( "click", ".button-prev", function() {
				if(slides_current == 0) {
					var prev_slide = slides_count - 1;
				} else {
					var prev_slide = slides_current - 1;
				}
				$(slides[prev_slide]).fadeIn("fast").addClass("active");
				$(slides[(slides_current)]).fadeOut("fast").removeClass("active");
				slides_current = prev_slide;
			});
	
    }

}(jQuery));