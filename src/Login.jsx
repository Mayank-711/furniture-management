import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    validateName(newName);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (validateName(name) && validatePassword(password)) {
      setIsSubmitting(true);
      // Call API or perform login logic here
      console.log("Login successful!");
    }
  };

  const validateName = (name) => {
    if (name.trim() === "") {
      setNameError("Please enter your name");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const validatePassword = (password) => {
    if (password.trim() === "") {
      setPasswordError("Please enter your password");
      return false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSignUpClick = () => {
    // Redirect to sign up page or perform sign up logic here
    console.log("Sign up link clicked!");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="form-control"
          />
          {nameError && <div className="error">{nameError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
          />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <button className="btn" onClick={handleLogin} disabled={isSubmitting}>
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={handleSignUpClick}>
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
