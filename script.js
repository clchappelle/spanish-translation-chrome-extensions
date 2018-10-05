console.log("hello world");

document.addEventListener('DOMContentLoaded', function() {
	let bgpage = chrome.extension.getBackgroundPage();
	let baseurl = 'http://www.spanishdict.com/translate/'; // URL of spanishdict.com
	let searchTerm = bgpage.searchTerm; // the item highlighted in content script
	let url = baseurl + searchTerm // url of spanishdict + highlighted item
	document.getElementById('selected').innerHTML = "You are searching for " + searchTerm;
	
	let iframe = document.getElementById('website');
	iframe.src = url; // pass the url of search term to the iframe


	/*Don't think it's possible to access content form iframe if it's from a different domain
	let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	console.log(innerDoc);
	let sourceClass = innerDoc.getElementsByClassName('source-text');
	let definitionClass = innerDoc.getElementsByClassName('lang');
	let source = "";
	let definition = "";

	for (let i = 0; i < sourceClass.length; i++) {
	  let source = sourceClass[i].innerText;
	  console.log(source);
	}

	console.log(sourceClass);
	console.log(definitionClass);

	document.getElementById('source').innerHTML = source;
	document.getElementById('definition').innerHTML = definition;
	*/


}); 