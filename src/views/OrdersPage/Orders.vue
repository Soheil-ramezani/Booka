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
      <ul class="order__ul mt-[100px]" v-for="order in orders" :key="order.id">
        <!--order List element -->
        <li class="order__li my-10 flex justify-between">
          <!-- order List element img  -->
          <div class="order-img">
            <img :src="order.imageUrl" :alt="order.name" />
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
              <div class="ml-[10px]">{{ order.name }}</div>
            </div>
            <!-- author -->
            <div class="flex items-center w-full">
              <div class="mr-[10px]">author</div>
              <div
                style="flex: 1; border-top: 1px dotted #000; margin: 0 10px"
              ></div>
              <div class="ml-[10px]">{{ order.author }}</div>
            </div>
            <!-- Book price -->
            <div class="flex items-center w-full">
              <div class="mr-[10px]">price</div>
              <div
                style="flex: 1; border-top: 1px dotted #000; margin: 0 10px"
              ></div>
              <div class="ml-[10px]">{{order.price}}$</div>
            </div>
            <!-- order num -->
            <div class="orderNum mt-10 flex flex-row self-end">
              <button class="orderNum__btn" @click="order.quantity++">+</button>
              <div class="orderNum__div mx-10">
                <span class="m-5">
                  {{ order.quantity }}
                </span>
              </div>
              <button
                class="orderNum__btn"
                @click="
                  () => {
                    if (order.quantity <= 1) {
                      order.quantity = 1;
                    } else {
                      order.quantity--;
                    }
                  }
                "
              >
                -
              </button>
            </div>
          </div>
        </li>
      </ul>
      <!-- Total price -->
      <div class="OrderTotalPrice">
        <h2>Total Price :{{ totalPrice }}$</h2>
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
      storageKey: "customerOrders",
      orders: null,
    };
  },
  methods: {},
  beforeMount() {
    // Get Books Data from Local storage
    this.orders = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    this.orders.forEach((item) => {
      item.quantity = 1;
    });
  },
};
</script>

<style>
</style>