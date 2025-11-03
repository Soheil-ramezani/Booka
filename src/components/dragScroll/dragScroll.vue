<template>
  <swiper
    v-if="this.MediaWidth >= 1300"
    :slidesPerView="7.5"
    :spaceBetween="10"
    :modules="modules"
    class="mySwiper container my-10"
  >
    <!-- query: {id:item.title,movie: JSON.stringify(item) } -->
    <swiper-slide v-for="book in newBooksList" :key="book.id">
      <RouterLink
        :to="{
          name: 'BookPage',
          query: { id: book.id, Book: JSON.stringify(book) },
        }"
      >
        <div
          class="swiperItem flex flex-col items-center"
          @click="console.log(book)"
        >
          <!-- put book's img name here -->
          <img class="swiperItem__img" :src="book.imageUrl" alt="#" />
          <!-- put book's name here -->
          <span class="swiperItem__item"
            ><b>{{ book.name }}</b></span
          >
          <!-- put book's Author name here -->
          <span class="swiperItem__item charm-regular">{{ book.author }}</span>
        </div>
      </RouterLink>
    </swiper-slide>
  </swiper>
  <swiper
    v-else-if="this.MediaWidth > 1050"
    :slidesPerView="5.5"
    :spaceBetween="10"
    :modules="modules"
    class="mySwiper container my-10"
  >
    <swiper-slide v-for="book in newBooksList" :key="book.id">
      <RouterLink
        :to="{
          name: 'BookPage',
          query: { id: book.id, Book: JSON.stringify(book) },
        }"
        ><div
          class="swiperItem flex flex-col items-center"
          @click="console.log(book)"
        >
          <!-- put book's img name here -->
          <img class="swiperItem__img" :src="book.imageUrl" alt="#" />
          <!-- put book's name here -->
          <span class="swiperItem__item"
            ><b>{{ book.name }}</b></span
          >
          <!-- put book's Author name here -->
          <span class="swiperItem__item charm-regular">{{ book.author }}</span>
          <p></p></div
      ></RouterLink>
    </swiper-slide>
  </swiper>
  <swiper
    v-else-if="this.MediaWidth > 780"
    :slidesPerView="3.5"
    :spaceBetween="10"
    :modules="modules"
    class="mySwiper container my-10"
  >
    <swiper-slide v-for="book in newBooksList" :key="book.id">
      <RouterLink
        :to="{
          name: 'BookPage',
          query: { id: book.id, Book: JSON.stringify(book) },
        }"
      >
        <div
          class="swiperItem flex flex-col items-center"
          @click="console.log(book)"
        >
          <!-- put book's img name here -->
          <img class="swiperItem__img" :src="book.imageUrl" alt="#" />
          <!-- put book's name here -->
          <span class="swiperItem__item"
            ><b>{{ book.name }}</b></span
          >
          <!-- put book's Author name here -->
          <span class="swiperItem__item charm-regular">{{ book.author }}</span>
          <p></p></div
      ></RouterLink>
    </swiper-slide>
  </swiper>
  <swiper
    v-else
    :slidesPerView="1.5"
    :spaceBetween="10"
    :modules="modules"
    class="mySwiper container my-10"
  >
    <swiper-slide v-for="book in newBooksList" :key="book.id">
      <RouterLink
        :to="{
          name: 'BookPage',
          query: { id: book.id, Book: JSON.stringify(book) },
        }"
      >
        <div
          class="swiperItem flex flex-col items-center"
          @click="console.log(book)"
        >
          <!-- put book's img name here -->
          <img class="swiperItem__img" :src="book.imageUrl" alt="#" />
          <!-- put book's name here -->
          <span class="swiperItem__item"
            ><b>{{ book.name }}</b></span
          >
          <!-- put book's Author name here -->
          <span class="swiperItem__item charm-regular">{{ book.author }}</span>
          <p></p>
        </div>
      </RouterLink>
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
// pinia store
import { mapStores } from "pinia";
import { useBookStore } from "@/stores/books";
export default {
  name: "DragScroll",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      newBooksList: [],
      MediaWidth: window.innerWidth,
    };
  },
  computed: {
    ...mapStores(useBookStore),
  },
  beforeMount() {
     this.newBooksList=[]
            let chosenBooksId=[]
            for(let i =0;i<10;i++){
                let randomNum =Math.floor(Math.random() * 15);
                let chosenBook= this.BooksListStore.Books[randomNum]
                if(chosenBooksId.includes(chosenBook.id)){
                    i--
                }else{
                    chosenBooksId.push(chosenBook.id)
                    this.newBooksList.push(chosenBook)
                }
               
            }
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
 