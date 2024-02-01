document.addEventListener('DOMContentLoaded', function () {
    let videoSources = ["videos/background-video-1.mov", "videos/background-video-2.mov", "videos/background-video-3.mov"];

    let randomIndex = Math.floor(Math.random() * videoSources.length);
    let selectedVideo = videoSources[randomIndex];

    let videoBackground = document.getElementById("video-background");
    videoBackground.src = selectedVideo;

    
});



