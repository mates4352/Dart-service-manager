let video = document.querySelector('.media__video')
let media = document.querySelector('.media')
let bg= document.querySelector('.media-bg')
let videoBth = document.querySelector('.media-bth')
let controls = document.querySelector('.media-controls')
let progress = document.querySelector('.media__progress')
let durationBar = document.querySelector(".media__durationBar")


let bthControls = document.querySelector('.media__bth--controls')
let mediaSound = document.querySelector('.media__sound')

let mediaRadio = document.querySelector('.media__radio')
mediaSound.innerHTML = 100 + "%"

function playbackRate(value) {
	video.playbackRate = value;
}

function classListToggle(value) {
	value.classList.toggle('active')
}

function videoPlay() {
	video.play()
}
function videoPause() {
	video.pause()
}

function VideoPlayPaused() {
	if(video.paused)
		videoPlay()
	else {
		videoPause()
	}
}

function ifContainsAddClass() {
	if (bg.classList.contains('active')) {
		classListAdd(controls)
	}
}

function classListAdd(value) {
	value.classList.add('active')
}

function classListRemove(value) {
	value.classList.remove('active')
}

let durationBarTime = document.querySelector('.media__durationBar-time')
let durationBarSecond = document.querySelector('.second')
let durationBarMinute = document.querySelector('.minute')
let durationBarHour = document.querySelector('.hour')

function progressUpdate() { 
	durationBar.style.width = (video.currentTime / video.duration * 100) + "%"
	durationBarSecond.innerHTML = video.currentTime.toFixed() 
}

media.addEventListener('click', event => {

	if (event.target.classList.contains("media__video")) {

		if (video.paused && bthControls.classList.contains('active')) {
			video.pause()
		}
	
		else if (video.paused) {
			videoPlay()
			classListAdd(bg)
			classListAdd(videoBth)
		}
			
		else{
			videoPause()
			classListRemove(bg)
			classListRemove(videoBth)
		}
		
		classListRemove(controls)

	}

	if (event.target.classList.contains("media-bth")) {
		classListToggle(bg)
		classListToggle(videoBth)
		VideoPlayPaused()
	}
	
	if (event.target.classList.contains("media__bth--controls")) {
		classListToggle(bthControls)
		VideoPlayPaused()
	}

	if (event.target.classList.contains("media__bth--slowDown")) {
		playbackRate(0.5)
	}

	if (event.target.classList.contains("media__bth--normalSpeed")) {
		playbackRate(1)
	}

	if (event.target.classList.contains("media__bth--speedUp")) {
		playbackRate(10)
	}
	video.volume = 0
	if (event.target.classList.contains("media__radio")) {
		video.volume = mediaRadio.value / 100
		mediaSound.innerHTML = mediaRadio.value + "%"
	}

})

video.addEventListener('mouseover', function () {
	ifContainsAddClass()
})

video.addEventListener('mouseout', function () {
	classListRemove(controls)
})

controls.addEventListener('mouseover', function () {
	ifContainsAddClass()
})

controls.addEventListener('mouseout', function () {
	classListRemove(controls)
})





