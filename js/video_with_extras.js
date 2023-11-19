var video = document.querySelector("#player1");

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
});



play_btn = document.querySelector("#play");
play_btn.addEventListener("click", function () {
	console.log("Play Video");
	video.play()
});


pause_btn = document.querySelector("#pause");
pause_btn.addEventListener("click", function () {
	console.log("Pause Video");
	video.pause()
});

slow_btn = document.querySelector("#slower");

slow_btn.addEventListener("click", function () {
	if (video.playbackRate.toFixed(1) > .1) {
		video.playbackRate *= .9;
		console.log("video slowed to", video.playbackRate)
	}
	else (console.log("Slowest Playback Possible", video.playbackRate))
})

fast_btn = document.querySelector("#faster");
fast_btn.addEventListener("click", function () {
	if(video.paused){
		console.log("Video Paused");
	} else {
		if (video.playbackRate.toFixed(1) < 2){
			video.playbackRate *= 1.1;
			console.log("video increased to", video.playbackRate);
		} else {
			console.log("Fastest Playback Possible", video.playbackRate);
		}
	}
})
