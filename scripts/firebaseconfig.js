// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


(function (window) {
    'use strict';
  //   var App = window.App || {};
    
      window.FirebaseConfig = {
        apiKey: "AIzaSyAolST0lpHmmvecDMH0qDc0XJASPkV6zX8",
        authDomain: "coffeerun-7c0ff.firebaseapp.com",
        databaseURL: "https://coffeerun-7c0ff-default-rtdb.firebaseio.com",
        projectId: "coffeerun-7c0ff",
        storageBucket: "coffeerun-7c0ff.appspot.com",
        messagingSenderId: "16665373653",
        appId: "1:16665373653:web:b6f5e341d235c60989ab5c",
        measurementId: "G-P3WJZ70CWZ"
      };
     App.FirebaseConfig = FirebaseConfig;
     firebase.initializeApp(App.FirebaseConfig);
     
     window.App = App;
  
  })(window);