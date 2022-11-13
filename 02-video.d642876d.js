!function(){var e=document.querySelector("iframe");console.log(e);var t=new Vimeo.Player(e);t.on("timeupdate",(function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",t)})),t.setCurrentTime(localStorage.getItem("videoplayer-current-time"))}();
//# sourceMappingURL=02-video.d642876d.js.map
