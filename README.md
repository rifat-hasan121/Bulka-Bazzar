# BulkBazaar - B2B Wholesale Marketplace

Welcome to **BulkBazaar**, a global B2B wholesale platform designed to connect manufacturers and distributors with retailers, resellers, and institutional buyers. This full-featured web application supports multi-category product listings, bulk order purchasing, protected routes, JWT authentication, and a seamless user experience across devices.

## 🚀 Live Website

🔗 [Live Site URL](https://assignment-11-f22d8.web.app/)

## 🧠 Purpose

The project was built as part of the **Assignment-11** evaluation to showcase advanced frontend and backend skills including:
- CRUD operations with MongoDB
- JWT authentication and Firebase integration
- Protected/private routing
- Responsive design
- Real-time cart and inventory management
- Form validation and custom logic

---

## 🌟 Key Features

- 🔐 **Authentication:**
  - Email/password login & registration using Firebase
  - Google login
  - JWT token-based access control for private routes

- 📦 **Product Management:**
  - Add, update, and delete products (with category, brand, rating, quantity, etc.)
  - Minimum purchase quantity validation
  - Buy modal with auto-filled user info

- 🛒 **Cart System:**
  - View purchased products
  - Remove/cancel with quantity updates via `$inc` operator in MongoDB

- 📑 **Pages:**
  - Home, Categories, All Products (with filter & toggle views)
  - Product Details (with modal purchase)
  - Add Product
  - My Products
  - Cart
  - Login & Register
  - 404 Not Found

- ⚙️ **Advanced Functionalities:**
  - Responsive UI (mobile/tablet/desktop)
  - Dynamic page titles
  - Framer Motion animations
  - Toast/sweetalert for notifications
  - Filter: Show products with min selling quantity > 100
  - Toggle View: Card / Table View on All Products page

---

## 📦 NPM Packages Used

**Frontend**
- `react-router-dom`
- `firebase`
- `axios`
- `jwt-decode`
- `react-hook-form`
- `react-icons`
- `react-toastify`
- `sweetalert2`
- `framer-motion`
- `swiper`
- `react-rating-stars-component`
- `dotenv`

**Backend**
- `express`
- `cors`
- `mongoose`
- `dotenv`
- `jsonwebtoken`
- `cookie-parser`

---

## 🗂️ Folder Structure



---

## 🔐 Environment Variables

**Frontend (.env)**


PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


---

## 🛠️ Setup & Installation

```bash

✅ Deployment Checkpoints
✅ No CORS, 404, or 504 errors in production

✅ Private route reloads do not redirect to login

✅ Firebase domain added

✅ Server and client both deployed successfully

📝 Author
Developed by Rifat Hasan
Under Assignment-11 of Programming Hero’s Web Dev Program

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Let me know if you'd like the actual `.env.example` files or code snippets for key pages like `BuyModal`, `Cart`, or the `JWT` setup.


