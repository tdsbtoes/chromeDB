//**** runtime loader
chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 1024;
  var height = 768;

  chrome.app.window.create(
		'window.html',
		{
			id: "_TOESDB_",
			outerBounds: {
			  width: width,
			  height: height,
			  minWidth: 950,
			  minHeight: 500,
			  left: Math.round((screenWidth-width)/2),
			  top: Math.round((screenHeight-height)/2)
			},
			frame: {
				type: 'chrome',
				color: '#c00',
				activeColor: '#ff0',
				inactiveColor: '#bc9c9c'
			},
			state: 'maximized'
		},
		function () {
			chrome.app.window.current().fullscreen;
		}
	);
});
