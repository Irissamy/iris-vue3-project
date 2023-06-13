<template>
  <NavBar></NavBar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import NavBar from '@/components/NavBar.vue'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: {
    NavBar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
