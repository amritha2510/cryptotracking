<template>
    <div style="text-align:center;" v-if="user">
        <NavBar/>
        <h3>Page not found</h3>
        <h4>Please click on the above options instead!</h4>
        <LogOut/>
        <br>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import LogOut from '../components/LogOut.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
    name: "NotFound",
    components:{
        NavBar,
        LogOut
    },
    data() {
        return {
            user: false,
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
    },
}
</script>
