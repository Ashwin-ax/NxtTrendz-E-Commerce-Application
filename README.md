
# Nxt Trendz – E-Commerce Application

A modern e-commerce web application inspired by Amazon and Flipkart. Built with **React.js** and integrated with secure authentication and product APIs, Nxt Trendz provides a seamless shopping experience with login, product listing, and product detail pages.

🔗 **Live Demo**: [Nxt Trendz E-Commerce App](https://ashwinnxtrendz.ccbp.tech/login)
👉 Test Credentials:

* Username: `rahul`
* Password: `rahul@2021`

---

## ✨ Features

* **User Authentication & Authorization**

  * Secure login with JWT token-based authentication.
  * Protected routes accessible only after login.

* **Product Browsing**

  * Browse a wide variety of products with images, titles, and pricing.
  * Detailed product pages with complete information.

* **Seamless Navigation**

  * Built with **React Router** for smooth client-side navigation.

* **Responsive UI**

  * Designed with **CSS & Bootstrap** for a mobile-friendly, responsive layout.

* **Performance Enhancements**

  * Integrated loading spinners using `react-spinner-loader`.
  * Optimized API requests and cookie storage for efficient session handling.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, JavaScript, CSS, Bootstrap
* **Routing:** React Router
* **State Management:** React Context
* **Authentication:** JWT Token, Cookie Storage
* **API Integration:** REST API calls
* **UI Enhancements:** React Icons, React Spinner Loader, and other third-party React packages

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Ashwin-ax/NxtTrendz-E-Commerce-Application.git
cd NxtTrendz-E-Commerce-Application
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm start
```

The app will start on [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

```
NxtTrendz-E-Commerce-Application/
├── public/             # Static files
├── src/
│   ├── components/     # Reusable React components
│   ├── context/        # React Context for state management
│   ├── pages/          # Login, Products, Product Details
│   ├── App.js          # Root component with routing
│   └── index.js        # Application entry point
└── package.json        # Dependencies and scripts
```

---

## 🔒 Authentication Flow

1. User logs in with username and password.
2. Backend validates credentials and returns a **JWT token**.
3. Token is stored securely in cookies.
4. Protected routes (e.g., Products, Product Details) require a valid token to access.

---

## 📌 Deployment

The project is deployed using **CCBP Tech hosting**.
Live app: [https://ashwinnxtrendz.ccbp.tech/login](https://ashwinnxtrendz.ccbp.tech/login)

---

## 👨‍💻 Author

**Ashwin Suryawanshi**

* GitHub: [Ashwin-ax](https://github.com/Ashwin-ax)
