    // Import Firebase SDK modules
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
    import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

    //DATA-BASE
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

        // Handle form submission
        document.getElementById("signup").addEventListener("submit", function (e) {
            e.preventDefault();

            // Get user input values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Save user data to the database
            set(ref(db, 'users/' + email.replace('.', '_')), {
                fullName: name,
                email: email,
                password: password
            }).then(() => {
                alert("Signup successful!");
                window.location.href = "login.html"; // Redirect to the login page
            }).catch((error) => {
                console.error("Error saving data: ", error);
                alert("Signup failed. Please try again.");
            });
        });