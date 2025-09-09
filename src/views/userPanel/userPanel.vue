<script setup>
import FooterView from "@/components/Footer/FooterView.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
// MediaStore From Pinia
import { useMediaStore } from "@/stores/counter";
const MediaSize = useMediaStore();
</script>
<template>
  <div>
    <header>
      <navbar />
    </header>
    <main
      class="userPanel-main flex mt-[62.5px]"
      :class="{
        'flex-row': MediaSize.MediaWidth >= 660,
        'flex-col': MediaSize.MediaWidth <= 660,
      }"
    >
      <!-- sidebar -->
      <aside class="userPanel-sidebar  min-w-[230px]"
      :class="{
            'w-1/6': MediaSize.MediaWidth >= 660,
            'w-full': MediaSize.MediaWidth <= 660,
          }">
        <ol
          class="userPanel-sidebar-list w-full flex   gap-7"
          :class="{
            'flex-col justify-start items-start pl-[10%]': MediaSize.MediaWidth >= 660,
            'flex-row items-center justify-around px-[5%]': MediaSize.MediaWidth <= 660,
          }"
        >
          <!-- dashboard -->
          <li class="userPanel-sidebar-li px-2 w-[80%] text-nowrap">
            <RouterLink
              to="/userPanel"
              class="px-[5%] flex flex-row items-center justify-center w-fit gap-5 active-rou"
            >
              <lord-icon
              v-if="MediaSize.MediaWidth>=560"
                src="https://cdn.lordicon.com/gitajdzc.json"
                trigger="in"
                delay="1000"
                state="in-reveal"
                colors="primary:#121331,secondary:#000000"
                style="width: 36px; height: 36px"
              >
              </lord-icon>
              <p>dashboard</p>
            </RouterLink>
          </li>
          <!-- Order History -->
          <li class="userPanel-sidebar-li px-2 w-[80%] text-nowrap">
            <RouterLink
              :to="{ name: 'orderHistory' }"
              class="px-[5%] flex flex-row items-center justify-center w-fit gap-5"
            >
              <lord-icon
              v-if="MediaSize.MediaWidth>=560"
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
            </RouterLink>
          </li>
          <!-- Track Orders -->
          <li class="userPanel-sidebar-li px-2 w-[80%] text-nowrap">
            <a
              href="#"
              class="px-[5%] flex flex-row items-center justify-center w-fit gap-5"
            >
              <lord-icon
               v-if="MediaSize.MediaWidth>=560"
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
      <!-- components shown  -->
      <RouterView />
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