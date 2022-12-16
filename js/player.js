// Get videos on page load 
(function(){
    getVideos();
})();
  
// Main function
function getVideos(){
    var inputData = document.getElementsByClassName("video-player");
    // for each video in the page
    for (var i = 0; i < inputData.length; i++){
        var prevWrapper = document.createElement("div");
        // get video id
        var videoId = inputData[i].getAttribute("data-id");
        // get video thumbnail img src...
        var thumbnailSrc = inputData[i].hasAttribute("data-thumbnail") 
            ? inputData[i].getAttribute("data-thumbnail")
            // ... (if provided, if not leave blank)
            : "" ;
        // if video thumbnail img src exists, pass it as argument to custom function
        if(thumbnailSrc.length)
            prevWrapper.innerHTML = createCustomThumbnail(thumbnailSrc);
        // otherwise, pass video id to different custom function
        else
            prevWrapper.innerHTML = createThumbnail(videoId);
        // either result is inserted in the newly generated div (prevWrapper)
        // prevWrapper is appended as inputData's div child node
        inputData[i].appendChild(prevWrapper);
        // add a click listener to the thumbnail to replace it for iframe 
        prevWrapper.addEventListener("click", function(){
            // get the prevWrapper's parent node (inputData) 
            var parent = this.parentNode;
            // call to create iframe function
            //createIframe(parent, parent.getAttribute("data-id"));
            createIframe(parent, videoId);
        });
    }
}
  
  // Custom functions
function createCustomThumbnail(src){
    return(
        '<img class="video-thumbnail" src="' + src + '"" alt="video-preview" /> <div class="video-play-btn"></div>'
    );
}
  
function createThumbnail(id){
    return (
        '<img class="video-thumbnail" src="//i.ytimg.com/vi_webp/' + id + '/maxresdefault.webp" alt="Youtube preview"><div class="video-play-btn"></div>'
    );
}
  
function createIframe(targetDiv, id){
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + id + "?autoplay=1&color=white&autohide=2&modestbranding=1&border=0&wmode=opaque&enablejsapi=1&showinfo=0&rel=0");
    // Required for autoplay, suggested here: https://stackoverflow.com/questions/7281765/how-to-embed-an-autoplaying-youtube-video-in-an-iframe (seems not to work in Codepen)
    iframe.setAttribute("allow", "autoplay");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("class", "video-iframe");
    targetDiv.firstChild.replaceWith(iframe);
}
  