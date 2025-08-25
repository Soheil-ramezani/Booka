<script setup>
import FooterView from '@/components/Footer/FooterView.vue';
import Navbar from '@/components/Navbar/Navbar.vue';
</script>
<template>
  <div>
    <header>
        <navbar/>
    </header>
    <main>
    </main>
    <FooterView/>
  </div>
</template>

<script>
export default {
  components: { Navbar },
name:'userPanel',
data(){
    return{}
}
}
</script>

<style>

</style>