
$( document ).ready(function() {
	// Handler for .ready() called.
	$( "#it_toggle" ).on("click", function() {
		$(this).toggleClass("clicked");
	});

	$('.has_dropdown').hover(function() {
	    $(this).toggleClass('active');
	});



});
