<template>
    <div class="wrapper-peakChart">
        <line-chart :data="data"></line-chart>
    </div>
</template>

<script>
export default {
    name: "PeekCharts",
    props: ["data"]
}
</script>

