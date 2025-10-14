<template>
  <section
    class="salesFigures flex flex-col justify-center items-center gap-5"
    :class="{
      'w-5/6 ml-[16.666667%]': MediaSize.MediaWidth >= 660,
      'w-full': MediaSize.MediaWidth < 660,
    }"
  >
    >
    <canvas ref="chartCanvas"></canvas>
    <table class="table-auto w-[80%]">
      <thead>
        <tr>
          <th v-for="month in dataLabels" :key="month" class="text-center">
            {{ month }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="(num, idx) in dataValues" :key="idx" class="text-center">
            {{ num }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { useMediaStore } from "@/stores/counter";
export default {
  name: "salesFigures",
  data(){
    return{
      MediaSize: useMediaStore(),
    }
  }
};
</script>
<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const chartCanvas = ref(null);
let chartInstance = null;

const dataLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
];
const dataValues = [
  Math.floor(Math.random() * 100) + 100,
  Math.floor(Math.random() * 100) + 150,
  Math.floor(Math.random() * 100) + 100,
  Math.floor(Math.random() * 100) + 50,
  Math.floor(Math.random() * 100) + 150,
  Math.floor(Math.random() * 100) + 150,
  Math.floor(Math.random() * 100) + 50,
  Math.floor(Math.random() * 100) + 100,
  Math.floor(Math.random() * 100) + 50,
];

onMounted(() => {
  chartInstance = new Chart(chartCanvas.value, {
    type: "bar",
    data: {
      labels: dataLabels,
      datasets: [
        {
          label: "Sales volume",
          data: dataValues,
          backgroundColor: "rgba(54, 162, 235, 0.7)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false } },
        y: {
          beginAtZero: true,
          grid: { display: true },
        },
      },
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Vertical Bar Chart" },
      },
    },
  });

  window.addEventListener("resize", handleResize);
});

function handleResize() {
  if (chartInstance) chartInstance.resize();
}

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  if (chartInstance) chartInstance.destroy();
});
</script>