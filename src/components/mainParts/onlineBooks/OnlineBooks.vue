<template>
  <div class="onlineBooks flex flex-row"
  :class="{'items-center justify-center':this.MediaWidth>=990}"
  >
    <div
    v-if="this.MediaWidth>=990"
     class="onlineBooks-LeftSide "
    :class="{'w-7/12':this.MediaWidth>=990}">
        <img src="./../../../assets/imgs/Untitled-1.jpg"  alt="onlineBooks">
    </div>
    <div class="onlineBooks-RightSide w-5/12 flex flex-col items-center justify-center"
    :class="{'w-5/12 px-5':this.MediaWidth>=990,'w-full my-20':this.MediaWidth<990}">
        <h2 class="text-center">
            Online Book 
            <br>
            Fairs 2025
        </h2>
        <p class="text-wrap text-center">
            In a country teetering on the brink of civil war,two young people meet-sensual,fiercely independent Nadia and gentle,restrained Saeed.The unrest roiling
            their city
        </p>
        <button class="mt-20 px-20 py-8">
            Create Account
        </button>
    </div>
  </div>
</template>

<script>
export default {
name:"OnlineBook",
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
  },
}
</script>

