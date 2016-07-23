var vid = $("#video")[0];
var timedrag = false;

function clearColor(){
	$(".sentence").css("color","black");
}

function updatebar(x) {
	var progress = $("#progressbar");
	var position = x - progress.offset().left;
	var percentage = 100 * position / progress.width();

	if(percentage > 100) {
		percentage = 100;
	}
	if(percentage < 0) {
		percentage = 0;
	}

	$("#timebar").css("width",percentage+"%");
	vid.currentTime = vid.duration * percentage / 100;
}

$("#videoplayer").hover(
	function(){
		$("#controls").css("opacity","1");
		$("#controlbar").css("top","-70px");
	},
	function(){
		$("#controls").css("opacity","0");
		$("#controlbar").css("top","-25px");
	}
);

$("#playpausebtn").click(
	function() {
		if(vid.paused) {
			vid.play();
			$("#playpausebtn").css("background","url(./icons/pause-icon.png)");
		} else {
			vid.pause();
			$("#playpausebtn").css("background","url(./icons/play-icon.png)");
		}
});

$("#mutebtn").click(
	function() {
		if(vid.muted) {
			vid.muted = false;
			$("#mutebtn").css("background","url(./icons/volume-on-icon.png)");
		} else {
			vid.muted = true;
			$("mutebtn").css("background","url(./icons/volume-off-icon.png)");
		}
});

$("#fullscreenbtn").click(
	function() {
		if(vid.requestFullScreen) {
			vid.requestFullScreen();
		} else if(vid.webkitRequestFullScreen) {
			vid.webkitRequestFullScreen();
		} else if(vid.mozRequestFullScreen) {
			vid.mozRequestFullScreen();
		}
});

$("#video").on("timeupdate",function(){
    var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0" + cursecs; }
	if(dursecs < 10){ dursecs = "0" + dursecs; }
	if(curmins < 10){ curmins = "0" + curmins; }
	if(durmins < 10){ durmins = "0" + durmins; }
	$("#curtimetext").text(curmins + ":" + cursecs);
	$("#durtimetext").text(durmins + ":" + dursecs);

    var percentage = vid.currentTime / vid.duration * 100;
	$("#timebar").css("width",percentage+"%");

	var curmil = vid.currentTime * 1000;
	if(curmil > 0 && curmil < 7535) {
		clearColor();
		$(".sentence:nth-of-type(1)").css("color","red");
	} else if(curmil > 7535 && curmil < 13960) {
		clearColor();
		$(".sentence:nth-of-type(2)").css("color","red");
	} else if(curmil > 13960 && curmil < 17940) {
		clearColor(); 
		$(".sentence:nth-of-type(3)").css("color","red"); 
	} else if(curmil > 17940 && curmil < 30920) {
		clearColor();
		$(".sentence:nth-of-type(4)").css("color","red");
	} else if(curmil > 30920 && curmil < 41190) {
		clearColor(); 
		$(".sentence:nth-of-type(5)").css("color","red");
	} else if(curmil > 41190 && curmil < 53760) {
		clearColor();
		$(".sentence:nth-of-type(6)").css("color","red");
	} else if(curmil > 53760 && curmil < 60150) {
		clearColor();
		$(".sentence:nth-of-type(7)").css("color","red");
	}
});


$("#progressbar").mousedown(function(e) {
	timedrag = true;
	updatebar(e.pageX);
});

$("#progressbar").mouseup(function(e) {
	if(timedrag) {
		timedrag = false;
		updatebar(e.pageX);
	}
});

$("#progressbar").mousemove(function(e) {
	if(timedrag) {
		updatebar(e.pageX);
	}
});













