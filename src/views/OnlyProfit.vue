<template>
    <NavBar />
    <h3> This is the Profits Page </h3>
    <ProfitDisplay/>
    <LogOut/>
</template>

<script> 
import ProfitDisplay from "../components/ProfitDisplay.vue"
import NavBar from "../components/NavBar.vue"
import LogOut from "../components/LogOut.vue"
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: 'OnlyProfit',
    components:{
        NavBar,
        ProfitDisplay,
        LogOut
    },
    data() {
        return {
            user:false,
        };
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                this.useremail = useremail;
            }
        })
    },
}
</script>