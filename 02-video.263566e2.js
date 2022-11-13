const e=document.querySelector("iframe");console.log(e);const t=new Vimeo.Player(e);var o;t.on("timeupdate",(function({seconds:e}){localStorage.setItem("videoplayer-current-time",e)})),t.setCurrentTime(null!==(o=localStorage.getItem("videoplayer-current-time"))&&void 0!==o?o:0);
//# sourceMappingURL=02-video.263566e2.js.map
