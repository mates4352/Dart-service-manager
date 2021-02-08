const swiper = new Swiper('.about__slaider-conteiner', {
	direction: 'vertical',
	loop: true,
	pagination: {
		el: '.about__slaider-pagination',
		clickble: true,
	},

	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},

	grabCursor: true,

	slidesPerView: 2,
	freeMode:true,
	
	hashNavigation: {
		watchState:true,
	},
	mousewheel:{
		sensitivity:1,
		eventsTarget: ".about__slaider-conteiner" 
	},
	// effect:'cube',
	// cubeEffect:  {
	// 	slideShadows: true,
	// 	shadow: true,
	// 	shadowOffset: 20,
	// 	shadowScale:0.93,
	// },
	effect:'coverflow',
	coverflowEffect: {
		rotate: 5,
		stretch:15,
		slideShadows: false,
	},
	spaceBetween: 90,
	freeModeMomentumBounce: true,
	
	autoplay: {
		delay: 2000,
		stopOnLastSlide: true,
		didableOnInteraction:false
	},

	speed:1000,

});


const swiper_2 = new Swiper('.team__slider-container', {
	loop: true,

	grabCursor: true,

	slidesPerView: 1,
	initialslide: 1,
	centeredSlides: true,
	
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		didableOnInteraction:true
	},
	touchRatio:0.5,

	speed:1000,

});
