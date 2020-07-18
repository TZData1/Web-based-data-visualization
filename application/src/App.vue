<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/lumos_logo.svg">
    <h1> Random numbers</h1>
    <line-chart :data="chartData"></line-chart>
    <line-chart :data="chartData"></line-chart>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      chartData: {
        '01/2020': 10,
        '02/2020': 20,
        '03/2020': 10,
        '04/2020': 40,
        '05/2020': 50,
        '06/2020': 10,
        '07/2020': 70,
        '08/2020': 40,
        '09/2020': 100,
        '010/2020': 90,
      }
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<!-- 

-->
