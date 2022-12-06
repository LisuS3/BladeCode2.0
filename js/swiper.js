
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    disableOnInteraction: false,
    centeredSlides: true,
    loopFillGroupWithBlank: true,

    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});