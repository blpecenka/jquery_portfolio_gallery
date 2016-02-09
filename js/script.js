$(document).ready(function(){
	$('nav a').on('click', function(){
		// Current class assigniment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');
		
		// Set heading text
		$('h1#heading').text($(this).text());

		// Get and filter link text
		var category = $(this).text().toLowerCase().replace(' ', '-');

		// Remove hidden class if 'all-projects' is selected
		if(category == 'all-projects') {
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#gallery li').each(function() {
				if (!$(this).hasClass(category)) {
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		// Stop default link behavior
		return false;
	});

	// Mouse enter overlay
	$('ul#gallery li').on('mouseenter', function() {
		// Get data attribute values from html
		var title = $(this).children().data('title');	// Now, we have the data content in these variables
		var desc = $(this).children().data('desc');

		// Validation for data attribute values
		if(desc == null) {
			desc = 'Click To Enlarge';
		}
		if(title == null) {
			title = "";
		}

		// Create overlay div for data attributes
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Add html to overlay
		overlay.html('<h3 class="accent-font">'+title+'</h3><p class="content-font">'+desc+'</p>');

		// Fade in the overlay
		overlay.fadeIn(800);
	});

	// Mouse leave overlay
	$('ul#gallery li').on('mouseleave', function() {
	
	// Create overlay div for data attributes
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Fade out overlay
		overlay.fadeOut(500);
	});
});