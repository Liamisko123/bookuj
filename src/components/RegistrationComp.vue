<template>
    <h2>Sign Up</h2>
    <label for="email">email: </label>
    <input type="text" name="email" v-model="email">
    <br>
    <label for="password">password: </label>
    <input type="text" name="password" v-model="password">
    <button @click="register">Submit</button>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
export default {
    name: 'SignUpComp',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: { 
        signInWithGoogle() {
            
        },
        register() {
            
            createUserWithEmailAndPassword(getAuth(), this.email, this.password)
            .then(data => {
                console.log("succes")
                console.log(data)
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