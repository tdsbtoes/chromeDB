// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 1024;
  var height = 768;

  chrome.app.window.create('src/bg/background.html', {
    id: "_TOESDB_",
    outerBounds: {
      width: width,
      height: height,
      left: Math.round((screenWidth-width)/2),
      top: Math.round((screenHeight-height)/2)
    },
    frame: {
		type: 'chrome',
		color: '#c00',
		activeColor: '#ff0',
		inactiveColor: '#ccc'
	},
	state: 'maximized'
  });
});
