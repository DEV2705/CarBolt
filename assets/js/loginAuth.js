 // Import Firebase SDK modules
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
 import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

 // Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAYMj_8TzGuq0GkWXcuOPWfjUHeebtscGg",
   authDomain: "carbolt.firebaseapp.com",
   databaseURL: "https://carbolt-default-rtdb.firebaseio.com",
   projectId: "carbolt",
   storageBucket: "carbolt.firebasestorage.app",
   messagingSenderId: "807674053255",
   appId: "1:807674053255:web:13a23877ba013fdd2dae22"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);

 // Handle login form submission
 document.getElementById("login").addEventListener("submit", async function (e) {
   e.preventDefault();

   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;

   // Replace dots in the email address to match the signup format
   const sanitizedEmail = email.replace(/\./g, '_');

   try {
     // Reference to the user node
     const userRef = ref(db, 'users/' + sanitizedEmail);
     
     // Retrieve the user data from the database
     const snapshot = await get(userRef);
     
     if (snapshot.exists()) {
       const userData = snapshot.val();
       
       // Validate the password
       if (userData.password === password) {
         alert("Login successful!");
         
         // Redirect to the home page
         window.location.href = "index.html";

         // Update the navigation bar
         updateNavBar();
       } else {
         alert("Incorrect password. Please try again.");
       }
     } else {
       alert("No account found with this email. Please sign up first.");
     }
   } catch (error) {
     console.error("Error logging in:", error);
     alert("An error occurred during login. Please try again.");
   }
 });

 // Function to update the navigation bar
 function updateNavBar() {
   const navList = document.querySelector('.nav__list');

   // Remove Login and Sign Up links
   const loginLink = document.querySelector('a[href="login.html"]').parentElement;
   const signupLink = document.querySelector('a[href="signup.html"]').parentElement;
   navList.removeChild(loginLink);
   navList.removeChild(signupLink);

   // Create Profile dropdown
   const profileItem = document.createElement('li');
   profileItem.className = 'nav__item';

   const profileLink = document.createElement('a');
   profileLink.href = '#';
   profileLink.className = 'nav__link';
   profileLink.textContent = 'Profile';

   const dropdownMenu = document.createElement('ul');
   dropdownMenu.className = 'dropdown-menu';

   const historyLink = document.createElement('li');
   historyLink.innerHTML = '<a href="#history">History</a>';

   const logoutLink = document.createElement('li');
   logoutLink.innerHTML = '<a href="#logout">Logout</a>';

   const detailsLink = document.createElement('li');
   detailsLink.innerHTML = '<a href="#details">See Details</a>';

   dropdownMenu.appendChild(historyLink);
   dropdownMenu.appendChild(logoutLink);
   dropdownMenu.appendChild(detailsLink);

   profileItem.appendChild(profileLink);
   profileItem.appendChild(dropdownMenu);

   // Add Profile dropdown to the navigation bar
   navList.appendChild(profileItem);
 }