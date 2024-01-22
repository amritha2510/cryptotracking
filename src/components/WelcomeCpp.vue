<template>
    <h1>Welcome to the CPP</h1>
</template>

<script>
// import firebaseApp from '@/firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
console.log("in WC")
export default {
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

<style scoped>
h1{
  background-color: pink;
  /* display: inline-block; */
  text-align: center;
}
</style>
