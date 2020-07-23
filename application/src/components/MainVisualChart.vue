<template>
    <div class="MainVisualChart" >
        <line-chart :data="data"></line-chart>
    </div>
</template>

<script>
export default {
    name: "MainVisualChart",
    props: ["data"]
}
</script>