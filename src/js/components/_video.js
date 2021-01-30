let video = document.querySelector('.media__video')
let bg= document.querySelector('.media-bg')
let videoBth = document.querySelector('.media-bth')
let controls = document.querySelector('.media-controls')
let progress = document.querySelector('.media__progress')
let durationBar = document.querySelector(".media__durationBar")

let bthControls = document.querySelector('.media__bth--controls')
let bthSlowDown = document.querySelector('.media__bth--slowDown')
let bthNormalSpeed = document.querySelector('.media__bth--normalSpeed')
let bthSpeedUp = document.querySelector('.media__bth--speedUp')


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

video.addEventListener('click', function () {
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
})

video.addEventListener('mouseover', function () {
	ifContainsAddClass()
})

video.addEventListener('mouseout', function () {
	classListRemove(controls)
})

videoBth.addEventListener('click', function () {
	classListToggle(bg)
	classListToggle(videoBth)
	VideoPlayPaused()
})

controls.addEventListener('mouseover', function () {
	ifContainsAddClass()
})

controls.addEventListener('mouseout', function () {
	classListRemove(controls)
})

bthControls.addEventListener('click', function () {
	classListToggle(bthControls)
	VideoPlayPaused()
})





