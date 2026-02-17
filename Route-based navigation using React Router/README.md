# RouteFlow – React Lazy Loading with Suspense

## 📌 Overview

RouteFlow is a React application that demonstrates route-based lazy loading using React Router and React Suspense.  

The project shows how to:

- Implement dynamic imports using `React.lazy()`
- Use `Suspense` for fallback UI
- Display loading text on every route change
- Manage route changes using `useLocation`
- Structure a clean multi-page React application

---

## 🚀 Features

- ✅ React Router navigation (Home, About, Contact)
- ✅ Lazy loaded pages (code splitting)
- ✅ Suspense fallback handling
- ✅ Custom loading message on every route change
- ✅ Clean centered UI layout
- ✅ Modern React hooks (`useState`, `useEffect`, `useLocation`)

---

## 🛠 Technologies Used

- React
- React Router DOM
- JavaScript (ES6+)
- CSS3

---

## 📂 Project Structure

src/
│
├── App.jsx
├── App.css
│
└── pages/
├── Home.jsx
├── About.jsx
└── Contact.jsx


---
## 📸 Screenshots

### 🏠 Home Page Loading state
![Home Page](/public/screenshots/home.png)

### ℹ️ About Page Loading state
![About Page](/public/screenshots/about.png)

### 📞 Contact Page Loading state
![Contact Page](/public/screenshots/contact.png)


 
 ---

## ⚙️ How It Works

1. Pages are imported using `React.lazy()`.
2. `Suspense` displays a fallback UI while components load.
3. `useLocation()` detects route changes.
4. A loading state is triggered on every navigation click.
5. After a short delay, the new page renders.

---

## ▶️ Installation & Run

```bash
npm install
npm run dev
