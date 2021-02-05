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
