new Swiper('.efforts-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    simulateTouch: true,
    slidesPerView:1,
});