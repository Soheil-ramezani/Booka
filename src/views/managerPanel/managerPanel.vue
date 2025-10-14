<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
// MediaStore From Pinia
import { useMediaStore } from "@/stores/counter";
const MediaSize = useMediaStore();
</script>
<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main
      class="managerPanel flex mt-[62.5px]"
      :class="{
        'flex-row': MediaSize.MediaWidth >= 660,
        'flex-col': MediaSize.MediaWidth <= 660,
      }"
    >
      <aside
        class="mangerPanel-sidebar flex min-w-[230px]"
        :class="{
          'w-1/6 flex-col fixed top-[62.5px] h-full pt-10': MediaSize.MediaWidth >= 660,
          'w-full flex-row flex-wrap ': MediaSize.MediaWidth <= 660,
        }"
      >
        <ol
          class="managerPanel-sidebar-list  w-full flex gap-7"
          :class="{
            'flex-col justify-start items-start pl-[10%]':
              MediaSize.MediaWidth >= 660,
            'flex-row items-center justify-around px-[5%]':
              MediaSize.MediaWidth <= 660,
          }"
        >
          <!-- Sales figures -->
          <li class="managerPanel-sidebar-li px-2 w-[80%] text-nowrap">
            <RouterLink
            to="/managerPanel"
              class="px-[5%] flex flex-row items-center justify-center w-fit gap-5 active-rou"
            >
              <lord-icon
                v-if="MediaSize.MediaWidth >= 560"
                src="https://cdn.lordicon.com/lbcxnxti.json"
                trigger="in"
                delay="1500"
                state="in-reveal"
                colors="primary:#121331,secondary:#000000"
                style="width: 36px; height: 36px"
              >
              </lord-icon>
              <p>Sales figures</p>
            </RouterLink>
          </li>
          <!-- users -->
          <li class="managerPanel-sidebar-li px-2 w-[80%] text-nowrap">
            <RouterLink
            :to="{name:'UsersList'}"
              class="px-[5%] flex flex-row items-center justify-center w-fit gap-5 active-rou"
            >
              <lord-icon
                v-if="MediaSize.MediaWidth >= 560"
                src="https://cdn.lordicon.com/kdduutaw.json"
                trigger="in"
                delay="1500"
                state="in-reveal"
                colors="primary:#121331,secondary:#000000"
                style="width: 36px; height: 36px"
              >
              </lord-icon>
              <p>users</p>
            </RouterLink>
          </li>
          <!-- orders-->
          <li class="managerPanel-sidebar-li px-2 w-[80%] text-nowrap">
            <RouterLink
            :to="{name:'OrderList'}"
              class="px-[5%] flex flex-row items-center justify-center w-fit gap-5 active-rou"
            >
              <lord-icon
                v-if="MediaSize.MediaWidth >= 560"
                src="https://cdn.lordicon.com/hmpomorl.json"
                trigger="in"
                delay="1500"
                state="in-unfold"
                colors="primary:#121331,secondary:#000000"
                style="width: 36px; height: 36px"
              >
              </lord-icon>
              <p>orders</p>
            </RouterLink>
          </li>
          <!-- books -->
          <li class="managerPanel-sidebar-li px-2 w-[80%] text-nowrap">
            <RouterLink
              class="px-[5%] flex flex-row items-center justify-center w-fit gap-5 active-rou"
            >
              <lord-icon
                v-if="MediaSize.MediaWidth >= 560"
                src="https://cdn.lordicon.com/rrbmabsx.json"
                trigger="in"
                delay="1500"
                state="in-reveal"
                colors="primary:#121331,secondary:#000000"
                style="width: 36px; height: 36px"
              >
              </lord-icon>
              <p>books</p>
            </RouterLink>
          </li>
          <!-- add new book -->
          <li class="managerPanel-sidebar-li px-2 w-[80%] text-nowrap">
            <RouterLink
              class="px-[5%] flex flex-row items-center justify-center w-fit gap-5 active-rou"
            >
              <lord-icon
                v-if="MediaSize.MediaWidth >= 560"
                src="https://cdn.lordicon.com/vjgknpfx.json"
                trigger="in"
                delay="1500"
                state="in-reveal"
                colors="primary:#121331,secondary:#000000"
                style="width: 36px; height: 36px"
              >
              </lord-icon>
              <p>add new book</p>
            </RouterLink>
          </li>
        </ol>
      </aside>
      <!-- components shown  -->
      <RouterView />
    </main>
    
  </div>
</template>

<script>
export default {
  name: "managerPanel",
};
</script>

<style>
</style>