var video;

window.addEventListener("load", function() {
	// console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.loop = false;
	video.autoplay = false;
});

document.querySelector("#play").addEventListener("click", function (){
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

});

document.querySelector("#pause").addEventListener("click", function (){
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function (){
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function (){
	video.playbackRate *= 1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function (){
	if (video.currentTime < video.duration - 10){
		video.currentTime += 10;
	} else {
		video.currentTime = 0
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function (){
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("input", function (){
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function (){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function (){
	video.classList.remove("oldSchool");
});
