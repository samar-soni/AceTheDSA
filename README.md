# AceTheDSA - Backend API

A Node.js + Express backend for **AceTheDSA**, a coding practice platform that allows users to mark DSA questions for revision, delete marked questions, and manage user data. The backend is deployed on **Render**, connected to **MongoDB Atlas**, and designed to support a frontend application.

---

## 🌐 Live Frontend URL

> [https://your-acethedsa-frontend.onrender.com](https://acethedsa-frontend.onrender.com/practice/hashtable)

Make sure to replace this with your actual Render deployment URL.
---

## 📦 Tech Stack

- **Frontend Framework**: Reactjs 
- **Backend Framework**: Node.js, Express.js  
- **Database**: MongoDB (via MongoDB Atlas)  
- **Middleware**: CORS, body-parser, dotenv  
- **Authentication**: JWT  
- **Hosting**: Render  

---

## 🧪 Environment Variables

Create a `.env` file in the root of the project and add the following:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## 📸 Screenshots

### 🖼️ Home Page
<img width="1362" height="596" alt="User Login Page" src="https://github.com/user-attachments/assets/629dc386-f146-444a-96e5-ac29f6451f11" />



---

### 🖼️ Topics Name
<img width="1321" height="589" alt="Marked Questions Page" src="https://github.com/user-attachments/assets/c7c0e53d-96e7-49fb-a638-a02540a9d756" />



---

### 🖼️ Company Wise Questions
<img width="1347" height="566" alt="Add Question for Revision" src="https://github.com/user-attachments/assets/8ece21d7-a05e-4302-a10c-b1570b1762cb" />


---

### 🖼️  Marked Questions
<img width="1346" height="588" alt="Delete Marked Question" src="https://github.com/user-attachments/assets/71dbedd7-0fe9-4871-b555-47fcab730e1d" />

- Provides functionality to delete a question from the revision list.

---

### 🖼️ Question Display
<img width="1343" height="586" alt="User Dashboard" src="https://github.com/user-attachments/assets/41f3427a-f203-463f-adc2-69d34329c767" />


