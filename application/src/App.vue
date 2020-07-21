<template>
  <div id="app">
    <header>
        <Navbar />
              <!-- <img alt="Vue logo" src="./assets/lumos_logo.svg">             
    
            <input type="text" v-model="test">
            <p contenteditable="true">{{fetch}}</p>
          
            <div class="wrapper1"> 
                  
                  
            </div>  -->


    </header>

    <router-view />
    <Peek :data1="chartData1" :data2="chartData2" :data3="chartData3" :data4="chartData4" />

  </div>
</template>


<script>
import Navbar from './components/Navbar';
import Peek from './components/Peek'

export default {
  name: 'App',
  data() {
    return {
      chartData1: {
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
      chartData2: {
        '01/2020': 50,
        '02/2020': 0,
        '03/2020': 40,
        '04/2020': -10,
        '05/2020': 20,
        '06/2020': 100,
        '07/2020': -20,
        '08/2020': 0,
        '09/2020': 45,
        '010/2020': 80,
      },
      chartData3: {
        '01/2020': 10,
        '02/2020': 20,
        '03/2020': 80,
        '04/2020': -10,
        '05/2020': 80,
        '06/2020': 100,
        '07/2020': -20,
        '08/2020': 0,
        '09/2020': 80,
        '010/2020': 80,
      },
      chartData4: {
        '01/2020': 0,
        '02/2020': 0,
        '03/2020': 0,
        '04/2020': 1,
        '05/2020': 0,
        '06/2020': 0,
        '07/2020': 0,
        '08/2020': 0,
        '09/2020': 0,
        '010/2020': 0,
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
    Navbar,
    Peek
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
.div-head {
  display: grid;
  place-items: center;
  color:#ffffff;
  padding: 10px;
}
.wrapper1 {
  display:grid;
  grid-template-columns: 50% 50%;
  grid-gap: 50px;
}
</style>