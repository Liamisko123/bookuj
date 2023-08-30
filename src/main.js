import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'

//

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOKeGgmsGFyuR6ZrGgZaOacs57jg-sx3c",
    authDomain: "cosiblazenidkproject2.firebaseapp.com",
    databaseURL: "https://cosiblazenidkproject2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cosiblazenidkproject2",
    storageBucket: "cosiblazenidkproject2.appspot.com",
    messagingSenderId: "923542919840",
    appId: "1:923542919840:web:7aa1bbea30f8ea011807c5"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

const myApp = createApp(App)
myApp.use(store)
myApp.use(router)
myApp.use(VueCookies)
myApp.mount("#app")