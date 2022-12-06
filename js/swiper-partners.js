
const swiperPartners = new Swiper(".swiper-partners", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    disableOnInteraction: false,
    centeredSlides: true,
    loopFillGroupWithBlank: true,
    loop: true,
    pagination: {
        el: ".pagination-partners",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});