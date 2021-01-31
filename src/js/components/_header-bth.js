let description = document.querySelector('.header__description')
let button = document.querySelector('.bth')
let buttonRight = document.querySelector('.header__bth-right')

description.addEventListener('mouseover', event => {
	
	if (event.target.classList.contains('header__bth-right')) {
		classListAdd(button)
		classListAdd(buttonRight)
	}
	if (event.target.classList.contains('bth')) {
		classListAdd(button)
		classListAdd(buttonRight)
	}
	
})

description.addEventListener('mouseout', event => {
	classListRemove(button)
	classListRemove(buttonRight)
})