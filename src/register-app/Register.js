// Login.js
import React, { useState } from "react";
import "./Register.css";
import { Link } from "@material-ui/core";
import { useHistory } from "react-router-dom"

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(null); // null, 'success', 'failure'
  const [registerMessage, setRegisterMessage] = useState("");
  const history = useHistory()
  let baseURL = process.env.REACT_APP_BASEURL;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegisterStatus(null); // Reset status before new attempt
    setRegisterMessage("");

    try {
      const response = await fetch(`${baseURL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Registration successful!");

      let data = await response.json();
      // localStorage.setItem("authToken", data.token);
      setRegisterStatus("success");
      setRegisterMessage("Registration successful!");
      setTimeout(() => history.push("/"), 4000);
      // onLoginSuccess();
    } catch (error) {
      console.error("Login failed:", error);
      setRegisterStatus("failure");
      setRegisterMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="logo">Welcome</div>
        <a href="#" className="back-link">
          {/* Back to website → */}
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
          <h2>Register</h2>
          <p className="login-prompt" style={{cursor: "pointer"}}>
            Already have an account ? {/* <a href="#">Log in</a> */}
            <a href="/login">Login</a>
            {/* <Link to="/login">Login</Link> */}
          </p>
          <form onSubmit={handleSubmit}>
            {/* <div className="name-inputs">
              <input
                type="text"
                placeholder="Fletcher"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div> */}
            <div className="name-inputs">
              <input
                type="user"
                placeholder="Username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="email-inputs">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
              />
              I agree to the Terms & Conditions
            </label>
            <button type="submit" className="create-button">
              Create account
            </button>
            {registerStatus === "success" && (
              <div className="login-status success">{registerMessage}</div>
            )}
            {registerStatus === "failure" && (
              <div className="login-status failure">{registerMessage}</div>
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

export default Register;
