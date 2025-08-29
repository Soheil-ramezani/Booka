<template>
  <section
    class="orderHistory min-h-[60vh] w-5/6 flex items-center justify-center"
  >
    <div class="cleanHistory flex" v-if="orderList.length == 0">
      <h3>Your order history is clean ;)</h3>
    </div>
    <!--  -->
    <div class="orderList" v-if="orderList.length !== 0">
      <div
        class="orderList-row  flex flex-col  items-start gap-5 m-20 p-5"
        v-for="orders in orderList"
        :key="orders[0].id"
      >
        <h2>order number:{{ orderList.indexOf(orders) + 1 }}</h2>    
        <div class="orderList-books flex flex-row justify-around items-center flex-wrap gap-7">
          <div
          class="orderLis-item flex flex-col items-center"
          v-for="order in orders"
          :key="order.id"
        >
          <img
            class="orderLis-item__img"
            :src="order.imageUrl"
            :alt="order.name"
          />
          <h3 class="text-nowrap">{{ order.name }}</h3>
        </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "orderHistory",
  data() {
    return {
      orderList: null,
    };
  },
  beforeMount() {
    // get OrderList
    const ordersListInLH = JSON.parse(localStorage.getItem("OrderList")) || [];
    this.orderList = ordersListInLH;
  },
};
</script>

<style>
</style>