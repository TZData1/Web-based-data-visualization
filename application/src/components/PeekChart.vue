<template>
    <div class="wrapper-peakChart">
        <trend
            :data="data"
            :gradient="['#e3ffea']" 
            :width="300" :height="150"
            auto-draw
            :auto-draw-duration="2000"
            auto-draw-easing="ease-in"
            :stroke-width="2"
            smooth>
        </trend>
    </div>
</template>

<script>
export default {
    name: "PeekCharts",
    props: ["data"]
}
</script>



