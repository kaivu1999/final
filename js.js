//connected to iit.html verified
// alert("hello!"); 
// $(document).ready(function(){
//     $("#clubs").click(function(){
//         $("#cSlide").slideDown("slow");
//     });
// });
$(document).ready(function(){
  // Add smooth scrolling to all links this is cool one time all links finish
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
  });
  } ;
});
});
$('#topButton').addClass('animated shake infinte');



jQuery.fn.liScroll = function(settings) {
	settings = jQuery.extend({
		travelocity: 0.03
		}, settings);		
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker")
				var stripHeight = 1;
				$strip.find("li").each(function(i){
					stripHeight += jQuery(this, i).outerHeight(true); // thanks to Michael Haszprunar and Fabien Volpi
				});
				var $mask = $strip.wrap("<div class='mask'></div>");
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
				var containerHeight = $strip.parent().parent().height();	//a.k.a. 'mask' width 	
				$strip.height(stripHeight);			
				var totalTravel = stripHeight;
				var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
				function scrollnews(spazio, tempo){
				$strip.animate({top: '-='+ spazio}, tempo, "linear", function(){$strip.css("top", containerHeight); scrollnews(totalTravel, defTiming);});
				}
				scrollnews(totalTravel, defTiming);				
				$strip.hover(function(){
				jQuery(this).stop();
				},
				function(){
				var offset = jQuery(this).offset();
				var residualSpace = offset.top + stripHeight;
				var residualTime = residualSpace/settings.travelocity;
				scrollnews(residualSpace, residualTime);
				});			
		});	
};

$(function(){
    $("ul#ticker01").liScroll();
});

