

import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe);

function onPlay({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);
}
player.on(`timeupdate`, onPlay)

player.setCurrentTime(localStorage.setItem("videoplayer-current-time"))



