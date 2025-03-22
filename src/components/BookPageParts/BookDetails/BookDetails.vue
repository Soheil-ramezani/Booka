<template>
  <div class="BookInfo grid grid-flow-col py-[5rem] px-[1%]">
    <!-- LeftCol -->
    <div class="leftCol">
       <!-- bookImg -->
    <div class="bookImg h-full">
      <img src="../../../assets/91hYnazD-oL.jpg" alt="" class="bookImg__img" />
    </div>
  </div>
  <!-- centerCol -->
    <div class="centerCol">
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
    </div>
    <!--rightCol  -->
   <div class="rightCol">
    <!-- BookPrice -->
    <div class="bookPrice flex flex-col items-center py-10 px-5">
      <div class="prices grid w-full gap-x-5 gap-y-3">
        <div
          class="TypesPrice TypesPrice--active px-2 py-1 h-fit flex flex-col justify-center items-start"
        >
          <span class="TypesPrice__span"> <b>Kindle</b> </span>
          <p class="TypesPrice__p">$30</p>
          <span class="TypesPrice__span"> Available instantly </span>
        </div>
        <div
          class="TypesPrice px-2 py-1 h-fit flex flex-col justify-center items-start"
        >
          <span class="TypesPrice__span"> <b>AudioBook</b> </span>
          <p class="TypesPrice__p">$0.99</p>
          <span class="TypesPrice__span"> with membership</span>
        </div>
        <div
          class="TypesPrice px-2 py-1 h-fit flex flex-col justify-center items-start"
        >
          <span class="TypesPrice__span"> <b>Hardcover</b> </span>
          <p class="TypesPrice__p">$0.99</p>
        </div>
        <div
          class="TypesPrice px-2 py-1 h-fit flex flex-col justify-center items-start"
        >
          <span class="TypesPrice__span"> <b>Paperback</b> </span>
          <p class="TypesPrice__p">$0.99</p>
        </div>
      </div>
      <hr class="my-10 w-[98%] outline-slate-600 border-slate-600" />
      <div class="flex flex-col items-center">
        <button class="bookPrice__btn w-11/12 p-3">Buy now with 1-Click</button>
      <span class="bookPrice__span mt-5 text-center"
        >By placing your order,
        <b>you're purchasing a license to the content</b> and you agree to the
        <a href="#" class="bookPrice__a">Kindle Store Terms of Use.</a></span
      >
      <hr class="my-10 w-[98%] outline-slate-600 border-slate-600" />
      <img src="https://m.media-amazon.com/images/I/21EzREA+0yL.svg" alt="" class="bookPrice__img">
      <span class="bookPrice__span mt-5 text-center">
        Unlimited reading. Over 4 million titles. 
      </span>
      <button class="bookPrice__btn w-11/12 p-5 mt-3"> Read for Free</button>
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