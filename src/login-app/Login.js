// Login.js
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ onLoginSuccess }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null); // null, 'success', 'failure'
  const [loginMessage, setLoginMessage] = useState("");
  let baseURL = "http://localhost:8000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginStatus(null); // Reset status before new attempt
    setLoginMessage("");

    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      };

      let bodyContent = `username=${encodeURIComponent(
        user
      )}&password=${encodeURIComponent(password)}`;

      let response = await fetch(`${baseURL}/token`, {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let data = await response.json();
      localStorage.setItem("authToken", data.token);
      setLoginStatus("success");
      setLoginMessage("Login successful!");
      //   navigate("/portfolio")
      onLoginSuccess();
    } catch (error) {
      console.error("Login failed:", error);
      setLoginStatus("failure");
      setLoginMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="logo">Welcome</div>
        <a href="#" className="back-link">
          What to Expect
        </a>
        <div className="image-container">
          <div className="image-overlay"></div>
          <div className="image-text">Capturing Moments, Creating Memories</div>
          <div className="image-dots">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="form-container">
          <h2>Login</h2>
          <p className="login-prompt" style={{ cursor: "pointer" }}>
            Don't have an account ? 
            <Link to="/register">Register</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="name-inputs">
              <input
                type="text"
                placeholder="Username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="password-input">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="password-toggle">👁️</span>
            </div>
            <label className="terms-checkbox">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <button type="submit" className="create-button">
              Login to account
            </button>
            {loginStatus === "success" && (
              <div className="login-status success">{loginMessage}</div>
            )}
            {loginStatus === "failure" && (
              <div className="login-status failure">{loginMessage}</div>
            )}
          </form>
          <div className="or-register">Or Continue with</div>
          <div className="social-buttons">
            <button className="google-button">Google</button>
            <button className="apple-button">Apple</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
