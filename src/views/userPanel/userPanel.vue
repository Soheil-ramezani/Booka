<script setup>
import FooterView from "@/components/Footer/FooterView.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
</script>
<template>
  <div>
    <header>
      <navbar />
    </header>
    <main class="userPanel-main h-[90vh] mt-[62.5px]">
      <!-- sidebar -->
      <aside class="userPanel-sidebar w-1/6 h-full">
        <ol
          class="userPanel-sidebar-list flex flex-col justify-start items-start pl-[10%] gap-7"
        >
          <!-- username -->
          <li class="userPanel-sidebar-li  w-[80%]">
            <a href="#" class="px-[5%] flex flex-row items-center justify-start gap-5">
              <lord-icon
                src="https://cdn.lordicon.com/kdduutaw.json"
                trigger="in"
                delay="1000"
                stroke="bold"
                colors="primary:#121331,secondary:#000000"
                style="width: 36px; height: 36px"
              >
              </lord-icon>
              <p>username</p>
            </a>
          </li>
          <!-- dashboard -->
          <li class="userPanel-sidebar-li w-[80%]">
            <a href="#" class="px-[5%] flex flex-row items-center justify-start gap-5">
              <lord-icon
                src="https://cdn.lordicon.com/gitajdzc.json"
                trigger="in"
                delay="1000"
                state="in-reveal"
                colors="primary:#121331,secondary:#000000"
                style="width: 36px; height: 36px"
              >
              </lord-icon>
              <p>dashboard</p>
            </a>
          </li>
          <!-- Order History -->
          <li class="userPanel-sidebar-li w-[80%]">
            <a href="#" class="px-[5%] flex flex-row items-center justify-start gap-5">
              <lord-icon
                src="https://cdn.lordicon.com/qfijwmqj.json"
                trigger="in"
                delay="1000"
                stroke="bold"
                state="in-reveal"
                colors="primary:#121331,secondary:#000000"
                style="width: 36px; height: 36px"
              >
              </lord-icon>
              <p>Order History</p>
            </a>
          </li>
          <!-- Track Orders -->
          <li class="userPanel-sidebar-li  w-[80%]">
            <a href="#" class="px-[5%] flex flex-row items-center justify-start gap-5">
              <lord-icon
                src="https://cdn.lordicon.com/onmwuuox.json"
                trigger="in"
                delay="1000"
                colors="primary:#121331,secondary:#000000"
                style="width: 36px; height: 36px"
              >
              </lord-icon>
              <p>Track Orders</p>
            </a>
          </li>
        </ol>
      </aside>
    </main>
    <FooterView />
  </div>
</template>

<script>
export default {
  components: { Navbar },
  name: "userPanel",
  data() {
    return {};
  },
};
</script>

<style>
</style>