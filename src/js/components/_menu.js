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