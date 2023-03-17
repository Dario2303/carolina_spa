
window.swiper = new Swiper({
    el:'.slider__container',
    slideClass: 'slider__slide',
    createElements: true,
    autoplay: {
        delay: 2000
    },
    loop: true,
    speed: 1000,
    spaceBetween: 100,
    pagination: true,
    navigation: true,
});