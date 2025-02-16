<script setup>
import HeaderView from '@/components/HeaderParts/Header/HeaderView.vue'
import mainVue from '@/components/mainParts/main.vue'
</script>

<template>
<HeaderView/>
<mainVue/>
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