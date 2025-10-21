import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperConfig = {
  modules: [Navigation, Pagination, Autoplay],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    360: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 1, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 20 }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.works__swiper', swiperConfig);
});