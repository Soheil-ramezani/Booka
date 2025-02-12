<template>
  <nav class="pt-5 pb-5 flex flex-row justify-around ">
    <div class="Nav-Logo">
      <h1 class="Nav-Logo__h1 pacifico-regular">BOOKA</h1>
    </div>
    <div class="Nav-menu">
      <ul class="Nav-menu__ul flex flex-row">
        <li class="Nav-menu__li mx-5">
          <RouterLink class="menu__RouterLink">Books</RouterLink>
        </li>
        <li class="Nav-menu__li mx-5">
          <RouterLink class="menu__RouterLink">Categories</RouterLink>
        </li>
        <li class="Nav-menu__li mx-5">
          <RouterLink class="menu__RouterLink">Wishlist</RouterLink>
        </li>
        <li class="Nav-menu__li mx-5">
          <RouterLink class="menu__RouterLink">Blogs</RouterLink>
        </li>
        <li class="Nav-menu__li mx-5">
          <RouterLink class="menu__RouterLink">About Us</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
</style>