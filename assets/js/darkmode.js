document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
  
    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement;
  
    function enableDarkMode() {
        console.log("Enabling dark mode");
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
  
        root.style.setProperty('--body-color', '#0a0a0b');
        root.style.setProperty('--white-color', '#fff');
        root.style.setProperty('--container-color', '#111213');
        root.style.setProperty('--title-color', '#f1f2f3');
        root.style.setProperty('--text-color', '#babec4');
        root.style.setProperty('--text-color-light', '#888b91');
        root.style.setProperty('--home-btn', '#02d98a');
        root.style.setProperty('--home-btn-hover', '#08915f');
        root.style.setProperty('--box-shadow', '#ffffff33');
        root.style.setProperty('--about-card-color', '#ffffff1a');
        root.style.setProperty('--scroll-up', '#ffffff1a');
        // root.style.setProperty('--about-text', '#fffffff');
  
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
    }
  
    function disableDarkMode() {
        console.log("Disabling dark mode");
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
  
        root.style.setProperty('--body-color', '#e7e3e3');
        root.style.setProperty('--white-color', '#000');
        root.style.setProperty('--container-color', '#f8f9fa');
        root.style.setProperty('--title-color', '#000');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--text-color-light', '#555');
        root.style.setProperty('--home-btn', '#08915f');
        root.style.setProperty('--home-btn-hover', '#02d98a');
        root.style.setProperty('--box-shadow', 'black');
        root.style.setProperty('--about-card-color', '#ffffff3a');
        root.style.setProperty('--scroll-up', '#3333331a');
        // root.style.setProperty('--about-text', '#fffffff');
  
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled");
    }
  
    // Apply dark mode preference on page load
    if (localStorage.getItem("darkMode") === "enabled") {
        console.log("Dark mode was previously enabled");
        enableDarkMode();
    } else {
        console.log("Dark mode was previously disabled");
        disableDarkMode();
    }
  
    // Ensure the toggle switch exists before adding event listeners
    if (themeToggle) {
        themeToggle.checked = localStorage.getItem("darkMode") === "enabled";
  
        themeToggle.addEventListener("change", () => {
            console.log("Theme toggle changed");
            if (themeToggle.checked) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        });
    } else {
        console.warn("Theme toggle button not found on this page.");
    }
  });
  