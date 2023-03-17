
window.swiper = new Swiper({
    el:'.slider__container',
    slideClass: 'slider__slide',
    createElements: true,
    autoplay: {
        delay: 5000
    },
    loop: true,
    spaceBetween: 100,
    pagination: true,
    navigation: true,
});