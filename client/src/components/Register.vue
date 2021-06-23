<template>
    <div>
        <h1>Register</h1>
        <input type="email" name="email" v-model="email" id="email" />
        <input
            type="password"
            name="password"
            v-model="password"
            id="password"
        />
        <div class="error" v-html="error"></div>
        <button @click="register" type="submit">Register</button>
    </div>
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
