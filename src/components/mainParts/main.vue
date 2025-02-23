<script setup>
import BestSellers from './BestSellers/BestSellers.vue';
import OnlineBooks from './onlineBooks/OnlineBooks.vue';
import OffersView from './OffersView/OffersView.vue';
import TopTen from './Top10/TopTen.vue';
</script>
<template>
    <main>
        <BestSellers/>
        <OnlineBooks/>
        <OffersView/>
        <TopTen/>
    </main>
</template>

<script>
export default {
name:"MainView"
}
</script>
