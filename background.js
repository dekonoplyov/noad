var callback = function(details) {
    console.log("URL: " + details.url);
    return {cancel: false}; 
};
var filter = {
    urls: ["https://an.yandex.ru/*"]
};

chrome.webRequest.onBeforeRequest.addListener(callback, filter);