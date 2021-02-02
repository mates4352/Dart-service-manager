
let accordion = document.querySelectorAll('.accordion')

accordion.forEach(function (event) {
	event.addEventListener('click', function () {
		this.classList.toggle("active")
	})
})

// document.addEventListener('click', event => {
// 	if (event.target.classList.contains("accordion__label")) {
// 		classListToggle(event.target)
		
// 	}
	
// })