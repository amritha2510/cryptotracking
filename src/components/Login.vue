<template>
    <div style="text-align:center;">
        <h1 id = "mainHead">Crypto Paper Portfolio</h1>
        <div id= "firebaseui-auth-container"></div>
        <div id= "pagecontent">
            Crypto Paper Portfolio is an app to track your cryptocurrency portfolio. <br>
            Enter coin details and get real time profit and loss updates of your portfolio.
        </div>
        <h5>copyright@cpp-2021</h5>
    </div>
</template>

<script>
import firebase from '@/uifire.js'
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
    name:"Login",
    mounted() {
        var ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        var uiConfig = {
            signInSuccessUrl: '/home',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]
        };
        ui.start("#firebaseui-auth-container", uiConfig)
    }
}
</script>

<style scoped>
#firebaseui-auth-container{
    margin-top: 50px;;
    margin-bottom: 50px;;
}
#pagecontent{
    height: 100px;
    font-size: larger;
    font-weight: bolder;
    text-align: center;
}
#mainHead{
    text-align: center;
    text-shadow: 2px 2px rgb(182, 70, 70);
}
#bg{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%
}
</style>
