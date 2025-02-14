<script setup>
import Navbar from '../Navbar/Navbar.vue';
</script>
<template>
  <Header class="header flex flex-col justify-center items-center pb-20">
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
      <div class="header-right flex items-center">
        <div class="header-book h-full flex flex-col pt-20  items-center">
          <img src="./../../../assets/91hYnazD-oL.jpg" class="header-book__img" alt="img1">
          <h2 class="header-book__h2 text-center mt-4">DAISY DARKER</h2>
          <p class="header-book__p text-center">ALICE FEENY</p>
        </div>
      </div>
    </div>
  </Header>
</template>

<script>
export default {
name:"HeaderView"
}
</script>
