<template>
 <section class="orderHistory min-h-[60vh] w-5/6 flex items-center justify-center">
    <div class="cleanHistory flex" v-if="ordersList.length == 0">
        <h3>Your order history is clean ;)</h3>
    </div>
 </section> 
</template>

<script>
export default {
name:"orderHistory",
data(){
    return{
        ordersList: JSON.parse(localStorage.getItem('OrderList')) || [],
    }
},

}
</script>

<style>

</style>