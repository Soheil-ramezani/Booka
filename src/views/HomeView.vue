<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import HeaderView from "@/components/Header/HeaderView.vue";
import FooterView from "@/components/Footer/FooterView.vue";
import DragScroll from "@/components/dragScroll/dragScroll.vue";
import OnlineBooks from "@/components/mainParts/onlineBooks/OnlineBooks.vue";
import OffersView from "@/components/mainParts/OffersView/OffersView.vue";
</script>

<template>
  <div>
    <Navbar/>
    <HeaderView />
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
    <!-- Top rated -->
    <div class="BestSellers container flex flex-col items-center">
      <!-- Title -->
      <div
        class="partTitle px-[5%] mt-10 flex w-full items-center justify-between"
      >
        <h1 class="partTitle__h1 charm-regular">Top rated</h1>
      </div>
      <!-- DragScroll -->
      <DragScroll />
    </div>
    <OnlineBooks />
    <!-- Offers -->
     <!-- Title -->
      <div
        class="partTitle px-[5%] mt-10 flex w-full items-center justify-between"
      >
        <h1 class="partTitle__h1 charm-regular">Offers</h1>
      </div>
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
    <FooterView />
  </div>
</template>

<script>
import { mapStores } from "pinia";
import {useMediaStore} from '@/stores/counter'
export default {
  name:"HomeView",
   data() {
    return {
      MediaWidth: window.innerWidth,
    };
  },
  computed:{
    ...mapStores(useMediaStore)
  },
  mounted(){
    this.MediaSizeStore.setNewMediaWidth(this.MediaWidth)
  }
  
  
}
</script>

