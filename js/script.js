var vid, playbtn, progress, curtimetext, durtimetext, mutebtn, fullscreenbtn;

function initializePlayer(){
	vid = document.getElementById("video");
	playbtn = document.getElementById("playpausebtn");
	progress = document.getElementById("progressbar");
	curtimetext = document.getElementById("curtimetext");
	durtimetext = document.getElementById("durtimetext");
	mutebtn = document.getElementById("mutebtn");
	fullscreenbtn = document.getElementById("fullscreenbtn");
	playbtn.addEventListener("click",playPause,false);
	progress.addEventListener("change",vidProgress,false);
	vid.addEventListener("timeupdate",vidProgressUpdate,false);
	mutebtn.addEventListener("click",vidMute,false);
	fullscreenbtn.addEventListener("click",toggleFullScreen,false);
}

window.onload = initializePlayer;

function playPause(){
	if(vid.paused){
		vid.play();
		playbtn.style.background = "url(./icons/pause-icon.png)";
	} else {
		vid.pause();
		playbtn.style.background = "url(./icons/play-icon.png)";
	}
}

function vidProgress(){
	var seekto = vid.duration * progress.value / 100;
	vid.currentTime = seekto;
}

function vidProgressUpdate(){
	var newtime = vid.currentTime / vid.duration * 100;
	progress.value = newtime;
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0" + cursecs; }
	if(dursecs < 10){ dursecs = "0" + dursecs; }
	if(curmins < 10){ curmins = "0" + curmins; }
	if(durmins < 10){ durmins = "0" + durmins; }
	curtimetext.innerHTML = curmins + ":" + cursecs;
	durtimetext.innerHTML = durmins + ":" + dursecs;
}

function vidMute(){
	if(vid.muted){
		vid.muted = false;
		mutebtn.style.background = "url(./icons/volume-on-icon.png)";
	} else {
		vid.muted = true;
		mutebtn.style.background = "url(./icons/volume-off-icon.png)";
	}
}

function toggleFullScreen(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}











