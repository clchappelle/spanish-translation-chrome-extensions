console.log('Background running');

//chrome.browserAction.onClicked.addListener(buttonClicked);

/*
function buttonClicked(tab) {
	console.log("button clicked!");
	console.log(tab); // Gives you information on the tab you're on.
}
*/

var searchTerm = "";

//chrome.tabs.sendMessage(tab.id, msg) //from chrome extions API
chrome.runtime.onMessage.addListener(receiveSelectedText);

function receiveSelectedText(request, sender, sendResponse) {
	console.log(request);
	searchTerm = request.text;

}
