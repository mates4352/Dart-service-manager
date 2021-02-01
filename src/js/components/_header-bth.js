let description = document.querySelector('.header__description')
let button = document.querySelector('.bth')
let buttonColor = document.querySelector('.bth--color')

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