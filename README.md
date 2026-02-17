🚀 RouteFlow – React Lazy Loading & Dynamic Loading Demo
📌 Overview

RouteFlow is a React project demonstrating different approaches to lazy loading and dynamic page switching.

This repository contains two implementations:

1️⃣ Component-based switching (Dashboard & Profile)
2️⃣ Route-based navigation using React Router

Both implementations use React.lazy and Suspense to demonstrate code splitting and loading states.

🔹 1️⃣ Dashboard & Profile (Component Switching Version)
📌 Description

This version demonstrates dynamic component switching between a Dashboard and Profile page using React state management. A custom loading state appears every time the user switches between pages.

✨ Features

🔄 Switch between Dashboard and Profile

⚡ Lazy loading using React.lazy()

⏳ Loading message on every switch

🎨 Centered card-based UI layout

🧠 Built using React Hooks (useState)

📂 Project Structure
dashboard-profile-version/
│
├── App.jsx
├── App.css
│
└── components/
    ├── dashboard.jsx
    └── profile.jsx


#### 🏠 Dashboard Page
![Dashboard](\/screenshots/dashboard.png)

#### 👤 Profile Page
![Profile](/screenshots/profile.png)

#### ⏳ Loading State
![Loading Component](/screenshots/loading.png)

---
📌 Description

This version demonstrates route-based lazy loading using React Router and Suspense. It dynamically loads Home, About, and Contact pages with a loading state during navigation.

✨ Features

🔀 React Router navigation (Home, About, Contact)

⚡ Route-based lazy loading

⏳ Suspense fallback loading

🔄 Loading state on every route change

🧠 Uses useLocation, useEffect, and useState

📂 Project Structure
router-version/
│
├── App.jsx
├── App.css
│
└── pages/
    ├── Home.jsx
    ├── About.jsx
    └── Contact.jsx

#### 🏠 Home Page loading state
![Home](/screenshots/home page.png)

#### ℹ️ About Page loading state
![About](/screenshots/about page.png)

#### 📞 Contact Page loading state
![Contact](/screenshots/contact page.png)

Loading message shown during route transitions.

🛠 Tech Stack

React

React Router DOM

JavaScript (ES6+)

CSS3

Vite

⚙️ Installation & Setup
1️⃣ Navigate to project folder
cd my-app

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev


Open the local server URL shown in the terminal (usually http://localhost:5173/).

🎯 Learning Outcomes

This project helps understand:

Lazy loading in React

Suspense fallback mechanism

Component-based switching

Route-based navigation

Managing UI loading states

Structuring scalable React applications
