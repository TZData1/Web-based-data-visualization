<template>
    <div class="mainVisual">
        <div>
            <MainVisualChart :data="data"/>
        </div>
        <div class="mainVisualKeys">
            <div class="mainVisualKeys-head">
                Select Data
            </div>
            <div class="mainVisualKeys-menu" v-for="(item, i) in keys" :key="i" >
                <div  @click="item.show = !item.show; apiCall()" v-bind:class="{'selected': item.show}"> {{item.name}} </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainVisualChart from './MainVisualChart'

export default {
    name: "MainVisual",
    components: {
        MainVisualChart
    },
    props:["data"],
    data () {
        return {
            keys: [
            {
                name: "Mitgliederzahl",
                show: false
            },{
                name: "Neue Mitglieder",
                show: false
            },{
                name: "Bewerbungen",
                show: false
            },{
                name: "Mitgliederbeschwerden",
                show: false
            },{
                name: "Anwesenheiten",
                show: false
            }
            ],
            keyCall: []
        }
    },
    methods: {
        apiCall: function() {
            this.keyCall = []
            var i = 0;
            for (i = 0; i < this.keys.length; i++) {
                if (this.keys[i]["show"]) {
                this.keyCall.push(this.keys[i]["name"])
                }
            }   
        }
    }
}
</script>

<style>

.mainVisual {
    display: grid;
    grid-template-columns: 75% 15%;
    grid-gap: 50px;
    padding: 50px;
    background-color: rgb(255, 255, 255);
}

.mainVisualKeys {
    background-color: #e9e9e9;
    border-radius: 20px;
    text-align: center;
    font-size: 1vw;
}

.mainVisualKeys-head {
    margin: 1vw
}
.mainVisualKeys-menu{
    padding: 0.5vw 0vw;
    cursor: pointer;
}

.mainVisualKeys-menu:nth-child(2n) {
    background-color: white;
}
.mainVisualKeys-menu.active,
.mainVisualKeys-menu:hover{
    background-color: #696969;
    color: white
}
.selected {
    background-color: #7c7c7c;
    color:white;
    padding: 0.1vw 0vw;
    font-weight: 500;
    border-left: 10px solid #ef5175;
    
}




</style>