<template>
  <nav class="pt-5 pb-5 flex flex-row justify-around">
    <!-- RightSide -->
    <div class="Right-side w-5/12 flex flex-row justify-around items-center">
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
    </div>

    <!-- Left side -->
    <div class="Left-side w-5/12 flex flex-row justify-center items-center">
      <div class="Nav-searchbar mr-10">
        <!-- <input class="Nav-searchbar__input" id="Nav-search" type="search" placeholder="Search Books...">
        -->
        <form onsubmit="event.preventDefault();" role="search">
          <label for="search">Search Books...</label>
          <input
            id="search"
            type="search"
            placeholder="Search..."
            autofocus
            required
          />
          <button type="submit">Go</button>
        </form>
      </div>
      <div class="Nav-Left__btns flex flex-row">
        <button class="pr-5 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="rgba(11,18,32,1)"
          >
            <path
              d="M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"
            ></path>
          </svg>
        </button>
        <RouterLink class="RouterLink pl-5">Sign in</RouterLink>
      </div>
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