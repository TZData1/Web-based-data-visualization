<template>
    <div class="mainVisual">
        <div>
            <MainVisualChart :data="data"/>
        </div>
        <div class="mainVisualKeys">
            abc
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
    props:["data"]
}
</script>

<style>

.mainVisual {
    display: grid;
    grid-template-columns: 70% 20%;
    grid-gap: 50px;
    margin: 2.5vw 2.5vw;
}

</style>