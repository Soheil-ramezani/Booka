<template>
  <div class="top-ten  py-20 px-[10%] ">
    <h2>Top 10 Banners</h2>
    <div class="topBanners dragscroll mt-20 flex flex-row items-center justify-around">
      <div v-for="banner in banners" :key="banner.id" class="topBanner pr-32 mx-5 flex flex-row" >
        <img
          class="topBanner__img"
          src="./../../../assets/91hYnazD-oL.jpg"
          alt=""
        />
        <div
          class="topBanner-texts py-5 pl-4 min-w-[250px] flex flex-col justify-center"
        >
          <h2>{{ banner.title }}</h2>
          <h3>By: Writer'sName</h3>
          <h3>$35.66</h3>
          <button
            class="mt-5 flex flex-row items-center justify-center p-2 text-center"
          >
            Add
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="rgba(255, 255, 255,1)"
              class="ml-2"
            >
              <path
                d="M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'dragscroll';
export default {
  name:"TopTen",
  data() {
    return {
      banners: [
        { id: 1, title: 'Banner 1' },
        { id: 2, title: 'Banner 2' },
        { id: 3, title: 'Banner 3' },
        { id: 4, title: 'Banner 3' },
        { id: 5, title: 'Banner 3' },
        { id: 6, title: 'Banner 3' },
        // ... more banners
      ]
    };
  },
  methods: {
    onEnd(event) {
    // Handle the end of the drag event
    console.log('Drag ended', event);
    }
  }
}
</script>