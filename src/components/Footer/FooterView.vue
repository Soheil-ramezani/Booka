<template>
  <footer
    class="footer px-[15%] flex flex-row items-start justify-between"
    :class="{
      ' py-32': this.MediaWidth >= 650,
      'py-5': this.MediaWidth < 650,
    }"
  >
    <!-- for bigger than 650px -->
    <!-- Company -->
    <div
      class="footerLink flex flex-col justify-center items-start"
      v-show="this.MediaWidth >= 650"
    >
      <h2 class="mb-[1%]">Company</h2>
      <ul class="footerLinks__ul">
        <li class="footerLinks__li">About us</li>
        <li class="footerLinks__li">Contact us</li>
        <li class="footerLinks__li">Vacancy</li>
        <li class="footerLinks__li">Company</li>
      </ul>
    </div>
    <!-- Help -->
    <div
      class="footerLink flex flex-col justify-center items-start"
      v-show="this.MediaWidth >= 650"
    >
      <h2 class="mb-[1%]">Help</h2>
      <ul class="footerLinks__ul">
        <li class="footerLinks__li">Subscription instruction</li>
        <li class="footerLinks__li">Help center</li>
        <li class="footerLinks__li">problem with the site</li>
      </ul>
    </div>
    <!-- User -->
    <div
      class="footerLink flex flex-col justify-center items-start"
      v-show="this.MediaWidth >= 800"
    >
      <h2 class="mb-[1%]">User</h2>
      <ul class="footerLinks__ul">
        <li class="footerLinks__li">Registration</li>
        <li class="footerLinks__li">basket</li>
        <li class="footerLinks__li">Wish list</li>
      </ul>
    </div>
    <!-- Follow us -->
    <div
      class="footerLink flex flex-col justify-center items-start"
      v-show="this.MediaWidth >= 650"
    >
      <h2 class="mb-[1%]">Follow us</h2>
      <ul class="footerLinks__ul">
        <li class="footerLinks__li">Instagram</li>
        <li class="footerLinks__li">Facebook</li>
        <li class="footerLinks__li">Twitter</li>
      </ul>
    </div>
    <!-- Contact us -->
    <div
      class="footerContact flex flex-col justify-center items-start"
      v-show="this.MediaWidth >= 1200"
    >
      <h2 class="mb-[1%]">Contact us</h2>
      <input
        type="email"
        class="footerContact__input mb-5 py-2 px-4"
        placeholder="Enter email here"
      />
      <button class="footerContact__btn w-full py-2 px-4">Send Email</button>
    </div>
    <!-- for smaller than 650px -->
    <div
      class="footer-menu flex flex-row justify-between items-center w-full"
      v-show="this.MediaWidth < 650"
    >
      <!-- home -->
      <div class="menu-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="40"
          height="40"
          fill="rgba(11,18,32,1)"
        >
          <path
            d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"
          ></path>
        </svg>
      </div>
      <!-- books -->
      <div class="menu-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="40"
          height="40"
          fill="rgba(11,18,32,1)"
        >
          <path
            d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H14C14.5523 21 15 20.5523 15 20V15.2973L15.9995 19.9996C16.1143 20.5398 16.6454 20.8847 17.1856 20.7699L21.0982 19.9382C21.6384 19.8234 21.9832 19.2924 21.8684 18.7522L18.9576 5.0581C18.8428 4.51788 18.3118 4.17304 17.7716 4.28786L14.9927 4.87853C14.9328 4.38353 14.5112 4 14 4H10C10 3.44772 9.55228 3 9 3H4ZM10 6H13V14H10V6ZM10 19V16H13V19H10ZM8 5V15H5V5H8ZM8 17V19H5V17H8ZM17.3321 16.6496L19.2884 16.2338L19.7042 18.1898L17.7479 18.6057L17.3321 16.6496ZM16.9163 14.6933L15.253 6.86789L17.2092 6.45207L18.8726 14.2775L16.9163 14.6933Z"
          ></path>
        </svg>
      </div>
      <!-- bookmark -->
      <div class="menu-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="40"
          height="40"
          fill="rgba(11,18,32,1)"
        >
          <path
            d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"
          ></path>
        </svg>
      </div>
      <!--  -->
      <div class="menu-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="40"
          height="40"
          fill="rgba(11,18,32,1)"
        >
          <path
            d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"
          ></path>
        </svg>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
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
};
</script>

<style>
</style>