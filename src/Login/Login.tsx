import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const apikey = import.meta.env.VITE_YOUR_CRUD_API_KEY;

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect user to the home page if they are already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser && location.pathname === "/login") {
      navigate("/");
    }
  }, [navigate, location.pathname]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.get("https://crudapi.co.uk/api/v1/users", {
        headers: {
          Authorization: `Bearer ${apikey}`,
        },
      });

      const users = res.data.items;

      // Check if user exists with the given credentials
      const foundUser = users.find(
        (user: any) => user.username === username && user.password === password
      );

      if (foundUser) {
        // Save the user to localStorage if found
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        // Dispatch custom event to notify other components (e.g., Navbar) that auth status has changed
        window.dispatchEvent(new Event("authChanged"));
        navigate("/"); // Redirect to the home page
      } else {
        setError("დარეგისტრირებული არ ხარ"); // Display error if user not found
      }
    } catch (error: any) {
      console.error("Login Error:", error);
      setError("შეცდომა! სცადე მოგვიანებით."); // Display error message for any issues
    }
  };

  return (
    <div className="login-container">
      <div className="login-div1">
        <h1 className="login-h1">შესვლა</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-div2">
            <label htmlFor="username" className="login-username">
              სახელი:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="login-input"
              placeholder="შეიყვანე სახელი..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-div3">
            <label htmlFor="password" className="login-password">
              პაროლი:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="login-input"
              placeholder="შეიყვანე პაროლი..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="login-btn" type="submit">
            შესვლა
          </button>
          <p className="login-p">
            დარეგისტრირებული არ ხარ?{" "}
            <Link to="/რეგისტრაცია" className="login-link">
              დარეგისტრირდი
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
