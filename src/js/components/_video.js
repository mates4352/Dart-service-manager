

let video = document.querySelector('.media__video')
let media = document.querySelector('.media')
let bg= document.querySelector('.media-bg')
let videoBth = document.querySelector('.media-bth')
let controls = document.querySelector('.media-controls')
let progress = document.querySelector('.media__progress')
let durationBar = document.querySelector(".media__durationBar")

let bthControls = document.querySelector('.media__bth--controls')
let bthVolume = document.querySelector('.media__bth--volume')
let mediaSound = document.querySelector('.media__sound')
mediaSound.innerHTML = 100 + "%"

let mediaRadio = document.querySelector('.media__radio')

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

function playbackRate(value) {
	video.playbackRate = value;
}

media.addEventListener('click', event => {

	if (event.target.classList.contains("media__video")) {

		if (video.paused && bthControls.classList.contains('active')) {
			video.play()
			classListRemove(bthControls)
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
	
	if (event.target.classList.contains("media__bth--volume")) {
		if (video.volume) {
			video.volume = 0
			classListAdd(event.target)
		}
		else {
			video.volume = mediaRadio.value / 100
			classListRemove(bthVolume)
		}
	}

	if (event.target.classList.contains("media__radio")) {

		if (bthVolume.classList.contains("active")) {
			video.volume = 0
			mediaSound.innerHTML = mediaRadio.value + "%"
		}
		else {
			video.volume = mediaRadio.value / 100
			mediaSound.innerHTML = mediaRadio.value + "%"
		}
		
	}
})

let durationBarTime = document.querySelector('.media__durationBar-time')
let durationBarSecond = document.querySelector('.second')
let durationBarMinute = document.querySelector('.minute')
let durationBarHour = document.querySelector('.hour')

function progressUpdate() { 
	durationBar.style.width = (video.currentTime / video.duration * 100) + "%"
	durationBarSecond.innerHTML = video.currentTime.toFixed()
}

let mediaConteinerBar = document.querySelector('.media__conteinerBar')

mediaConteinerBar.addEventListener('click', function (event) {
	let leftMargin = mediaConteinerBar.getBoundingClientRect().left
	let time =((event.pageX - leftMargin) / mediaConteinerBar.offsetWidth  ) * video.duration 
	video.currentTime = time
})

video.addEventListener('mousemove', function () {
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





