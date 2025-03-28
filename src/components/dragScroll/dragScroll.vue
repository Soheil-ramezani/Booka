<template>
    <swiper
      :slidesPerView="5.5"
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper mb-10"
    >
      <swiper-slide><img src="./../../assets/91hYnazD-oL.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="./../../assets/91hYnazD-oL.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="./../../assets/91hYnazD-oL.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="./../../assets/91hYnazD-oL.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="./../../assets/91hYnazD-oL.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="./../../assets/91hYnazD-oL.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="./../../assets/91hYnazD-oL.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="./../../assets/91hYnazD-oL.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="./../../assets/91hYnazD-oL.jpg" alt=""></swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    // import required modules
    import { Pagination } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination],
        };
      },
    };
  </script>
  