<template>
    <div v-if="this.$store.state.uid == ''">
        <LoginComp />
        <RegistrationComp />
    </div>
    <div v-else>
        <h1>User logged in</h1>
    </div>
</template>

<script>
import LoginComp from '@/components/LoginComp.vue';
import RegistrationComp from '@/components/RegistrationComp.vue';

export default {
    name: "SignUpView",
    components: {
        LoginComp,
        RegistrationComp
    }
}
</script>