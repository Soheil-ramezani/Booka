<script setup>
import HeaderView from "@/components/HeaderParts/Header/HeaderView.vue";
import FooterView from "@/components/Footer/FooterView.vue";
import DragScroll from "@/components/dragScroll/dragScroll.vue";
import OnlineBooks from "@/components/mainParts/onlineBooks/OnlineBooks.vue";
import OffersView from "@/components/mainParts/OffersView/OffersView.vue";
</script>

<template>
  <div>
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
    <FooterView />
  </div>
</template>



<!-- <script>
export default {
  data() {
    return {
      items: [] // Array to hold the fetched data
    };
  },
  mounted() {
    // Fetch data from the API
    fetch('https://gutendex.com/books') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        this.items = data; // Store the fetched data in the items array
        data.results.forEach(item=>{
          console.log(item.formats["image/jpeg"])
        }) // Log the fetched data to the console
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
</script> -->