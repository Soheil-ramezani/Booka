<template>
  <section
    class="BooksList flex flex-col items-center"
    :class="{
      'w-5/6 ml-[16.666667%]': MediaSize.MediaWidth >= 660,
      'w-full': MediaSize.MediaWidth < 660,
    }"
  >
    <table class="BooksList-table w-[90%] my-10">
      <thead class="table-header">
        <tr class="table-header__tr">
          <th
            class="table-header__th"
            v-for="(header, idx) in Headers"
            :key="idx"
          >
        {{ header }}
        </th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr class="table-body__tr"
        v-for="book,idx in this.BooksListStore.Books" :key="idx">
            <th class="table-body__th">{{ book.id }}</th>
            <th class="table-body__th text-left pl-5">{{ book.name }}</th>
            <th class="table-body__th">{{ book.author }}</th>
            <th class="table-body__th">{{ book.price }}</th>
            <th class="table-body__th">{{ book.stock }}</th>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
// pinia store
import { mapStores } from "pinia";
import { useBookStore } from "@/stores/books";
import { useMediaStore } from "@/stores/counter";
export default {
  name: "BooksList",
  data() {
    return {
      MediaSize: useMediaStore(),
      Headers:['id','name','author','price','stock'],
    };
  },
  computed: {
    ...mapStores(useBookStore),
  },
};
</script>