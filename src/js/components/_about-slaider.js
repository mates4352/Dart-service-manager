let arrowTop = document.querySelector('.about__arrow-top')
let arrowBot = document.querySelector('.about__arrow-bot')
let slaider = document.querySelector('.about__slaider')



arrowTop.onclick = function () {
	let wrapper = slaider.firstElementChild
	slaider.append(wrapper)
	
}

arrowBot.onclick = function () {
	let wrapper = slaider.lastElementChild
	slaider.prepend(wrapper)
}


console.log(slaider.children);
console.log(slaider.lastElementChild);
slaider.firstElementChild


// let div = document.createElement('div');
