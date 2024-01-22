<template>
    <div style="text-align:center;" v-if="user">
        <NavBar/>
        <div><h3><strong>This is the profile page </strong></h3></div>
            <div v-if="user">
                <div> 
                    <p> Name: {{user.displayName}}<br/>
                    Email: {{user.email}}<br>
                    Uid: {{user.uid}}<br>
                    Provider: {{user.providerData[0].providerId}}</p>
                </div>
            </div>
        <LogOut/>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import LogOut from '../components/LogOut.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
    name: 'Profile',
    components: {
        NavBar,
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
            }
        })
    },
}
</script>
