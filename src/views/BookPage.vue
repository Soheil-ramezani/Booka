<script setup>
import NavBar from "@/components/HeaderParts/Navbar/Navbar.vue";
import BookDetails from "@/components/BookPageParts/BookDetails/BookDetails.vue";
</script>
<template>
  <div class="book-page">
    <NavBar />
    <main class="mt-[62.5px]">
      <BookDetails/>
    </main>
  </div>
</template>

<script>
export default {
  name: "BookPage",
};
</script>
