var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector('#slower').addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("New Speed " + video.playbackRate);
});

document.querySelector('#faster').addEventListener('click', function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New Speed " + video.playbackRate);
});

document.querySelector('#mute').addEventListener('click', function() {
	if(video.muted==false) video.muted = true, mute.innerText = "Unmute";
	else video.muted = false, mute.innerText="Mute";

});

document.querySelector('#skip').addEventListener('click', function() {
	console.log("Original location " + video.currentTime);

	if (video.currentTime < video.duration - 15){
		video.currentTime += 15
	}

	else{
		video.currentTime = 0
		console.log("Starting over")
	}
	console.log("New location " + video.currentTime)
});

document.querySelector("#slider").addEventListener('click', function() {
	video.volume = this.value + "%";
	document.getElementById('volume').innerText = this.value;
});

document.querySelector("#vintage").addEventListener('click', function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener('click', function() {
	video.classList.remove("oldSchool");
});