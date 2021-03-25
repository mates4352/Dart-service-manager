const description = document.querySelector('.header__description')
const button = document.querySelector('.bth')
const buttonColor = document.querySelector('.header__bth--color')

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
