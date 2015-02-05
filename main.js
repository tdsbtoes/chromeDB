//**** TOES



function init(_tab) {
	alert('hi')
} // end init




chrome.browserAction.onClicked.addListener(init);



chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('src/bg/background.html', {
    id: "calcWinID",
    bounds: {
      width: 244,
      height: 380
    },
    minWidth: 244,
    minHeight: 380
  });
});
