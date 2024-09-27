# 🌟 WildLens Tours - Backend 🌟

Welcome to the backend of **WildLens Tours**, a MERN stack application designed for discovering and booking wildlife tours globally. This backend, built with Node.js and Express.js, handles API requests, manages user authentication, and integrates with MongoDB for data storage.

## 🛠️ Features

### 🧩 RESTful APIs
Our backend provides a comprehensive set of **RESTful APIs** that facilitate interactions with various parts of the application. These APIs handle CRUD operations for users, tours, and bookings, enabling seamless communication between the frontend and backend.

### 🔐 Authentication & Authorization
We ensure robust security through **JWT (JSON Web Tokens)** for user authentication and **Bcrypt** for hashing passwords. This setup validates user access and protects sensitive information, maintaining the integrity and privacy of user credentials.

### 🗄️ Data Management
Using **MongoDB**, our backend efficiently manages all data, including user profiles, tour details, and booking records. MongoDB’s flexible schema and scalability make it ideal for handling diverse and growing datasets.

### 🔒 Role-Based Access Control
**Role-Based Access Control (RBAC)** is implemented to manage user permissions effectively. Middleware ensures that only authorized users can access or modify specific resources, such as tour details or user accounts, enhancing overall security.

### 💳 Payment Integration
We integrate with **Razorpay** for handling secure transactions. This feature allows users to make payments for their bookings safely, with all payment processes managed efficiently through Razorpay’s payment gateway.

# Getting Started
### Prerequisites
Ensure you have the following installed before proceeding:

** Node.js (v14 or above)
** npm (v6 or above)
** MongoDB (local or cloud instance)

## Installation
Clone this repository to your local machine:

Clone this repository to your local machine:
git clone https://github.com/your-username/world-lens-tours.git

Navigate into the project directory:
cd world-lens-tours

Install the necessary dependencies:
npm install

## Running the Application
Start the backend server:
node index.js

In another terminal, start the frontend:
npm run dev

The application should now be running at http://localhost:3000.

# API Documentation
To access the World Lens Tours API documentation, visit the following link: (https://documenter.getpostman.com/view/16859357/2sAXqy3K9H)
