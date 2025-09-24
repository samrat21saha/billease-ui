BillEase – Smart Billing & Payments Management Platform

BillEase is a full-stack web application designed to streamline billing, invoicing, and payments management with a modern and intuitive UI. Built using React (Vite) for the frontend and Spring Boot for the backend, it provides an efficient and scalable solution for businesses.

🚀 Features

📦 Category & Item Management – add, update, search, and delete products

👥 User Management – register and manage users securely

🛒 Cart & Checkout Flow – explore items, add to cart, and manage summary

🔐 Authentication – JWT-based login with secure token storage

🎨 Responsive UI – clean design with custom CSS and Bootstrap integration

🛠 Toast Notifications – real-time feedback for user actions

## 🖥️ Tech Stack  
- **Frontend:** React (Vite), Axios, React Router, Bootstrap, React Hot Toast  
- **Backend:** Spring Boot, REST APIs, JWT Authentication  
- **Database:** MySQL / PostgreSQL (configurable)

## 🚀 Running the Project Locally    Follow these steps to set up and run **BillEase** on your local machine:
### 1️⃣ Clone the Repository   ```bash git clone https://github.com/samrat21saha/billease-ui.git cd billease-ui ` 
### 2️⃣ Install Dependencies
 
Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
 `npm install ` 
### 3️⃣ Start the Frontend (React + Vite)
 `npm run dev ` 
This will start the frontend on [http://localhost:5173](http://localhost:5173).
 
### 4️⃣ Backend Setup (Spring Boot)
 
 
- Navigate to the backend project folder.
 
- Make sure you have **Java 17+** and **Maven** installed.
 
- Update your `application.properties` with
DB credentials.
 

 `mvn spring-boot:run ` 
This will start the backend on [http://localhost:8080](http://localhost:8080).
 
### 5️⃣ Database Setup
 
 
- Install **MySQL** or **PostgreSQL** (based on your config).
 
- Create a new database (e.g., `billease_db`).
 
- Update DB details in `application.properties`.
 

 
### 6️⃣ Access the Application
 
 
- Frontend: [http://localhost:5173](http://localhost:5173)
 
- Backend APIs: [http://localhost:8080](http://localhost:8080
