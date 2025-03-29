<script setup>
import DragScroll from "../dragScroll/dragScroll.vue";
import OnlineBooks from "./onlineBooks/OnlineBooks.vue";
import OffersView from "./OffersView/OffersView.vue";
</script>
<template>
  <main class="flex flex-col items-center">
    <!-- BestSellers -->
    <div class="BestSellers container flex flex-col items-center">
      <!-- Title -->
      <div
        class="partTitle px-[5%] mt-10 flex w-full items-center justify-between"
      >
        <h1 class="partTitle__h1 charm-regular">Best Sellers</h1>
      </div>
      <!-- DragScroll -->
      <DragScroll />
    </div>
    <OnlineBooks />
    <OffersView />
    <!-- Popular -->
     <div class="PopularBooks container flex flex-col items-center">
      <!-- Title -->
    <div
      class="partTitle px-[5%] mt-10 flex w-full items-center justify-between"
    >
      <h1 class="partTitle__h1 charm-regular">Popular Books</h1>
    </div>
    <!-- PopularBooks -->
    <DragScroll/>
     </div>
    
  </main>
</template>

<script>
export default {
  name: "MainView",
};
</script>
