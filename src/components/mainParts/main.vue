<script setup>
import BestSellers from './BestSellers/BestSellers.vue';
import OnlineBooks from './onlineBooks/OnlineBooks.vue';
import OffersView from './OffersView/OffersView.vue';
</script>
<template>
    <main>
        <BestSellers/>
        <OnlineBooks/>
        <OffersView/>
    </main>
</template>

<script>
export default {
name:"MainView"
}
</script>
