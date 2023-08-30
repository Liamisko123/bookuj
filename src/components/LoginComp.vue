<template>
    <h2>Sign In</h2>
    <label for="email">email: </label>
    <input type="text" name="email" v-model="email">
    <br>
    <label for="password">password: </label>
    <input type="text" name="password" v-model="password">
    <button @click="login">Submit</button>

</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
    name: 'SignInComp',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: { 
        signInWithGoogle() {
            
        },
        login() {
            
            signInWithEmailAndPassword(getAuth(), this.email, this.password)
            .then(data => {
                console.log("User logged in!")
                this.$store.state.uid = data.user.uid
                this.$router.push("/account")
            })
            .catch(error => {
                console.log(error.code)
                alert(error.message)
            })
        }
    },
}
</script>

<style>

</style>