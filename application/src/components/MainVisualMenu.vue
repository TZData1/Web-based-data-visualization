<template>
        <div >

           <div class="mainChartMenuPart" >
                <div class="mainChartMenuPart-element" v-for="(item, i) in timeElements" :key="i">
                    <div  class="mainChartMenuPart-elementPart" @click="setTime(item.name)" :class="{'first': i === 0}"  > {{item.name}} </div>
                </div>
                <!-- first -->
            </div>

                <!-- <div class="mainChartMenuPart-element" id="menu-first">
                    Customize
                </div>
                <div class="mainChartMenuPart-element">
                    6m
                </div>
                <div class="mainChartMenuPart-element">
                    1y
                </div>
                <div class="mainChartMenuPart-element" id="menu-last">
                    max
                </div> 
                -->


           <div class="mainChartMenuPart">
                <div class="mainChartMenuPart-element" v-for="(item, i) in intervalElements" :key="i" >
                    <div  class="mainChartMenuPart-elementPart" @click="setInterval(item.name)"> {{item.name}} </div>
                </div>
            </div>
        </div>

</template>

<script>
export default {
    name: "MainVisualMenu",
    data() {
        return {
            timeElements: [
                    {
                    name: "customize"
                    },{                
                    name: "6m"
                    },{
                    name: "1y"
                    },{
                    name: "max"
                    }
                ],
            intervalElements: [
                    {
                    name: "month"
                    },{
                    name: "year"
                    }
            ],
        }
    },
    methods: {
    setTime: function(timeEvent) {
        this.$emit("update:time", timeEvent)
        },
    setInterval: function(intervalEvent) {
        this.$emit("update:interval", intervalEvent)
        }
    }
}
</script>

<style>
.mainChartMenuPart .mainChartMenuPart-element.active,
.mainChartMenuPart .mainChartMenuPart-element.hover{
    background-color: rgb(71, 70, 70);
    border-bottom-color: #FFF;
}

.mainChartMenuPart-elementPart.active,
.mainChartMenuPart-elementPart.hover{
    color:red
}

    /* padding: 10px 20px;
    text-align: center;
    border-bottom: 3px solid transparent;
    transition: 0.4s;
    position: relative;
    margin-left: auto;
    */

</style>