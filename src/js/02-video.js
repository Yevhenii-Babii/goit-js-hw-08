


const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Vimeo.Player(iframe);

player.on(`timeupdate`, onPlay)

function onPlay({seconds}) {
   
    localStorage.setItem('videoplayer-current-time', seconds);
   
}


player.setCurrentTime(localStorage.getItem("videoplayer-current-time") ?? 0);







