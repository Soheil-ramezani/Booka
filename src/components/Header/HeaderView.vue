<template>
  <Header class="header flex flex-col justify-center items-center pb-20">
    <div class="header-middle mt-[40px] flex flex-row items-center w-full">
      <!-- Header Left -->
      <div
        class="header-Left pl-[10%] flex flex-col justify-center"
        :class="{
          // bigger
          'w-6/12': MediaWidth > 990,
          'items-start': MediaWidth > 990,

          // smaller
          'w-full': MediaWidth < 990,
          'items-center': MediaWidth < 990,
        }"
      >
        <p v-if="MediaWidth >= 490" class="header-title__p1 charm-bold">
          Find Your <br />
          Next Book
        </p>
        <p v-if="MediaWidth < 490" class="header-title__p2 charm-bold">
          Find Your <br />
          Next Book
        </p>
        <p class="header-title__p">
          Our most popular and trending
          <b class="pacifico-regular">BOOKA</b> perfect <br />
          not sure what to read now next reading mood Perfectly
        </p>
        <button class="header-left__btn mt-14 py-2 px-20 charm-bold">
          Explore Now
        </button>
      </div>
      <!-- Header-right -->
      <div
        class="header-right w-6/12 justify-around items-center"
        v-show="this.MediaWidth > 990"
      >
        <!-- Books -->
        <div
          class="header-books w-full grid gap-10 items-center justify-center"
        >
          <!-- left book -->
          <div
            class="header-book--sides h-full flex flex-col pt-20 items-center"
          >
            <RouterLink :to="{ name: 'BookPage', query: { id: this.HeaderBooks[0].id, Book: JSON.stringify(this.HeaderBooks[0]) } }">
              <img
                src="https://m.media-amazon.com/images/I/81mdiQ5B+7L._SL1500_.jpg"
                class="header-book__img"
                alt="img1"
              />
              <h2 class="header-book__h2 text-center mt-4">
                The Bookstore Keepers
              </h2>
              <p class="header-book__p text-center">Alice Hoffman</p>
            </RouterLink>
          </div>
          <!-- middle book -->
          <div
            class="header-book--middle h-full flex flex-col pt-20 items-center"
          >
          <RouterLink :to="{ name: 'BookPage', query: { id: this.HeaderBooks[1].id, Book: JSON.stringify(this.HeaderBooks[1]) }}">
            <h2 class="header-book__h2 text-center mt-4">DAISY DARKER</h2>
            <p class="header-book__p text-center">ALICE FEENY</p>
            <img
              src="https://m.media-amazon.com/images/I/81QNZEa16fL._SL1500_.jpg"
              class="header-book__img"
              alt="img1"
            />
          </RouterLink>
            
          </div>
          <!--Right Book -->
          <div
            v-show="this.MediaWidth > 1300"
            class="header-book--sides h-full flex flex-col pt-20 items-center"
          >
          <RouterLink :to="{ name: 'BookPage', query: { id: this.HeaderBooks[2].id, Book: JSON.stringify(this.HeaderBooks[2]) }}">
             <img
              src="https://m.media-amazon.com/images/I/515j2DspaRL._AC_UY327_FMwebp_QL65_.jpg"
              class="header-book__img"
              alt="img1"
            />
            <h2 class="header-book__h2 text-center mt-4">
              Commerce in Culture
            </h2>
            <p class="header-book__p text-center">Cynthia J. Brokaw</p>
          </RouterLink>
           
          </div>
        </div>
      </div>
    </div>
  </Header>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
    return {
      MediaWidth: window.innerWidth,
      HeaderBooks: [
        {
          id: 1,
          name: "The Bookstore Keepers ",
          author: " Alice Hoffman",
          imageUrl:
            "https://m.media-amazon.com/images/I/81mdiQ5B+7L._SL1500_.jpg",
          summary:
            "From New York Times bestselling author Alice Hoffman comes a deeply moving short story about the love of family and the power of dreams.",
          price: "19",
        },
        {
          id: 2,
          name: "DAISY DARKER",
          author: " ALICE FEENY",
          imageUrl:
            "https://m.media-amazon.com/images/I/81QNZEa16fL._SL1500_.jpg",
          summary:
            "Lorsque la marée montera, ils seront coupés du reste du monde. Lorsqu'elle redescendra, plus rien ne sera jamais comme avant...",
          price: "37",
        },
        {
          id: 3,
          name: "Commerce in Culture",
          author: " Cynthia J. Brokaw",
          imageUrl:
            "https://m.media-amazon.com/images/I/515j2DspaRL._AC_UY327_FMwebp_QL65_.jpg",
          summary:
            "The Ming dynasty was the last great Chinese dynasty before the Manchu conquest in 1644. During that time, China, not Europe, was the center of the world: the European voyages of exploration were searching not just for new lands but also for new trade routes to the Far East. In this book, Timothy Brook eloquently narrates the changing landscape of life over the three centuries of the Ming (1368-1644), when China was transformed from a closely administered agrarian realm into a place of commercial profits and intense competition for status.",
          price: "41",
        }
      ],
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateMediaWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateMediaWidth);
  },
  methods: {
    updateMediaWidth() {
      this.MediaWidth = window.innerWidth;
    },
  },
};
</script>
