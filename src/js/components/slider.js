import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".action__swiper", {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    slidesPerGroup: 2,
    spaceBetween: 60,
    navigation: {
        nextEl: ".action__navig-next",
        prevEl: ".action__navig-prev",
    },
    pagination: {
        el: ".action__pagination",
        clickable: true,
        type: "bullets",
    },
    breakpoints: {
        991: {
            spaceBetween: 60,
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 45,
        },
        600: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2.8,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        375: {
            slidesPerView: 2.6,
            slidesPerGroup: 2,
            spaceBetween: 40,
        },
         360: {
            slidesPerView: 2.6,
            slidesPerGroup: 2,
            spaceBetween: 40,
        },
        320: {
            slidesPerView: 2.4,
            spaceBetween: 20,

        },
    }
});