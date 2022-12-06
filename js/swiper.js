
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // 640: {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        // },
        860: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 80
        },
        1680: {
            slidesPerView: 4,
            spaceBetween: 80
        }
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