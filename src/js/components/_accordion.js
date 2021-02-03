
let accordion = document.querySelectorAll('.accordion')

accordion.forEach(function (event) {
	event.addEventListener('click', function () {
		this.classList.toggle("active")
	})
})

