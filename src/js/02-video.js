

var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(`timeupdate`,  throttle(onPlay, 300));

function onPlay({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);
   
}


player.setCurrentTime(localStorage.getItem("videoplayer-current-time") ?? 0);







