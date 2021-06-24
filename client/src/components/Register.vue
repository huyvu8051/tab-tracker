<template>
    <v-form>
    <v-container>
      <div class="title">Register Form</div>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Password"
            v-model="password"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="3"
        >
          <v-btn @click="register">
            Register
          </v-btn>
        </v-col>
      </v-row>
      <div class="error">{{error}}</div>
    </v-container>
  </v-form>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data () {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async register () {
            try {
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                })
                console.log(response)
            } catch (e) {
                this.error = e.response.data.error
            }
        }
    }
}
</script>
<style>
.error {
    color: red;
}

</style>
