<template>
  <NavBar />
  <WelcomeCpp/>
  <AddCoin @added="change" />
  <ProfitDisplay :key="refreshComp"/>  
  <LogOut/>
</template>

<script>
import WelcomeCpp from '@/components/WelcomeCpp.vue'
import AddCoin from '@/components/AddCoin.vue'
import ProfitDisplay from '@/components/ProfitDisplay.vue'
import LogOut from '@/components/LogOut.vue'
import NavBar from '../components/NavBar.vue'
import firebaseApp from '../firebase.js';
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
  name: 'App',
  components:{
    NavBar,
    WelcomeCpp,
    AddCoin,
    ProfitDisplay,
    LogOut
  },
  data(){
    return{
      refreshComp:0,
      user: false,
      useremail: "",
    }
   },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        this.user = user.useremail;
      }
    })
  },
  methods:{
    change(){  
      this.refreshComp += 1
      }
     }  
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;

}

#bg { 
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}
</style>
