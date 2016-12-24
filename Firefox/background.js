/*
Open a new tab, and load "my-page.html" into it.
*/
function getDomain(name){
switch (name) {
    case "Google":
      return "http://www.google.com/";
  case "Facebook":
	return "http://www.youtube.com";
  case "Twitter":
	return "https://www.eliving.club";

	}

}

function openMyPage(message) {
var domain = getDomain(message.name);
  chrome.tabs.create({
     "url": chrome.extension.getURL(domain)
   });
   
    chrome.notifications.create( "Notif_1",{
		"type": "basic",   
		"iconUrl": chrome.extension.getURL("icons/notification_image.png"),   
		"title": "Alert message",   
		"message": "New Tab Opened"
 
	});
}

chrome.runtime.onMessage.addListener(openMyPage);

