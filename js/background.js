chrome.webNavigation.onBeforeNavigate.addListener(function (data) {
    var url = data.url;
    var tokens = /^(https?:\/\/\w+)\.m(\.wikipedia\.org\/.*)/.exec(url);
    if (tokens) {
        var newUrl = tokens[1] + tokens[2];
        chrome.tabs.update({ url: newUrl });
    }
});
