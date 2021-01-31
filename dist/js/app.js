"use string"
let modal = document.querySelector('.modal')
let modalbody = document.querySelector('.modal__body')
let bth = document.querySelector('.header__bth')
let close = document.querySelector('.modal__close')

close.addEventListener('click', function () {
	modal.classList.remove('active')
})

bth.addEventListener('click', function () {
	modal.classList.add('active')
})

modal.addEventListener('click', function (event) {
	event.target.classList.remove('active')
})
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

function slowDown() {
	video.play();
	video.playbackRate = 0.5;
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

function progressUpdate() { 
	durationBar.style.width = (video.currentTime / video.duration * 100)  + "%";
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