<template>
  <div v-for="shownorder in OrdersList" :key="shownorder.length">
    {{ shownorder.length }}
  </div>
</template>

<script>
// pinia store
import { mapStores } from "pinia";
import { useBookStore } from "@/stores/books";
export default {
  name: "ordersList",
  data() {
    return {
      OrdersList: [],
      order: [],
    };
  },
  computed: {
    ...mapStores(useBookStore),
  },
  beforeMount() {
    this.ordersList = [];
    for (let i = 0; i < (Math.floor(Math.random() * 11)+10); i++) {
      this.order = [];
      for (let a = 0;  a < (Math.floor(Math.random() * 7)+1); a++) {
        let randomNum2 = Math.floor(Math.random() * 15);
        let chosenBook2 = this.BooksListStore.Books[randomNum2];
        if (this.order.includes(chosenBook2)) {
          a - 1;
        } else {
          this.order.push(chosenBook2);
        }
      }
      this.OrdersList.push(this.order);
    }
    console.log(this.OrdersList);
  },
};
</script>

<style>
</style>