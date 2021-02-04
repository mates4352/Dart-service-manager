let arrowTop = document.querySelector('.about__arrow-top')
let arrowBot = document.querySelector('.about__arrow-bot')
let slaider = document.querySelector('.about__slaider')



document.querySelector('.about__col-right').addEventListener( 'click', (event) => {

	if (event.target.classList.contains('about__arrow-top')) {

		let wrapper = slaider.firstElementChild
		slaider.append(wrapper)

	}
	
	if (event.target.classList.contains('about__arrow-bot')) {
		
		let wrapper = slaider.lastElementChild
		slaider.prepend(wrapper)

	}

})


console.log(slaider.children);
console.log(slaider.lastElementChild);
slaider.firstElementChild


// let div = document.createElement('div');
