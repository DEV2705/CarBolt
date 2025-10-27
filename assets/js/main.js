/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
// Samajhvu padse
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidePerView: 'auto',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 48,
        },
      },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured=mixitup('.featured__content',{
  selectors:{
    target:'.featured__card'
  },
  animation:{
    duration:300
  }
});

/* Link active featured */ 
// -----------------------------------samajh vanu cheeeeeeeee--------
const linkFeatured=document.querySelectorAll('.featured__item')

function activeFeatured(){
  linkFeatured.forEach(l=> l.classList.remove('active-featured'))
  this.classList.add('active-featured')
}
linkFeatured.forEach(l=>l.addEventListener('click',activeFeatured ))

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2000,
  delay:400,
  // reset:true
})

sr.reveal('.home__title, .popular__container, .features__img, .featured__filters, .login-container')
sr.reveal('.home__subtitle',{delay:500})
sr.reveal('.home__elec',{delay:600})
sr.reveal('.home__img',{delay:800})
sr.reveal('.home__car-data',{delay:900,interval:100,origin:'bottom'}) 
sr.reveal('.home__button',{delay:1000,origin:'bottom'}) 
sr.reveal('.about__group, .offer__data',{origin:'left'}) 
sr.reveal('.about__data, .offer__img',{origin:'right'}) 
sr.reveal('.features__map',{delay:600,origin:'bottom'}) 
sr.reveal('.features__card',{interval:300}) 
sr.reveal('.featured__card, .logos__content, .footer__content',{interval:100})

/* =====================DARK-LIGHT MODE================ */
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM fully loaded and parsed");

//   const themeToggle = document.getElementById("themeToggle");
//   const root = document.documentElement;

//   function enableDarkMode() {
//       console.log("Enabling dark mode");
//       document.body.classList.add("dark-mode");
//       document.body.classList.remove("light-mode");

//       root.style.setProperty('--body-color', '#0a0a0b');
//       root.style.setProperty('--white-color', '#fff');
//       root.style.setProperty('--container-color', '#111213');
//       root.style.setProperty('--title-color', '#f1f2f3');
//       root.style.setProperty('--text-color', '#babec4');
//       root.style.setProperty('--text-color-light', '#888b91');
//       root.style.setProperty('--home-btn', '#02d98a');
//       root.style.setProperty('--home-btn-hover', '#08915f');

//       document.documentElement.classList.add("dark");
//       localStorage.setItem("darkMode", "enabled");
//   }

//   function disableDarkMode() {
//       console.log("Disabling dark mode");
//       document.body.classList.add("light-mode");
//       document.body.classList.remove("dark-mode");

//       root.style.setProperty('--body-color', '#e7e3e3');
//       root.style.setProperty('--white-color', '#000');
//       root.style.setProperty('--container-color', '#f8f9fa');
//       root.style.setProperty('--title-color', '#000');
//       root.style.setProperty('--text-color', '#333');
//       root.style.setProperty('--text-color-light', '#555');
//       root.style.setProperty('--home-btn', '#08915f');
//       root.style.setProperty('--home-btn-hover', '#02d98a');

//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("darkMode", "disabled");
//   }

//   // Apply dark mode preference on page load
//   if (localStorage.getItem("darkMode") === "enabled") {
//       console.log("Dark mode was previously enabled");
//       enableDarkMode();
//   } else {
//       console.log("Dark mode was previously disabled");
//       disableDarkMode();
//   }

//   // Ensure the toggle switch exists before adding event listeners
//   if (themeToggle) {
//       themeToggle.checked = localStorage.getItem("darkMode") === "enabled";

//       themeToggle.addEventListener("change", () => {
//           console.log("Theme toggle changed");
//           if (themeToggle.checked) {
//               enableDarkMode();
//           } else {
//               disableDarkMode();
//           }
//       });
//   } else {
//       console.warn("Theme toggle button not found on this page.");
//   }
// });


