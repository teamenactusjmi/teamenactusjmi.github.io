		
$(function(){



	// ==============On scroll animations========================

    var $elems = $('.animate-onscroll');

    var winheight = $(window).height();
    var fullheight = $(document).height();
 
    $(window).scroll(function(){
        animate_elems();
    });



    function animate_elems() {

	    wintop = $(window).scrollTop(); // calculate distance from top of window
	 
	    // loop through each item to check when it animates
	    $elems.each(function(){
	    	
	      $elm = $(this);
	 
	      if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item
	 
	      topcoords = $elm.offset().top; // element's distance from top of page in pixels
	 
	      if(wintop > (topcoords - (winheight*.75))) {
	        // animate when top of the window is 3/4 above the element
	        $elm.addClass('animated');
	      }

	    });

	  }
    /* ======================== Owl carousel ================================================*/

    if( $(".owl-carousel").length > 0 ) {

        $(".owl-carousel").owlCarousel({

            margin:25,
            stagePadding: 25,
            nav:true,
            navText: [
                "<i class='glyphicon glyphicon-chevron-left'></i>",
                "<i class='glyphicon glyphicon-chevron-right'></i>"
            ],
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:8
                }
            }

        });
    }



});



		
