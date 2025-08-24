<script setup>
// MediaStore From Pinia
import { useMediaStore } from "@/stores/counter";
const MediaSize = useMediaStore();
console.log(MediaSize)
</script>
<template>
  <main class="LoginPage flex flex-row items-center justify-center">
    <!-- LeftSide -->
    <section v-if="MediaSize.MediaWidth>= 900" class="ImgSide w-5/12">
      <img
        class="ImgSide__img"
        src="../../assets/imgs/@Wallpaper_4K3D (13689)4K.png"
        alt=""
      />
    </section>
    <!-- RightSide -->
    <RouterView />    
  </main>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      // showCreatedPassword: false,
      // showRepeatPassword: false,
    };
  },
  methods: {
    // changeInputType(passwordInput) {
    //   if (passwordInput == "LoginPassword") {
    //     if (this.$refs.showLoginPassword.type == "password") {
    //       this.$refs.showLoginPassword.type = "text";
    //       this.showLoginPassword = true;
    //     } else {
    //       this.$refs.showLoginPassword.type = "password";
    //       this.showLoginPassword = false;
    //     }
    //   } else if (passwordInput == "CreatePassword") {
    //     if (this.$refs.CreatePassword.type == "password") {
    //       this.$refs.CreatePassword.type = "text";
    //       this.showCreatedPassword = true;
    //     } else {
    //       this.$refs.CreatePassword.type = "password";
    //       this.showCreatedPassword = false;
    //     }
    //   } else if (passwordInput == "RepeatPassword") {
    //     if (this.$refs.RepeatPassword.type == "password") {
    //       this.$refs.RepeatPassword.type = "text";
    //       this.showRepeatPassword = true;
    //     } else {
    //       this.$refs.RepeatPassword.type = "password";
    //       this.showRepeatPassword = false;
    //     }
    //   }
    // },
   
  },
};
</script>

<style>
</style>