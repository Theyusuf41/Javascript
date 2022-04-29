const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('.video');
const playBtn = videoPlayer.querySelector('.playBtn');

playBtn.addEventListener('click', (e) => {
    if(video.paused){
        video.play()
        e.target.textContent = "Pause"
    } else{
        video.pause()
        e.target.textContent = "Start"
    }
});