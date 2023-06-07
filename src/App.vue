<template>
  <NavBar></NavBar>
  <div class="container-fluid">
    <router-view/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import "./assets/all.scss";
</style>
