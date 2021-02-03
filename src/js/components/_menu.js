window.addEventListener('resize', function () {
	adaptive_function();
})

function adaptive_header(w, h) {
	let menu = document.querySelector('.menu')
	let headerMenu = document.querySelector('.header__nav')
	
	if (w < 420) {

		if (!menu.classList.contains('done')) {
			menu.classList.add('done')
			menu.innerHTML = ''
			menu.innerHTML = headerMenu.innerHTML
			headerMenu.innerHTML = ''

		}
	}
	else {
		if (menu.classList.contains('done')) {
			menu.classList.remove('done')
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
