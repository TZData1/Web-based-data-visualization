<template>
    <div class="mainVisualChart" >

            <MainVisualMenu class = "mainChartMenuLayout"/> 

        <line-chart :data="data"></line-chart>
    </div>
</template>

<script>
import MainVisualMenu from './MainVisualMenu'

export default {
    name: "MainVisualChart",
    components: {
        MainVisualMenu
    },
    props: ["data"]
}
</script>

<style>

.mainVisualChart{
    background-color: #e9e9e9;
    margin: 0px 0px 0px 50px;
    border-radius: 20px;
    padding: 1vw 1vw 3.5vw 1vw;
}

.mainVisualChart .mainChartMenuLayout {
    color: rgb(52, 52, 52);
    float: right;   
    display: flex;
    flex: 1 1 0%;
    margin: 0px 0.25vw 1vw 0px;
    font-size: 1vw; 
    position: relative;
}

.mainChartMenuPart {
    display: flex;

    padding: 0.25vw 1vw;
}

.mainChartMenuPart-element {
    padding: 0.25vw 1vw;
    border: 1px solid grey;
    justify-content: center;

}

#menu-first {
    border-radius: 5px 0px 0px 5px;
}
#menu-last {
    border-radius: 0px 5px 5px 0px;
}

</style>