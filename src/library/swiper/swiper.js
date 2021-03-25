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

	

	slidesPerView: 2,
	
	hashNavigation: {
		watchState:true,
	},

	effect:'cube',
	cubeEffect:  {
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale:0.93,
	},
	// effect:'coverflow',
	// coverflowEffect: {
	// 	rotate: 5,
	// 	stretch:15,
	// 	slideShadows: false,
	// },
	spaceBetween: 90,
	freeModeMomentumBounce: true,
	
	autoplay: {
		delay: 2000,
		stopOnLastSlide: true,
		didableOnInteraction:false
	},

	speed: 1000,
	
	breakpoints: {
		0: {
			grabCursor: false,
			touchRatio: 0,
		},
		1024: {
			touchRatio: 1,
			grabCursor: true,
		}
	 },
});


const swiper_2 = new Swiper('.team__slider-container', {
	loop: true,
	grabCursor: true,
	slidesPerView: 3,
	centeredSlides: true,
	spaceBetween: 30,
	autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
		didableOnInteraction:true
	},
	touchRatio:0.5,
	speed: 1000,
	
	breakpoints: {
		0: {
		  slidesPerView: 1,
		  spaceBetween: 20
		},
		576: {
		  slidesPerView: 2,
		  spaceBetween: 30
		},
		992: {
		  slidesPerView: 3,
		  spaceBetween: 40
		}
	 },

});
