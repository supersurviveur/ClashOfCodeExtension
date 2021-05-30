// listen for our browerAction to be clicked
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	// for the current tab, inject the "inject.js" file & execute it
    if(changeInfo.url.includes("codingame.com/clashofcode/clash/report")){
        chrome.tabs.executeScript(tab.ib, {
            file: 'popup.js'
        });
    }
});