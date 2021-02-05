"use strict"

function classListToggle(value) {
	value.classList.toggle('active')
}

function classListAdd(value) {
	value.classList.add('active')
}

function classListRemove(value) {
	value.classList.remove('active')
}

function classListContains(value) {
	value.classList.contains('active')
}
let menu = document.querySelector('.menu')

window.addEventListener('resize', function () {
	adaptive_function();
	adaptive_header(w, h)
})
	
function adaptive_header(w, h) {
	let headerMenu = document.querySelector('.header__nav')
	let nav = document.querySelector('.nav__list')
	
	if (w < 420) {

		if (!nav.classList.contains('done')) {
			nav.classList.add('done')
			menu.innerHTML = ''
			menu.innerHTML = headerMenu.innerHTML
			headerMenu.innerHTML = ''
		}
	}

	else {

		if (nav.classList.contains('done')) {
			nav.classList.remove('done')
			headerMenu.innerHTML = menu.innerHTML
			menu.innerHTML = ''
		}

	}
}

function adaptive_function() {
	let w = window.innerWidth
	let h = window.innerHeight
	adaptive_header(w, h);
}

adaptive_function()

let burger = document.querySelector('.burger')

burger.addEventListener("click", function () {
	classListToggle(burger)
	classListToggle(menu)
})
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
let description = document.querySelector('.header__description')
let button = document.querySelector('.bth')
let buttonColor = document.querySelector('.header__bth--color')

description.addEventListener('mouseover', event => {
	
	if (event.target.classList.contains('bth')) {
		classListAdd(button)
		classListAdd(buttonColor)
	}
	
})

description.addEventListener('mouseout', event => {
	classListRemove(button)
	classListRemove(buttonColor)
})
let arrowTop = document.querySelector('.about__arrow-top')
let arrowBot = document.querySelector('.about__arrow-bot')
let slaider = document.querySelector('.about__slaider')


document.querySelector('.about__col-right').addEventListener( 'click', (event) => {

	if (event.target.classList.contains('about__arrow-top')) {

		let wrapper = slaider.firstElementChild
		slaider.append(wrapper)

	}
	
	if (event.target.classList.contains('about__arrow-bot')) {

		let wrapper = slaider.lastElementChild
		slaider.prepend(wrapper)

	}

})




console.log(slaider.children);
console.log(slaider.lastElementChild);
slaider.firstElementChild
let bthContect = document.querySelector('.contect__bth')
let chekcbox = document.querySelector('.contect__label')

chekcbox.addEventListener('click', () => {

	if (bthContect.hasAttribute("disabled",true)) {
		bthContect.removeAttribute("disabled")
	}
	
	else {
		bthContect.setAttribute("disabled","disabled")
	}

})