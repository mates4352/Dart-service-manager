let modal = document.querySelector('.modal')
let modalbody = document.querySelector('.modal__body')
let bth = document.querySelector('.header__bth-menu')
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

