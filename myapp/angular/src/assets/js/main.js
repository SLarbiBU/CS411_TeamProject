/*
	Intensify by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
//function apiCall()({
//    
//    
//     ${
//        
//        var token = 'NFYOWMHHAT2MAUY2DZVC';
//        var $events = $("#events");
//        var buttonClick = button; 
//        $.get('https://www.eventbriteapi.com/v3/events/search/?token='+token+'&q=dance&start_date.keyword='+buttonClick, function(res) {
//            if(res.events.length) {
//                var s = "<ul class='eventList'>";
//                for(var i=0;i<res.events.length;i++) {
//                    var event = res.events[i];
//                    console.dir(event);
//                    s += "<li><a href='" + event.url + "'>" + event.name.text + "</a> - " + event.description.text + "</li>";
//                }
//                s += "</ul>";
//                $events.html(s);
//            } else {
//                $events.html("<p>Sorry, there are no upcoming events.</p>");
//            }
//        });
//        
//        
//    });
//})
(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				offset: function() {
					return $header.height();
				}
			});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

	});

})(jQuery);