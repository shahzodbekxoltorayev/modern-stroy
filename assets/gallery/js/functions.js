 
(function($) {

	 
	
	/* + Gallery */
	function gallery() {
		if($(".site-section .gallery-list").length) {
			var $container = $(".gallery-list");
			$container.isotope({
				layoutMode: 'fitRows',
				percentPosition: true,
				itemSelector: ".gallery-box",
				gutter: 0,
				transitionDuration: "0.5s",
			});
			
			$("#filters a").on("click",function(){
				$('#filters a').removeClass("active");
				$(this).addClass("active");
				var selector = $(this).attr("data-filter");
				$container.isotope({ filter: selector });		
				return false;
			});
		}
	}
	
 
	
 
	
 
 
 
	
	/* + Window On Load */
	$(window).on("load",function() {
		/* - Site Loader* */
		if ( !$("html").is(".ie6, .ie7, .ie8") ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display","none");
		}
		gallery();
	});

})(jQuery);