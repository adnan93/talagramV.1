<template>
  <div class="app">
  
    <b-row>
      <div class="ch"><TVChartContainer /></div>
    </b-row>
    
  </div>
</template>

<script>
import TVChartContainer from "../components/TVChartContainer.vue";
export default {
  name: "app",
  components: {
    TVChartContainer,
  },
};
</script>

<style lang="scss" scoped>


.ch {
  font-size: 50px;
}
</style>
