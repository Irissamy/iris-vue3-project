<template>
  <NavBar></NavBar>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  created () {
    // console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH)
  }
}
</script>
