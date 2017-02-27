function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

document.addEventListener('DOMContentLoaded', function() {
    var downloadIframe = document.getElementById('downloadButton');
    getCurrentTabUrl(function(url) {
	if(url.includes("youtube.com")) {
	    document.getElementById('errorDiv').style.display="none";
	    document.getElementById('downloadDiv').style.display="block";
	    downloadIframe.src="https://www.youtubeinmp3.com/widget/button/?video="+url;
	} else {
    	    document.getElementById('downloadDiv').style.display="none";	    
	    document.getElementById('errorDiv').style.display="";
	}
  });
});
