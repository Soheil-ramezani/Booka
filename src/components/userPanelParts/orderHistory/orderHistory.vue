<template>
 <section class="orderHistory min-h-[60vh] w-5/6 flex items-center justify-center">
    <div class="cleanHistory flex" v-if="orderList.length == 0" >
        <h3>Your order history is clean ;)</h3>
    </div>
    <!--  -->
    <div v-if="orderList.length !== 0">
       <div class="shown" v-for="order in orderList" :key="order[0].id">
        {{ order }}
       </div>
    </div>
 </section> 
</template>

<script>
export default {
name:"orderHistory",
data(){
    return{
        orderList:null
    }
},
beforeMount(){
    // get OrderList
     const ordersListInLH=JSON.parse(localStorage.getItem('OrderList')) || [];
     this.orderList=ordersListInLH
},
}
</script>

<style>

</style>