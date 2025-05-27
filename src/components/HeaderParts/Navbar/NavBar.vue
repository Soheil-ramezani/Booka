<template>
  <nav class="w-full pt-5 pb-5 flex flex-row justify-around">
    <!-- LeftSide -->
    <div class="Left-side w-5/12 flex flex-row justify-around items-center">
      <div class="Nav-Logo mr-10">
        <h1 class="Nav-Logo__h1 pacifico-regular">BOOKA</h1>
      </div>
      <div class="Nav-menu" v-show="this.MediaWidth >= 600">
        <ul class="Nav-menu__ul flex flex-row">
          <!-- Home -->
          <li
            class="Nav-menu__li text-nowrap mx-5"
            v-show="this.MediaWidth >= 1024"
          >
            <RouterLink :to="{name: 'home'}" class="menu__RouterLink">Home</RouterLink>
          </li>
          <!-- Categories -->
          <li class="Nav-menu__li text-nowrap mx-5">
            <RouterLink class="menu__RouterLink">Categories</RouterLink>
          </li>
         <!-- Blogs -->
          <li
            class="Nav-menu__li text-nowrap mx-5"
            v-show="this.MediaWidth >= 1024"
          >
            <RouterLink class="menu__RouterLink">Blogs</RouterLink>
          </li>
           <!--AboutUs  -->
          <li class="Nav-menu__li text-nowrap mx-5">
            <RouterLink class="menu__RouterLink">About Us</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Right side -->
    <div class="Right-side w-5/12 flex flex-row justify-center items-center">
      <div class="Nav-searchbar mr-10">
        <!-- SearchBar -->
        <form
          onsubmit="event.preventDefault();"
          role="search"
          v-show="this.MediaWidth >= 1280"
        >
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
      <!-- Login -->
      <div
        class="Nav_Right__btns flex flex-row"
        v-show="this.MediaWidth >= 600"
      >
        <RouterLink :to="{name:'Orders'}" class="pr-5 flex justify-center items-center">
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
        </RouterLink>
        <RouterLink class="logIn-btn   pl-5">Sign in</RouterLink>
      </div>
      <!-- Hamburger-menu -->
      <div class="Nav-hamburger" v-show="this.MediaWidth < 600">
        <button @click="this.openNav()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="rgba(11,18,32,1)"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </button>
      </div>
      <!-- The overlay -->
      <div id="myNav" class="overlay">
        <!-- Button to close the overlay navigation -->
        <a href="javascript:void(0)" class="closebtn" @click="this.closeNav()"
          >&times;</a
        >

        <!-- Overlay content -->
        <div class="overlay-content">
          <RouterLink :to="{name:'home'}" >Home</RouterLink>
          <RouterLink :to="{name:'Orders'}" href="#">cart</RouterLink>
          <a href="#">Sing in</a>
          <a href="#">Categories</a>
          <a href="#">About Us</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "NavBar",
  data() {
    return {
      MediaWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateMediaWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateMediaWidth);
  },
  methods: {
    updateMediaWidth() {
      this.MediaWidth = window.innerWidth;
    },
    /* Open when someone clicks on the span element */
    openNav() {
       document.getElementById("myNav").style.width = "100%";
    },
    /* Close when someone clicks on the "x" symbol inside the overlay */
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    },
  },
};
</script>