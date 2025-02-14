<script setup>
import Navbar from '../Navbar/Navbar.vue';
</script>
<template>
  <Header class="header flex flex-col justify-center items-center">
    <Navbar/>
    <div class="header-middle flex flex-row justify-around items-center w-full">
      <div class="header-Left w-2/5">
        <h1 class="header-title__h1 charm-bold"> Find Your <br> Next Book</h1>
        <p class="header-title__p">
          Our most popular and trending <b class="pacifico-regular">BOOKA</b> perfect <br> not sure what to read now next reading mood Perfectly
        </p>
        <button class="header-left__btn mt-14 py-2 px-20 charm-bold">
          Explore Now
        </button>
      </div>
      
    </div>
  </Header>
</template>

<script>
export default {
name:"HeaderView"
}
</script>
