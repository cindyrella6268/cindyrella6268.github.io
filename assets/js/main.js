/*
	Highlights by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$html = $('html');

	// Breakpoints.
		breakpoints({
			large:   [ '981px',  '1680px' ],
			medium:  [ '737px',  '980px'  ],
			small:   [ '481px',  '736px'  ],
			xsmall:  [ null,     '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile) {

			var $wrapper;

			// Create wrapper.
				$body.wrapInner('<div id="wrapper" />');
				$wrapper = $('#wrapper');

				// Hack: iOS vh bug.
					if (browser.os == 'ios')
						$wrapper
							.css('margin-top', -25)
							.css('padding-bottom', 25);

				// Pass scroll event to window.
					$wrapper.on('scroll', function() {
						$window.trigger('scroll');
					});

			// Scrolly.
				$window.on('load.hl_scrolly', function() {

					$('.scrolly').scrolly({
						speed: 1500,
						parent: $wrapper,
						pollOnce: true
					});

					$window.off('load.hl_scrolly');

				});

			// Enable touch mode.
				$html.addClass('is-touch');

		}
		else {

			// Scrolly.
				$('.scrolly').scrolly({
					speed: 1500
				});

		}

	// Header.
		var $header = $('#header'),
			$headerTitle = $header.find('header'),
			$headerContainer = $header.find('.container');

		// Make title fixed.
			if (!browser.mobile) {

				$window.on('load.hl_headerTitle', function() {

					breakpoints.on('>medium', function() {

						$headerTitle
							.css('position', 'fixed')
							.css('height', 'auto')
							.css('top', '50%')
							.css('left', '0')
							.css('width', '100%')
							.css('margin-top', ($headerTitle.outerHeight() / -2));

					});

					breakpoints.on('<=medium', function() {

						$headerTitle
							.css('position', '')
							.css('height', '')
							.css('top', '')
							.css('left', '')
							.css('width', '')
							.css('margin-top', '');

					});

					$window.off('load.hl_headerTitle');

				});

			}

		// Scrollex.
			breakpoints.on('>small', function() {
				$header.scrollex({
					terminate: function() {

						$headerTitle.css('opacity', '');

					},
					scroll: function(progress) {

						// Fade out title as user scrolls down.
							if (progress > 0.5)
								x = 1 - progress;
							else
								x = progress;

							$headerTitle.css('opacity', Math.max(0, Math.min(1, x * 2)));

					}
				});
			});

			breakpoints.on('<=small', function() {

				$header.unscrollex();

			});

	// Main sections.
		$('.main').each(function() {

			var $this = $(this),
				$primaryImg = $this.find('.image.primary > img'),
				$bg,
				options;

			// No primary image? Bail.
				if ($primaryImg.length == 0)
					return;

			// Create bg and append it to body.
				$bg = $('<div class="main-bg" id="' + $this.attr('id') + '-bg"></div>')
					.css('background-image', (
						'url("assets/css/images/overlay.png"), url("' + $primaryImg.attr('src') + '")'
					))
					.appendTo($body);

			// Scrollex.
				$this.scrollex({
					mode: 'middle',
					delay: 200,
					top: '-10vh',
					bottom: '-10vh',
					init: function() { $bg.removeClass('active'); },
					enter: function() { $bg.addClass('active'); },
					leave: function() { $bg.removeClass('active'); }
				});

		});

})(jQuery);

// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");
// const button3 = document.getElementById("button3");
// const content1 = document.getElementById("content1");
// const content2 = document.getElementById("content2");
// const content3 = document.getElementById("content3");
// document.addEventListener('click', function (event) {
// if (event.target == button1){
// 	if (content1.classList.contains("is-active")){
// 		content1.classList.remove("is-active");
// 	} else{
// 		if (content2.classList.contains("is-active")){
// 			content2.classList.remove("is-active");
// 		}
// 		if (content3.classList.contains("is-active")){
// 			content3.classList.remove("is-active");
// 		}
// 		content1.classList.add("is-active");
// 	}
// }
// if (event.target == button2){
// 	if (content2.classList.contains("is-active")){
// 		content2.classList.remove("is-active");
// 	} else{
// 		if (content1.classList.contains("is-active")){
// 			content1.classList.remove("is-active");
// 		}
// 		if (content3.classList.contains("is-active")){
// 			content3.classList.remove("is-active");
// 		}
// 		content2.classList.add("is-active");
// 	}
// }
// if (event.target == button3){
// 	if (content3.classList.contains("is-active")){
// 		content3.classList.remove("is-active");
// 	} else{
// 		if (content2.classList.contains("is-active")){
// 			content2.classList.remove("is-active");
// 		}
// 		if (content1.classList.contains("is-active")){
// 			content1.classList.remove("is-active");
// 		}
// 		content3.classList.add("is-active");
// 	}
// }
// return;

// })
button1.addEventListener('click', function() {
    toggleContent(content1);
});

button2.addEventListener('click', function() {
    toggleContent(content2);
});

button3.addEventListener('click', function() {
    toggleContent(content3);
});

function toggleContent(content) {
    // Remove "is-active" class from all content elements
    content1.classList.remove("is-active");
    content2.classList.remove("is-active");
    content3.classList.remove("is-active");

    // Add "is-active" class to the clicked content element
    content.classList.add("is-active");
}
