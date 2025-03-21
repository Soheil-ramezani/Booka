<template>
  <div class="BookInfo grid grid-flow-col py-[5rem] px-[1%]">
    <!-- bookImg -->
    <div class="bookImg h-full">
      <img src="../../../assets/91hYnazD-oL.jpg" alt="" class="bookImg__img" />
    </div>
    <!-- bookDetails -->
    <div
      class="bookDetails pt-5 h-full flex flex-col items-start justify-start"
    >
      <!-- firstLine -->
      <div>
        <h2>
          The Templar Legacy: A Novel (Cotton Malone Book 1)
          <span class="bookDetails__span text-slate-700">Edition</span>
        </h2>
      </div>
      <!-- second line -->
      <div>
        <span class="bookDetails__span text-slate-700">Author</span>
        <span class="bookDetails__span text-slate-700">Format</span>
      </div>
      <hr class="w-[98%] outline-slate-600 border-slate-600" />
      <!-- middle part -->
      <div class="pr-5">
        <p class="bookDetails__p mt-10">
          The Lost for Words Bookshop by Stephanie Butland is a compelling,
          irresistible, and heart-rending novel, perfect for all book lovers.
        </p>
        <br />
        <p class="bookDetails__p mb-10">
          <b>
            "In The Lost for Words Bookshop, Stephanie Butland has created a
            bibliophile's delight. Witty and irreverent, funny and sad, this is
            a charming tribute to stories on the page and in our lives--and the
            powers they can hold over us."
            <br />—Matthew Sullivan author of Midnight at the Bright Ideas
            Bookstore "Burns fiercely with love and hurt. A rare and beautiful
            novel. <br />"—Linda Green, bestselling author of While My Eyes Were
            Closed</b
          >
        </p>
      </div>
      <hr class="w-[98%] outline-slate-600 border-slate-600" />
    </div>
    <!-- BookPrice -->
    <div class="bookPrice py-10 px-5 ">
      <div class="prices grid  gap-x-5 gap-y-3">
          <div class="TypesPrice px-1 h-fit flex flex-col justify-center items-start">
        <span class="TypesPrice__span"> <b>Kindle</b> </span>
        <p class="TypesPrice__p">$30</p>
        <span class="TypesPrice__span"> Available instantly </span>
      </div>
          <div class="TypesPrice px-1 h-fit flex flex-col justify-center items-start">
        <span class="TypesPrice__span"> <b>Kindle</b> </span>
        <p class="TypesPrice__p">$30</p>
        <span class="TypesPrice__span"> Available instantly </span>
      </div>
      
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "BookDetails",
};
</script>

<style>
</style>