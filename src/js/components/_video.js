const video = document.querySelector('.media__video')
const media = document.querySelector('.media')
const bg = document.querySelector('.media-bg')
const videoBth = document.querySelector('.media-bth')
const controls = document.querySelector('.media-controls')
const progress = document.querySelector('.media__progress')
const durationBar = document.querySelector(".media__durationBar")

const bthControls = document.querySelector('.media__bth--controls')
const bthVolume = document.querySelector('.media__bth--volume')
const mediaSound = document.querySelector('.media__sound')

const mediaRadio = document.querySelector('.media__radio')

function videoPlay() {
	video.play()
}

function videoPause() {
	video.pause()
}

function VideoPlayPaused() {
	if (video.paused)
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

		else {
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
			video.volume = parseInt(mediaSound.innerHTML) / 100
			classListRemove(bthVolume)
		}
	}


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

const mediaConteinerBar = document.querySelector('.media__conteinerBar')

mediaConteinerBar.addEventListener('mousedown', function (event) {

	function dragDrop(event) {
		const left = this.getBoundingClientRect().left
		const time = ((event.pageX - left) / this.offsetWidth) * video.duration
		video.currentTime = time
	}

	this.addEventListener('mousemove', dragDrop)
	this.addEventListener('click', dragDrop)

	this.addEventListener('mouseup', function (event) {
		const left = mediaConteinerBar.getBoundingClientRect().left
		const time = ((event.pageX - left) / this.offsetWidth) * video.duration
		video.currentTime = time

		this.removeEventListener("mousemove", dragDrop);
		this.removeEventListener("click", dragDrop);
	})

})

const durationBarSecond = document.querySelector('.second')
const durationBarMinute = document.querySelector('.minute')
const durationBarHour = document.querySelector('.hour')

function progressUpdate() {
	durationBar.style.width = (video.currentTime / video.duration * 100) + "%"

	let secondsTime = video.currentTime.toFixed()
	const minutes = Math.floor(secondsTime / 60)
	const seconds = secondsTime - minutes * 60
	const hour = Math.floor(minutes / 60)

	minutes - hour * 60
	durationBarMinute.innerHTML = minutes
	durationBarSecond.innerHTML = seconds
	durationBarHour.innerHTML = hour
}

const circle = document.querySelector(".media__circle")
const RangeBar = document.querySelector(".media__rangeBar")
const range = document.querySelector(".media__range")
const time = 60
mediaSound.innerHTML = `${time}%`
video.volume = `${time / 100}`
range.style.width = `${time}%`
circle.style.left = `${time}%`

circle.addEventListener('mousedown', () => {
	function dragDrop(event) {
		const left = RangeBar.getBoundingClientRect().left
		const pageX = event.pageX - left
		const rangeBarWidth = RangeBar.offsetWidth

		range.style.width = `${pageX}px`
		circle.style.left = `${pageX}px`

		if (parseInt(circle.style.left) >= rangeBarWidth) {
			circle.style.left = 100 + "%"
		}
		if (parseInt(circle.style.left) < 0) {
			video.volume = 0
			circle.style.left = 0 + "%"
		}

		if (bthVolume.classList.contains('active')) {
			video.volume = 0
		}
		else {
			video.volume = (pageX / rangeBarWidth)
		}

		mediaSound.innerHTML = (pageX / (rangeBarWidth / 100)).toFixed() + "%"
		console.log("htlll");
	}

	RangeBar.addEventListener("mousemove", dragDrop)
	RangeBar.addEventListener("click", dragDrop)

	circle.addEventListener('mouseup', () => {
		RangeBar.removeEventListener("mousemove", dragDrop)
		RangeBar.removeEventListener("click", dragDrop)
	})

})

const header = document.querySelector('.header__title')
window.addEventListener('scroll',()=> {
	if (window.scrollY == 0) {
		header.style.display = "none"
	}
})




