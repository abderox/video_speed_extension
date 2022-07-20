
try {

  // chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  //   if(changeInfo.status == 'complete'){

  //     chrome.scripting.executeScript({
  //       files: ['contentScript.js'],
  //       target: {tabId: tab.id}
  //     });

  //   }
  // });

  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      files: ['contentScript_.js'],
      target: { tabId: tab.id }
    });
  });


} catch (e) {
  console.log(e);
}