/* ===================== CAR CARD DETAILS ======================*/
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".featured__button");
  const detailsPopup = document.getElementById("car-details");
  const closeBtn = document.querySelector(".featured__details-close");

  // Selecting elements inside the modal
  const carTitle = document.getElementById("car-title");
  const carImage = document.getElementById("car-image");
  const carPrice = document.getElementById("car-price");
  const carDescription = document.getElementById("car-description");

  // Define car details data
  const carsData = {
    "tesla-x": {
      title: "Tesla Model X",
      image: "assets/img/featured1.png",
      price: "₹2 Cr",
      description: `The Tesla Model X is a revolutionary all-electric SUV that combines cutting-edge technology with impressive performance. Its futuristic Falcon Wing doors provide unmatched accessibility while offering a spacious and luxurious interior. The Model X offers incredible acceleration and the latest in autonomous driving technology, all while remaining environmentally friendly and practical. Whether you're looking for a high-performance electric vehicle or a family-friendly SUV, the Model X delivers it all.

🔹 Key Highlights
✔ Engine: Dual Motor All-Wheel Drive for incredible performance
✔ Horsepower: 670 HP for quick acceleration
✔ 0-100 km/h: 2.6 seconds – one of the fastest SUVs on the market
✔ Top Speed: 250 km/h – a high-speed electric powerhouse
✔ Transmission: Single-Speed Automatic for seamless acceleration
✔ Drive Type: All-Wheel Drive for exceptional handling`
    },
    "tesla-3": {
      title: "Tesla Model 3",
      image: "assets/img/featured2.png",
      price: "₹70 Lakh",
      description: `Tesla Model 3
The Tesla Model 3 is a game-changer in the electric vehicle market, offering an affordable yet high-performance driving experience. With sleek styling, exceptional range, and innovative technology, the Model 3 is the perfect choice for anyone who wants a sustainable yet thrilling vehicle. The minimalist interior focuses on simplicity, with a large touchscreen that controls nearly every aspect of the car.

🔹 Key Highlights
✔ Engine: Rear-Wheel Drive / All-Wheel Drive for flexibility
✔ Horsepower: 283 HP for a smooth yet powerful drive
✔ 0-100 km/h: 3.3 seconds – blistering fast acceleration
✔ Top Speed: 261 km/h – engineered for speed
✔ Transmission: Single-Speed Automatic for an effortless ride
✔ Drive Type: Rear-Wheel Drive / All-Wheel Drive for stability`
    },
    "audi-e": {
      title: "Audi E-tron",
      image: "assets/img/featured3.png",
      price: "₹89 Lakh",
      description: `Audi e-tron
The Audi e-tron is a luxury all-electric SUV that offers a refined blend of performance, comfort, and advanced technology. With a spacious interior, cutting-edge driver-assist features, and a smooth, quiet ride, the e-tron is a perfect choice for those seeking a premium electric vehicle experience. Audi’s renowned Quattro all-wheel drive system ensures superior handling in all conditions, making it ideal for both city and off-road adventures.

🔹 Key Highlights
✔ Engine: Dual Motor All-Wheel Drive for balanced performance
✔ Horsepower: 402 HP for impressive power
✔ 0-100 km/h: 5.7 seconds – fast and efficient
✔ Top Speed: 200 km/h – efficient yet sporty
✔ Transmission: Single-Speed Automatic for smooth driving
✔ Drive Type: Quattro All-Wheel Drive for enhanced handling`
    },
    "porsche-boxster": {
      title: "Porsche Boxster 987",
      image: "assets/img/featured4.png",
      price: "₹1.6 Cr",
      description: `The Porsche Boxster 987 is a masterpiece of precision engineering, offering a perfect balance of power, agility, and luxury. Designed for those who crave the thrill of open-air driving, this mid-engine sports car delivers exceptional handling and responsiveness on every turn. With its timeless Porsche styling, premium interior, and a roaring flat-six engine, the Boxster 987 provides an unmatched driving experience that feels at home on both city streets and winding highways.

🔹 Key Highlights
✔ Engine: 2.7L / 3.4L Flat-6 for a thrilling ride
✔ Horsepower: 240 – 310 HP for heart-pounding acceleration
✔ 0-100 km/h: 5.3 seconds – lightning-fast performance
✔ Top Speed: 270 km/h – built for speed enthusiasts
✔ Transmission: 6-speed manual / 7-speed PDK for ultimate control
✔ Drive Type: Rear-Wheel Drive – precision handling at its best`
    },
    "porsche-panamera": {
      title: "Porsche Panamera",
      image: "assets/img/featured5.png",
      price: "₹1.7 Cr",
      description: `The Porsche Panamera is the ultimate luxury sedan that combines sports car DNA with refined elegance. With a variety of powertrains, including turbocharged and hybrid options, the Panamera delivers an exhilarating performance without compromising on comfort. Whether you're behind the wheel on a winding mountain road or cruising on the highway, the Panamera offers the perfect balance of speed, precision, and luxury.

🔹 Key Highlights
✔ Engine: 3.0L V6 / 4.0L V8 for exceptional power
✔ Horsepower: 325 – 620 HP for thrilling performance
✔ 0-100 km/h: 3.6 seconds – rapid acceleration
✔ Top Speed: 306 km/h – built for speed enthusiasts
✔ Transmission: 8-Speed PDK for quick gear shifts
✔ Drive Type: All-Wheel Drive / Rear-Wheel Drive for versatility
`
    }
  };

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const carId = button.getAttribute("data-id");
      const carData = carsData[carId];
    
      if (carData) {
        carTitle.innerText = carData.title;
        carImage.src = carData.image;
        carPrice.innerText = carData.price;
        carDescription.innerText = carData.description;
        
        // Make sure the modal is visible
        detailsPopup.classList.add("active");
      } else {
        console.error("Car details not found for ID:", carId);
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    detailsPopup.classList.remove("active");
  });

  // Close when clicking outside the pop-up
  document.addEventListener("click", (event) => {
    if (!detailsPopup.querySelector(".featured__details-content").contains(event.target) &&
        !event.target.closest(".featured__button")) {
      detailsPopup.classList.remove("active");
    }
  });
});


// ===========================Profile================================
document.addEventListener("DOMContentLoaded", () => {
  // Check if the user is logged in by reading from localStorage
  const userData = localStorage.getItem("loggedInUser");

  if (userData) {
    // Parse the stored JSON string
    const user = JSON.parse(userData);
    
    // Hide the Login and Sign Up links
    const loginLink = document.getElementById("login-link");
    const signupLink = document.getElementById("signup-link");
    if (loginLink) loginLink.style.display = "none";
    if (signupLink) signupLink.style.display = "none";

    // Show the Profile link
    const profileLink = document.getElementById("profile-link");
    if (profileLink) profileLink.style.display = "block"; 
  }
});