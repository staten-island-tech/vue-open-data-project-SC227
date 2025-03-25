<template>
  <div>
    <h2>Death Counts</h2>
    <div class="container">
      <BarChart
        v-if="loaded"
        :data="chartData"
        :options="chartOptions"
        aria-label="a bar chart displaying the amount of death counts for each disease"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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
</script>

<style scoped></style>
