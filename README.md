This repository contains the backend for the Employee Management System using JSON Server.
ems API (JSON Server)
A simple mock REST API for managing employees, tasks, and admin data — hosted on "Render".

---
Live API
Base URL:  
 [https://your-app-name.onrender.com](https://ems-json-server.onrender.com/)

##  Project Structure
employee-json-server/
├── db.json # Mock database (employees, tasks, admin)
├── index.js # JSON Server setup with CORS enabled
├── package.json # Node.js dependencies and scripts
└── README.md # Documentation

##  Technologies Used
- **Node.js**
- **JSON Server**
- **CORS**
- **Render (Hosting)**
- 
##  Getting Started (Local Setup)
### 1. Clone the Repository
git clone https://github.com/Vishant-Chaudhary/ems-json-server.git
cd ems-json-server

2. install Dependencies
   npm install

3. Run the Server Locally
   npm start

your server will start at: https://localhost:10000

API Endpoints
GET	 /employees		:Get all employees
GET 	 /employees/:id	:Get a specific employee by ID
POST 	 /employees		:Add a new employee data
Put 	 /employees/:id		:Update employee data
GET	 /admin			:Get Admin data

Each employee object includes nested task data and task counts
