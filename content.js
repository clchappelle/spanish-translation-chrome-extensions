console.log("Chrome Extensions Ready to Go?");

window.addEventListener('mouseup', storeWord);

function storeWord() {
	let selectedText = "";
	selectedText = window.getSelection().toString().trim();
	console.log(selectedText);
	let message = {
		text: selectedText
	};
	if (selectedText.length > 0) {
		chrome.runtime.sendMessage(message);
	}
}

