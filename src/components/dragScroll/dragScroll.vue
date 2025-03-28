<template>
  <swiper
    :slidesPerView="5.5"
    :spaceBetween="10"
    :modules="modules"
    class="mySwiper my-10"
  >
    <swiper-slide v-for="book in books" :key="book.id">
      <div class="swiperItem flex flex-col items-center">
        <!-- put book's img name here -->
        <img class="swiperItem__img" src="./../../assets/91hYnazD-oL.jpg" alt="#">
        <!-- put book's name here -->
        <span class="swiperItem__item "><b>Book's Name{{ book.name }}</b></span>
        <!-- put book's Author name here -->
        <span class="swiperItem__item charm-regular">Book's author</span>
        <p></p>
      </div>
    </swiper-slide>
  </swiper>
</template>
  <script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

export default {
  name:'DragScroll',
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      books:[
        {id:1,name:"a"},
        {id:2,name:"b"},
        {id:3,name:"c"},
        {id:4,name:"d"},
        {id:5,name:"e"},
        {id:6,name:"f"},
        {id:7,name:"g"},
      ]
    }
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
  