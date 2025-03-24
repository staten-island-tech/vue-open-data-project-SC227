<template>
  <div>
    <h2>Death Counts</h2>
    <div class="container">
      <Pie
        v-if="loaded"
        :data="chartData"
        :options="chartOptions"
        aria-label="a bar chart displaying the amount of death counts for each disease"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const loaded = ref(false)
const chartData = ref({
  labels: [],
  datasets: [],
})

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Death Counts by Disease',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
}

async function getData() {
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json?$limit=150')
    if (res.status !== 200) {
      throw new Error('Failed to fetch data')
    }
    let data = await res.json()
    deaths.value = data

    const deathCounts = {}
    data.forEach((el) => {
      const death = el.death || 'Unknown'
      deathCounts[death] = (deathCounts[death] || 0) + 1
    })

    const labels = Object.keys(deathCounts)
    const values = Object.values(deathCounts)

    chartData.value = {
      labels,
      datasets: [
        {
          label: 'Number of Deaths',
          data: values,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
      ],
    }

    loaded.value = true
  } catch (error) {
    console.log(error)
    alert('Error loading crash data')
  }
}

onMounted(getData)

const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'e',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  },
})
</script>

<style scoped></style>
