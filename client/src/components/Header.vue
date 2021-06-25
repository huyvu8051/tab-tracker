<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link 
        class="home"
        tag="span"
        :to="{
          name: 'home'
        }">
        Eshop
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn 
        flat 
        dark
        :to="{
          name: 'home'
        }">
        Trang chủ
      </v-btn>
      <v-btn 
        flat 
        dark
        :to="{
          name: 'songs'
        }">
        Danh Sách
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark
        :to="{
          name: 'login'
        }">
        Đăng nhập
      </v-btn>
      
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark
        :to="{
          name: 'register'
        }">
        Đăng kí
      </v-btn>
      
      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat 
        dark
        @click="userDetail"
        >
        Xin chào {{email}}
      </v-btn>
      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat 
        dark
        @click="logout">
        Đăng xuất
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    },
    userDetail () {
      console.log('this is userDetail')
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}
</style>
