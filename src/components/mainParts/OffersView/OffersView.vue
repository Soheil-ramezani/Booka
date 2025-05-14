<template>
  <div v-if="MediaWidth>=650" class="offers w-full flex flex-col px-[15%] py-20">
    <h1 class="charm-regular mb-20">Offers</h1>
    <!-- books -->
    <div class="offers-ranges grid grid-flow-col grid-cols-3 gap-x-5 ">
      <!-- range1 -->
      <div class="range1 flex flex-col items-center justify-center">
        <img
          src="./../../../assets/imgs/Untitled-2.jpg"
          alt=""
          class="range1__img w-full h-auto"
        />
        <h5 class="mt-4 charm-regular">
          This month's
          <br />
          discount- 50%
        </h5>
      </div>
      <!-- range2 -->
      <div class="range2 flex flex-col items-center justify-center">
        <img
          src="./../../../assets/imgs/photo17161509544.jpg"
          alt=""
          class="range1__img w-full h-auto"
        />
        <h5 class="mt-4 charm-regular">
          This month's
          <br />
          discount- 30%
        </h5>
      </div>
      <!-- range3 -->
      <div class="range3 flex flex-col items-center justify-center">
        <img
          src="./../../../assets/imgs/photo17161509706.jpg"
          alt=""
          class="range1__img w-full h-auto"
        />
        <h5 class="mt-4 charm-regular">
          This month's
          <br />
          discount- 20%
        </h5>
      </div>
      <!--  -->
    </div>
    <button class="mt-[5%] self-center w-fit px-5 py-3">See All</button>
  </div>
</template>

<script>
export default {
  name: "OffersView",
  data(){
    return{
      MediaWidth:window.innerWidth,
    }
  }
};
</script>

<style>
</style>