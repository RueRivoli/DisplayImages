<template>
  <div id="app">
    <AvailableImages/>
  </div>
</template>

<script>
import AvailableImages from './components/AvailableImages.vue'

export default {
  name: 'App',
  components: {
    AvailableImages
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
