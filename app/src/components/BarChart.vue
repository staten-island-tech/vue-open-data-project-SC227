<template>
  <div class="container">
    <h2>Death Counts by Leading Cause</h2>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const chartCanvas = ref(null)

async function getData() {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json?$limit=200')
    if (res.status != 200) {
      throw new Error(response)
    }

    const data = await res.json()

    const deathCounts = {}
    data.forEach((el) => {
      const cause = el.leading_cause
      deathCounts[cause] = (deathCounts[cause] || 0) + parseInt(el.deaths || 0)
    })

    const labels = Object.keys(deathCounts)
    const values = Object.values(deathCounts)

    new Chart(chartCanvas.value, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Number of Deaths',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 100 },
          },
          x: {
            ticks: { autoSkip: false, maxRotation: 45, minRotation: 0 },
          },
        },
      },
    })
  } catch (error) {
    console.log(error)
    alert(error)
  }
}

onMounted(getData)
</script>

<style scoped>
.container {
  width: 1200px;
  height: 700px;
  align-items: center;
}
</style>
