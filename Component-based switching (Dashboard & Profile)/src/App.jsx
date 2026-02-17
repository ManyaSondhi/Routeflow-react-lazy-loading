import React, { useState, lazy, Suspense, useEffect } from "react";
import "./App.css";

const Profile = lazy(() => import("./components/profile"));
const Dashboard = lazy(() => import("./components/dashboard"));

function App() {
  const [page, setPage] = useState("dashboard");
  const [loading, setLoading] = useState(false);

  const handlePageChange = (newPage) => {
    setLoading(true);

    setTimeout(() => {
      setPage(newPage);
      setLoading(false);
    }, 800); // loading duration
  };

  return (
    <div className="app-container">

      <div className="page-card">

        <div className="top-buttons">
          <button onClick={() => handlePageChange("dashboard")}>
            Dashboard
          </button>
          <button onClick={() => handlePageChange("profile")}>
            Profile
          </button>
        </div>

        <div className="content-section">
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <Suspense fallback={<h2>Loading...</h2>}>
              {page === "dashboard" && <Dashboard />}
              {page === "profile" && <Profile />}
            </Suspense>
          )}
        </div>

      </div>

    </div>
  );
}

export default App;
