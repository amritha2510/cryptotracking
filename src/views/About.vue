<template>
<div style="text-align:center;" v-if="user">
    <NavBar />
        <h3>This is an About Page</h3>
        <h2>Welcome to CPP!</h2>
        <h3>This is a project for users to track the profits of their cryptocurrency investments.  </h3>
    <LogOut />
</div>
</template>

<script>
import WelcomeCpp from '../components/WelcomeCpp.vue'
import NavBar from '../components/NavBar.vue'
import LogOut from '../components/LogOut.vue'
import firebaseApp from '../firebase.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name:"About",
    components: {
      WelcomeCpp,
      NavBar,
      LogOut
    },

    data() {
      return {
        user: false,
      }
    },
  mounted(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    })
  },
}
</script>