<template>
  <section class="ordersList w-full flex flex-col items-center">
    <!-- order -->
    <table class="orders-table w-[90%]">
      <thead class="table-header">
        <tr class="table-header__tr">
          <th
            class="table-header__th w-1/2"
            v-for="(header, idx) in Headers"
            :key="idx"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="table-body">
        <!-- each order row -->
        <tr
          class="table-body__tr "
          v-for="(order, idx) in OrdersList"
          :key="idx"
        >
          <!-- books -->
          <th class="table-body__th">
            <div
              class="book p-5 flex flex-row gap-3 "
              v-for="(book, idx) in order"
              :key="idx"
            >
              <img
                :src="book.imageUrl"
                :alt="book.name"
              />
              <div class="flex flex-col items-start justify-center">
                <p class="bookName">{{ book.name }}</p>
                <p class="author">{{ book.author }}</p>
                <p class="price">{{ book.price }}$</p>
              </div>
            </div>
          </th>
          <!-- user's infos -->
          <th class="table-body__th user">
            <p>user's name</p>
            <p>user' address</p>
            <p>user's postal code</p>
            <p>user's phone</p>
          </th>
        </tr>
      </tbody>
    </table>
  </section>
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
      Headers: ["books", "user"],
    };
  },
  computed: {
    ...mapStores(useBookStore),
  },
  beforeMount() {
    // Making ordersList
    this.ordersList = [];
    // for orders List
    for (let i = 0; i < Math.floor(Math.random() * 11) + 10; i++) {
      this.order = [];
      // for each order
      for (let a = 0; a < Math.floor(Math.random() * 7) + 1; a++) {
        let randomNum2 = Math.floor(Math.random() * 15);
        // choosing user
        // let chosenUser=this.users[randomNum2]
        // this.order.push(chosenUser);
        // choosing books
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