chrome.webNavigation.onBeforeNavigate.addListener((data)=>{
    let url = data.url;
    var tokens = /^(https?:\/\/\w+)\.m(\.wikipedia\.org\/.*)/.exec(url);
    if(tokens){    
    let newUrl= tokens[1]+tokens[2];
    chrome.tabs.update({url:newUrl});  
    }

})