# 📋 Task Manager

A full-featured backend **Task Manager application** built using Node.js, Express, MongoDB, and EJS.  
This app allows users to create, view, update, and delete tasks through a web interface with basic frontend views.

---

## 🚀 Tech Stack

- **Backend:** Node.js  
- **Framework:** Express.js  
- **Database:** MongoDB  
- **Templating Engine:** EJS  
- **Package Manager:** npm  

---

## 📁 Project Structure

```
Task-Manager/
│
├── config/         # Database configuration
├── controllers/    # Request handlers and business logic
├── middleware/     # Custom middleware
├── models/         # Mongoose schemas
├── routes/         # API and view routes
├── views/          # EJS templates (frontend)
├── app.js          # Application entry point
├── package.json    # Dependencies and scripts
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Shwet594/Task-Manager.git
cd Task-Manager
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the project root (if needed):

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

## ▶️ Run the Application

```bash
npm start
```

Server will start on:

```
http://localhost:3000
```

---

## 📦 Features

- Create new tasks
- View list of tasks
- Edit existing tasks
- Delete tasks
- UI templates rendered with EJS
- MVC architecture

---

## 🧠 How It Works

This project uses the **MVC (Model-View-Controller)** pattern:

### 📌 Models

Define task structure with fields like title, description, status, timestamps, etc.

### 📌 Controllers

Contains logic for:
- Creating tasks
- Fetching tasks
- Updating tasks
- Deleting tasks

### 📌 Routes

Define endpoints for:
- Rendering pages
- Handling form submissions

### 📌 Views

EJS views for displaying UI:
- Home page
- Add task page
- Edit task page

---

## 📡 Example Routes

| Method | Route | Description |
|--------|--------|-------------|
| GET | `/` | View all tasks |
| GET | `/tasks/add` | Add new task form |
| POST | `/tasks/add` | Create task |
| GET | `/tasks/edit/:id` | Edit task page |
| POST | `/tasks/edit/:id` | Update task |
| POST | `/tasks/delete/:id` | Delete task |

---

## 🔐 Middleware

Your project may use middleware for:
- Authentication
- Request validation
- Flash messages
- Error handling

---

## 🛠 Suggested Enhancements

- Add user registration/login (auth)
- Implement sorting and filtering of tasks
- Add task deadlines & reminders
- Add REST API endpoints for external clients
- Add unit/integration tests
- Improve UI with CSS frameworks

---

## 🤝 Contributing

1. Fork this repository  
2. Create a new branch (`git checkout -b feature`)  
3. Commit your changes  
4. Push to your branch  
5. Open a pull request

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👩‍💻 Author

Shweta  
GitHub: https://github.com/Shwet594

---

## ⭐ Support

If this project helped you, please **⭐ star** it on GitHub — it really means a lot!
