<script setup>
import DragScroll from "../dragScroll/dragScroll.vue";
import OnlineBooks from "./onlineBooks/OnlineBooks.vue";
import OffersView from "./OffersView/OffersView.vue";
</script>
<template>
  <main class="flex flex-col items-center">
    <div class="BestSellers container flex flex-col items-center">
        <!-- Title -->
      <div class="partTitle mt-10 flex w-full items-center justify-between">
        <span class="partTitle__span charm-regular"
          >Other Books You May Enjoy</span
        >
      </div>
      <!-- DragScroll -->
       <DragScroll/>
    </div>
    <OnlineBooks />
    <OffersView />   
  </main>
</template>

<script>
export default {
  name: "MainView",
};
</script>
