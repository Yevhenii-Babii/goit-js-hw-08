const e=document.querySelector("iframe");console.log(e);const t=new Vimeo.Player(e);t.on("timeupdate",(function({seconds:e}){localStorage.setItem("videoplayer-current-time",e)})),t.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
//# sourceMappingURL=02-video.2239a7cb.js.map
