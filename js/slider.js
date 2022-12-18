import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
      
const swiper = new Swiper(document.querySelector("#grafic"), {
    // grabCursor: true,
    simulateTouch: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: "auto",
    watchOverflow: true,
});