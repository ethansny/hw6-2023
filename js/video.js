var video = document.querySelector("#player1");

// Sets default video settings
window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
});


// Plays the video
play_btn = document.querySelector("#play");
play_btn.addEventListener("click", function () {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = (volume_slider.value)
});

// Pauses the video
pause_btn = document.querySelector("#pause");
pause_btn.addEventListener("click", function () {
	console.log("Pause Video");
	video.pause()
});


// Slows down playback
slow_btn = document.querySelector("#slower");
slow_btn.addEventListener("click", function () {
		video.playbackRate *= .9;
		console.log("video slowed to", video.playbackRate)

})


// Speeds up playback
fast_btn = document.querySelector("#faster");
fast_btn.addEventListener("click", function () {
		video.playbackRate *= 1.1;
		console.log("video increased to", video.playbackRate)

})

// Make skip button functional, also makes the video pause if it skips over total length
skip_btn = document.querySelector("#skip")
skip_btn.addEventListener("click", function(){
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0
		video.pause()
		console.log("Video Start (paused)")
	}
	else{video.currentTime += 10
		console.log(video.currentTime)
	}
})


// Make mute button functional
mute_btn = document.querySelector("#mute")
mute_btn.addEventListener("click", function(){
	if(video.muted == true){
	video.muted = false
	mute_btn.innerHTML = "Mute"
	console.log("unmuted")
	}
	else{
		video.muted = true
		mute_btn.innerHTML = "Unmute"
		console.log("muted")
	}
})

// Makes volume slider functional

volume_slider = document.querySelector("#slider")
volume_slider.addEventListener("click", function(){
	video.volume = (volume_slider.value * .01)
	console.log(video.volume)
	document.querySelector("#volume").innerHTML = (volume_slider.value,"%")

})

Old_btn=document.querySelector("#vintage")
Old_btn.addEventListener("click", function(){
	console.log("oldSchoolclass")
	video.classList.add("oldSchool")
})

New_btn=document.querySelector("#orig")
New_btn.addEventListener("click", function(){
	console.log("videoClass")
	video.classList.remove("oldSchool")
})


// old_school_btn = document.querySelector("#vintage")

// old_school_btn.addEventListener("click", function(){
// 	video.classList.add("oldSchool")
// 	console.log("oldSchool")
// })