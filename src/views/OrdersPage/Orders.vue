<script setup>
import Navbar from "@/components/HeaderParts/Navbar/Navbar.vue";
import FooterView from "@/components/Footer/FooterView.vue";
</script>
<template>
  <div class="OrderPage">
    <header>
       <Navbar />
    </header>
   
    <main class="Order-main px-[22%] mt-[62.5px]">
      <!-- Order List -->
      <ul class="order__ul mt-[100px]">
        <!--order List element -->
        <li class="order__li my-10 flex justify-between">
          <!-- order List element img  -->
          <div class="order-img">
            <img src="./../../assets/91hYnazD-oL.jpg" alt="" />
          </div>
          <!--  -->
          <!-- order List element texts -->
          <div
            class="order-text flex flex-col items-center justify-start mt-[3%] pr-[20px] w-4/6"
          >
            <!-- Book Name -->
            <div class="flex items-center w-full">
              <div class="mr-[10px]">name</div>
              <div
                style="flex: 1; border-top: 1px dotted #000; margin: 0 10px"
              ></div>
              <div class="ml-[10px]">BookName</div>
            </div>
            <!-- author -->
            <div class="flex items-center w-full">
              <div class="mr-[10px]">author</div>
              <div
                style="flex: 1; border-top: 1px dotted #000; margin: 0 10px"
              ></div>
              <div class="ml-[10px]">Book's author</div>
            </div>
            <!-- Book price -->
            <div class="flex items-center w-full">
              <div class="mr-[10px]">price</div>
              <div
                style="flex: 1; border-top: 1px dotted #000; margin: 0 10px"
              ></div>
              <div class="ml-[10px]">Book's price</div>
            </div>
            <!-- order num -->
            <div class="orderNum mt-10 flex flex-row self-end">
              <button class="orderNum__btn" @click="this.bookNumber++">+</button>
              <div class="orderNum__div mx-10">
                <span class="m-5">
                  {{ bookNumber }}
                </span>
              </div>
              <button class="orderNum__btn" @click="lessBookNum()">-</button>
            </div>
          </div>
        </li>
      </ul>
      <!-- Total price -->
       <div class="OrderTotalPrice">
        <h2>Total Price :{{totalPrice }}$</h2>
       </div>
    </main>
    <FooterView />
  </div>
</template>

<script>
export default {
  name: "OrderPage",
  data() {
    return {
      bookNumber: 1,
      totalPrice:1000,
    };
  },
  methods:{
    lessBookNum(){
      if(this.bookNumber <= 0){
        this.bookNumber=0
      }else{
        this.bookNumber--
      }
    }
  }

};
</script>

<style>
</style>