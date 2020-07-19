<template>
  <div id="app">
    <header>
        <Navbar />
    <!-- <img alt="Vue logo" src="./assets/lumos_logo.svg"> 
    <line-chart :data="chartData"></line-chart> -->

    </header>
        <input type="text" v-model="test">
        <p contenteditable="true">{{fetch}}</p>
  </div>
</template>


<script>
import Navbar from './components/Navbar';

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
      },
      test: 2
    }
  },
  methods: {
    fetch2() {

    }
  },
  computed: {
    fetch() {
      return this.test * 2
    }
  },
  watch: {
    test: function() {
      console.log("Changed value!")
    }
  },
  components: {
    Navbar
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
}
header {
  width: 100vw;
  background-color: rgb(24, 24, 24);
  padding: 15px
}
</style>