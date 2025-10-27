# 🚗 CarBolt - Electric Car Showcase Platform

CarBolt is a modern, responsive web application for browsing and exploring electric cars from renowned brands like Porsche, Tesla, and Audi. The platform features user authentication, a beautiful car gallery, and an intuitive interface with dark/light mode support.

![CarBolt](https://img.shields.io/badge/CarBolt-Electric%20Cars-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **🔐 User Authentication**: Secure signup and login functionality using Firebase
- **🚗 Car Showcase**: Browse popular electric cars with detailed specifications
- **🌓 Dark/Light Mode**: Toggle between dark and light themes for better viewing experience
- **📱 Responsive Design**: Fully responsive layout that works on all devices
- **🎨 Modern UI**: Beautiful, modern interface with smooth animations
- **🔍 Car Filtering**: Filter cars by brand (Tesla, Audi, Porsche)
- **👤 User Profile**: View and manage your user profile
- **📜 Smooth Scrolling**: Enhanced navigation with scroll animations using ScrollReveal
- **🎪 Interactive Carousel**: Browse cars using Swiper.js carousel

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup for better structure
- **CSS3**: Advanced styling with custom properties and animations
- **JavaScript (Vanilla)**: Core functionality and interactivity
- **Bootstrap 5**: For responsive design and UI components

### Libraries & Frameworks
- **Firebase (Realtime Database)**: For user authentication and data storage
- **Swiper.js**: Touch slider for car showcases
- **ScrollReveal.js**: Smooth scroll animations
- **MixItUp.js**: Dynamic filtering of car listings
- **Remix Icons**: Modern icon library

### External Services
- **Firebase**: Backend services and database
- **Google Fonts**: Typography (Exo font family)

## 📦 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- An active internet connection (for Firebase and external libraries)
- No server-side requirements (static website)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/carbolt.git
   cd carbolt
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the application**
   - Navigate to `http://localhost:8000` (or the port you specified)
   - Or directly open `index.html` in your browser

## 🚀 Usage

### Getting Started

1. **Browse Cars**: Visit the homepage to see featured electric cars
2. **Create Account**: Click "Sign Up" to create a new account
3. **Login**: Use your credentials to access your profile
4. **Explore**: Browse cars by brand, view details, and more
5. **Switch Theme**: Toggle between dark and light mode using the theme switch

### User Features

- **Sign Up**: Create an account with name, email, and password
- **Login**: Authenticate using your email and password
- **Profile**: View your profile information
- **Logout**: Safely log out of your account

## 📁 Project Structure

```
CarBolt/
│
├── assets/
│   ├── css/
│   │   ├── styles.css          # Main stylesheet
│   │   ├── swiper-bundle.min.css
│   │   └── swiper.css
│   ├── img/                     # Car images and assets
│   │   ├── featured1.png
│   │   ├── popular1.png
│   │   └── ...
│   └── js/
│       ├── auth.js              # Authentication logic
│       ├── darkmode.js          # Theme toggle functionality
│       ├── main.js              # Main JavaScript
│       ├── DB.js                # Database configuration
│       └── [other JS files]
│
├── index.html                   # Homepage
├── login.html                   # Login page
├── signup.html                  # Signup page
├── profile.html                 # User profile page
└── README.md                    # This file
```

## 🎨 Features Breakdown

### Homepage (`index.html`)
- Hero section with featured electric car
- Popular cars carousel
- Brand showcase (Tesla, Audi, Porsche)
- About section
- Newsletter subscription
- Footer with links and social media

### Authentication
- **Signup**: Create new user accounts
- **Login**: Authenticate existing users
- **Profile**: View user information
- Session management with localStorage

### Car Showcase
- Interactive car cards with images
- Detailed specifications (speed, range, charging)
- Filter by brand
- Modal popups with car details

### Theme Support
- Dark mode with custom color scheme
- Light mode with alternative colors
- Persistent theme preference
- Smooth transitions

## 🎯 Key Functionalities

### JavaScript Modules

1. **`auth.js`**: Handles user signup and login using Firebase
2. **`main.js`**: Main application logic, carousel, and filtering
3. **`darkmode.js`**: Theme switching functionality
4. **`DB.js`**: Firebase database configuration

## 🔧 Configuration

### Firebase Setup (Already Configured)

The project uses Firebase Realtime Database with the following configuration:
- **Project**: CarBolt
- **Database URL**: https://carbolt-default-rtdb.firebaseio.com
- **Authentication**: Email/Password based

### Customization

To customize the theme colors, edit the CSS variables in `assets/css/styles.css`:

```css
:root {
  --first-color: #4178dc;
  --body-color: #0a0a0b;
  --container-color: #111213;
  /* ... more variables */
}
```

## 🌐 Browser Support

- ✅ Google Chrome (latest)
- ✅ Mozilla Firefox (latest)
- ✅ Safari (latest)
- ✅ Microsoft Edge (latest)
- ✅ Opera (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 767px
- **Desktop**: 768px - 1040px
- **Large Desktop**: > 1040px

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Firebase for backend services
- Swiper.js for the carousel component
- ScrollReveal.js for scroll animations
- Remix Icons for icon library
- Bootstrap for responsive design

## 📞 Contact & Support

For questions or support, please contact:
- Email: support@carbolt.com
- Issue Tracker: [GitHub Issues](https://github.com/yourusername/carbolt/issues)

---

**Built with ❤️ for electric car enthusiasts**

# CarBolt
