const modal = document.querySelector('.modal')
const modalbody = document.querySelector('.modal__body')
const bth = document.querySelector('.header__bth-menu')
const close = document.querySelector('.modal__close')
const body = document.querySelector('body')


close.addEventListener('click', function () {
	modal.classList.remove('active')
	body.classList.remove('active')
})

bth.addEventListener('click', function () {
	modal.classList.add('active')
	body.classList.add('active')
})

modal.addEventListener('click', function (event) {
	event.target.classList.remove('active')
})

