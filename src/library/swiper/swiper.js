const swiper = new Swiper('.about__slaider-conteiner', {
	direction: 'vertical',
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickble: true,
	},

	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},
	slidesPerView:2,
	// effect:'cube',
	// cubeEffect:  {
	// 	slideShadows: true,
	// 	shadow: true,
	// 	shadowOffset: 20,
	// 	shadowScale:0.7
	// },
	spaceBetween: 90,
	freeModeMomentumBounce:true,
	autoplay: {
		delay: 2000,
		stopOnLastSlide: true,
		didableOnInteraction:false
	},

	speed:1000,

});
