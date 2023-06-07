<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Dashboard</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vueInfo" class="nav-link">VueInfo</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <button class="btn btn-outline-success" type="button" @click.prevent="logout">登出</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user)
        .then((res) => {
          console.log(res)
          this.isLogin = false
          this.$router.push('/loginView')
        })
    }
    // checkLogin () {
    //   function getCookie (cookieName) {
    //     const name = cookieName + '='
    //     const ca = document.cookie.split(';')
    //     for (let i = 0; i < ca.length; i++) {
    //       let c = ca[i]
    //       while (c.charAt(0) === ' ') c = c.substring(1)
    //       if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
    //     }
    //     return ''
    //   }
    //   if (document.cookie.hexToken) {
    //     console.log(getCookie('hexToken'))
    //     this.isLogin = true
    //   } else {
    //     this.isLogin = false
    //   }
    // }
  },
  created () {
    // this.checkLogin()
  }
}
</script>
