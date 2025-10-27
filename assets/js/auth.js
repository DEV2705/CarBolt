// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

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

// Function to handle signup
async function handleSignup(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const sanitizedEmail = email.replace(/\./g, '_');
  
    try {
      // Save user data in Firebase
      await set(ref(db, 'users/' + sanitizedEmail), {
        fullName: name,
        email: email,
        password: password
      });
  
      // Store user data in localStorage immediately after signing up
      const userData = { fullName: name, email: email };
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
  
      alert("Signup successful!");
      window.location.href = "index.html"; // Redirect to home page
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  }

// Function to handle login
async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const sanitizedEmail = email.replace(/\./g, '_');

  try {
    const userRef = ref(db, 'users/' + sanitizedEmail);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      if (userData.password === password) {
        alert("Login successful!");

        // Store user data in localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(userData));

        window.location.href = "index.html"; // Redirect to homepage
      } else {
        alert("Incorrect password. Please try again.");
      }
    } else {
      alert("No account found with this email. Please sign up first.");
    }
  } catch (error) {
    console.error("Login failed:", error);
    alert("An error occurred during login. Please try again.");
  }
}

// Attach event listeners dynamically based on form ID
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("signup")) {
    document.getElementById("signup").addEventListener("submit", handleSignup);
  } else if (document.getElementById("login")) {
    document.getElementById("login").addEventListener("submit", handleLogin);
  }
});
