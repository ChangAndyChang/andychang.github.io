$( document ).ready(function() {
	// Handler for .ready() called.
	
	$( ".toggle_shorthand" ).on("click", function() {
		$(this).toggleClass("toggled_shorthand");
	});

	$('.dropdown_trigger').hover(function() {
	    $(this).parent().toggleClass('active');
	});

	$('.dropdown_menu').hover(function() {
	    $(this).parent().toggleClass('active');
	});

	$('.dropdown_trigger').on("click", function() { 
	    $(this).parent().toggleClass('focused' );
	});


});
