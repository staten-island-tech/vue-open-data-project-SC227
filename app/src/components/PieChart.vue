<template>
  <div class="container">
    <h2>Cause of Deaths by Race & Ethnicity</h2>
    <label for="cause-select">Select Cause:</label>
    <select v-model="selectedCause" @change="getData">
      <option v-for="cause in causes" :key="cause" :value="cause">
        {{ cause }}
      </option>
    </select>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const chartCanvas = ref('')
const selectedCause = ref('')
const causes = ref('')
let chartInstance = ''

async function fetchCauses() {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json?$limit=200')
    if (res.status != 200) {
      throw new Error(response)
    }

    const data = await res.json()
    causes.value = data.map((el) => el.leading_cause)

    if (causes.value.length) {
      selectedCause.value = causes.value[0]
      getData()
    }
  } catch (error) {
    console.log(error)
    alert(error)
  }
}

async function getData() {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json?$limit=200')
    if (res.status != 200) {
      throw new Error(response)
    }

    const data = await res.json()
    const filteredData = data.filter((el) => el.leading_cause === selectedCause.value)

    const deathCounts = []
    filteredData.forEach((el) => {
      const race = el.race_ethnicity
      deathCounts[race] = (deathCounts[race] || 0) + parseInt(el.deaths || 0)
    })

    const labels = Object.keys(deathCounts)
    const values = Object.values(deathCounts)

    if (chartInstance) {
      chartInstance.destroy()
    }

    chartInstance = new Chart(chartCanvas.value, {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            label: 'Number of Deaths',
            data: values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' },
        },
      },
    })
  } catch (error) {
    console.log(error)
    alert(error)
  }
}

onMounted(fetchCauses)
</script>

<style scoped>
.container {
  width: 1200px;
  height: 500px;
  align-items: center;
}

canvas {
  margin: auto;
}

select {
  margin: 10px;
  padding: 5px;
}
</style>
