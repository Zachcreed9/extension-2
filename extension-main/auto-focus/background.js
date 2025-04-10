chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ blockedSites: ["youtube.com", "twitter.com", "reddit.com"] }, () => {
    if (chrome.runtime.lastError) {
      console.error("Error setting blocked sites:", chrome.runtime.lastError);
    } else {
      console.log("Blocked sites initialized.");
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    chrome.storage.sync.get("blockedSites", ({ blockedSites }) => {
      if (chrome.runtime.lastError) {
        console.error("Error retrieving blocked sites:", chrome.runtime.lastError);
        return;
      }

      const isBlocked = blockedSites.some(site => changeInfo.url.includes(site));
      if (isBlocked) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabId },
            files: ["content.js"]
          },
          () => {
            if (chrome.runtime.lastError) {
              console.error("Error executing content script:", chrome.runtime.lastError);
            }
          }
        );
      }
    });
  }
});
