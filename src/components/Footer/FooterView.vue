<template>
  <footer
    class="footer px-[15%] py-32 flex flex-row items-start justify-between"
  >
    <!-- Company -->
    <div class="footerLink flex flex-col justify-center items-start">
      <h2 class="mb-[1%]">Company</h2>
      <ul class="footerLinks__ul">
        <li class="footerLinks__li">About us</li>
        <li class="footerLinks__li">Contact us</li>
        <li class="footerLinks__li">Vacancy</li>
        <li class="footerLinks__li">Company</li>
      </ul>
    </div>
    <!-- Help -->
    <div class="footerLink flex flex-col justify-center items-start">
      <h2 class="mb-[1%]">Help</h2>
      <ul class="footerLinks__ul">
        <li class="footerLinks__li">Subscription instruction</li>
        <li class="footerLinks__li">Help center</li>
        <li class="footerLinks__li">problem with the site</li>
      </ul>
    </div>
    <!-- User -->
    <div class="footerLink flex flex-col justify-center items-start">
      <h2 class="mb-[1%]">User</h2>
      <ul class="footerLinks__ul">
        <li class="footerLinks__li">Registration</li>
        <li class="footerLinks__li">basket</li>
        <li class="footerLinks__li">Wish list</li>
      </ul>
    </div>
    <!-- Follow us -->
    <div class="footerLink flex flex-col justify-center items-start">
      <h2 class="mb-[1%]">Follow us</h2>
      <ul class="footerLinks__ul">
        <li class="footerLinks__li">Instagram</li>
        <li class="footerLinks__li">Facebook</li>
        <li class="footerLinks__li">Twitter</li>
      </ul>
    </div>
    <!-- Contact us -->
    <div class="footerContact flex flex-col justify-center items-start">
      <h2 class="mb-[1%]">Contact us</h2>
      <input type="email" class="footerContact__input mb-5 py-2 px-4 " placeholder="Enter email here">
      <button class="footerContact__btn w-full  py-2 px-4 "> Send Email </button>
    </div>
    
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style>
</style>