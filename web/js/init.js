var EVENTCLOUD = EVENTCLOUD || {};

EVENTCLOUD.Global = (function($) {
	function init()
	{

// ---- FEATURE BLOCK RE-SIZING TO FIT VIEWPORT

		$(document).ready(function () {
			viewportResize();
			$(window).resize(function() {
				viewportResize();
			});
		});

		function viewportResize() {

			var height = $(window).height();
			var width = $(window).width();
			$('body').css({'height':height,'width':width});
		}

	}
	
	return {
		init: init
	}

}(jQuery));


EVENTCLOUD.Global.init();