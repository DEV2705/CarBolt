//DATA-BASE
// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAYMj_8TzGuq0GkWXcuOPWfjUHeebtscGg",
    authDomain: "carbolt.firebaseapp.com",
    databaseURL: "https://carbolt-default-rtdb.firebaseio.com",
    projectId: "carbolt",
    storageBucket: "carbolt.firebasestorage.app",
    messagingSenderId: "807674053255",
    appId: "1:807674053255:web:13a23877ba013fdd2dae22"
  };
  
  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  //reference your Database
  var CarBoltDB=firebase.database().ref('CarBolt');
  
  document.getElementById('signup').addEventListener('submit',submitForm);
  
  function submitForm(e){
    e.preventDefault();
  
    var name=getElementVal("name");
    var emailId=getElementVal("email");
    var password=getElementVal("password");
  }
  
  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  }