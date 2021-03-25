const progressCircle = document.querySelector('.progress')
const progressLine = document.querySelector('.propress-line__item')

const propgressAnimation = () => {
	const scrollTop = window.scrollY
	const windowHeight = window.innerHeight
	const siteHeight = document.documentElement.scrollHeight
	const percentageProgress = (scrollTop / (siteHeight - windowHeight)) * 100
	progressLine.style.width = `${percentageProgress}%`

	const radius = progressCircle.getAttribute('r')
	const circleLength = 2 * Math.PI * radius
	progressCircle.setAttribute("stroke-dasharray", circleLength)
	progressCircle.setAttribute("stroke-dashoffset", -circleLength - circleLength * percentageProgress / 100)
}

propgressAnimation()

window.addEventListener('scroll', () => {
	propgressAnimation()
})
const goTop = document.querySelector('.arrowSvg')
window.addEventListener("scroll", () => {
	if (window.scrollY > 0 ) {
		goTop.style.display = 'flex'
	} else {
		goTop.style.display = "none"
	}

})

goTop.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});

})
