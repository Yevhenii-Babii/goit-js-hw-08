!function(){var e=document.querySelector("iframe");console.log(e);var t,o=new Vimeo.Player(e);o.on("timeupdate",(function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",t)})),o.setCurrentTime(null!==(t=localStorage.getItem("videoplayer-current-time"))&&void 0!==t?t:0)}();
//# sourceMappingURL=02-video.200feea0.js.map
