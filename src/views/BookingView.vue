<template>
    <button @click="writeInDb" style="width: 50px; height: 40px; "></button>
</template>

<script>
import { getDatabase, ref, set , onValue} from 'firebase/database'
export default {
    name: 'BookingView',
    data() {
        return {

        }
    },
    components: {
    },
    methods: { 
        writeInDb() {
            const db = getDatabase();
            set(ref(db, 'users/' + this.$store.state.uid), {
                username: "Liamisko123",
                pondelok: Date.now(),
            }).then(data => {
                console.log("success")
            }).catch(error => {
                console.log("user not logged in")
                alert(error)
            })
        },
    },
    beforeMount() {
        console.log("ayoo")
        const db = getDatabase();
        const myRef = ref(db, 'users/' + this.$store.state.uid)
        onValue(myRef, (snapshot) => {
            console.log(snapshot.val())
        })
    },
    beforeUpdate(){
        console.log("ayoo")
        const db = getDatabase();
        const myRef = ref(db, 'users/' + this.$store.state.uid)
        onValue(myRef, (snapshot) => {
            console.log(snapshot.val())
        })
    }
}
</script>

<style>

</style>