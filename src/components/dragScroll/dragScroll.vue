<template>
  <swiper
    v-if="this.MediaWidth >= 1300"
    :slidesPerView="7.5"
    :spaceBetween="10"
    :modules="modules"
    class="mySwiper container my-10"
  >
    <!-- query: {id:item.title,movie: JSON.stringify(item) } -->
    <swiper-slide v-for="book in this.books" :key="book.id">
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
    :slidesPerView="6.5"
    :spaceBetween="10"
    :modules="modules"
    class="mySwiper container my-10"
  >
    <swiper-slide v-for="book in this.books" :key="book.id">
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
    :slidesPerView="4.5"
    :spaceBetween="10"
    :modules="modules"
    class="mySwiper container my-10"
  >
    <swiper-slide v-for="book in this.books" :key="book.id">
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
    :slidesPerView="2.5"
    :spaceBetween="10"
    :modules="modules"
    class="mySwiper container my-10"
  >
    <swiper-slide v-for="book in this.books" :key="book.id">
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

export default {
  name: "DragScroll",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      // All Books Array
      books: [
        {
          id: 1,
          name: "The Silent Patient",
          author: "Alex Michaelides",
          imageUrl:
            "https://m.media-amazon.com/images/I/91BbLCJOruL._AC_UY327_FMwebp_QL65_.jpg",
          summary:
            "A psychological thriller about a woman who shoots her husband and then stops speaking.",
        },
        {
          id: 2,
          name: "Where the Crawdads Sing",
          author: "Delia Owens",
          imageUrl:
            "https://m.media-amazon.com/images/I/81O1oy0y9eL._AC_UF1000,1000_QL80_.jpg",
          summary:
            "A murder mystery and coming-of-age story set in the marshes of North Carolina.",
        },
        {
          id: 3,
          name: "Atomic Habits",
          author: "James Clear",
          imageUrl:
            "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
          summary:
            "A guide to building good habits and breaking bad ones through tiny changes.",
        },
        {
          id: 4,
          name: "The Midnight Library",
          author: "Matt Haig",
          imageUrl:
            "https://m.media-amazon.com/images/I/81YzHKeWq7L._AC_UF1000,1000_QL80_.jpg",
          summary:
            "A novel about a library between life and death where each book represents a different life path.",
        },
        {
          id: 5,
          name: "Educated",
          author: "Tara Westover",
          imageUrl:
            "https://m.media-amazon.com/images/I/61xta2jWBBL._AC_UY327_FMwebp_QL65_.jpg",
          summary:
            "A memoir about a woman who leaves her survivalist family and goes on to earn a PhD.",
        },
        {
          id: 6,
          name: "Project Hail Mary",
          author: "Andy Weir",
          imageUrl:
            "https://m.media-amazon.com/images/I/91O-uZgXpyL._AC_UY327_FMwebp_QL65_.jpg",
          summary:
            "A sci-fi novel about a lone astronaut who must save the earth from an alien threat.",
        },
        {
          id: 7,
          name: "The Four Winds",
          author: "Kristin Hannah",
          imageUrl:
            "https://m.media-amazon.com/images/I/71b86Ngu0KL._AC_UY327_FMwebp_QL65_.jpg",
          summary:
            "A historical novel set during the Great Depression about a woman's struggle to survive.",
        },
        {
          id: 8,
          name: "The Vanishing Half",
          author: "Brit Bennett",
          imageUrl:
            "https://m.media-amazon.com/images/I/61wvPTKenCL._AC_UY327_FMwebp_QL65_.jpg",
          summary:
            "A story about twin sisters who choose to live in very different worlds - one black, one passing as white.",
        },
        {
          id: 9,
          name: "Dune",
          author: "Frank Herbert",
          imageUrl:
            "https://m.media-amazon.com/images/I/71-1WBgjGoL._AC_UY327_FMwebp_QL65_.jpg",
          summary:
            "A science fiction classic about politics, religion, and power on a desert planet.",
        },
        {
          id: 10,
          name: "The Song of Achilles",
          author: "Madeline Miller",
          imageUrl:
            "https://m.media-amazon.com/images/I/51iDejsms3L._AC_UY327_FMwebp_QL65_.jpg",
          summary:
            "A retelling of the Iliad focusing on the romantic relationship between Achilles and Patroclus.",
        },
        // ... (continuing with IDs 11-30)

        // Example of how to continue (just showing the pattern for the next few)
        /*
  {
    id: 11,
    name: "Book Name",
    author: "Author Name",
    imageUrl: "Amazon image URL",
    summary: "Book summary"
  },
  ...
*/
      ],
      // media screen width
      MediaWidth: window.innerWidth,
    };
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
 