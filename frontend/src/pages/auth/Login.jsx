// src/pages/Login.jsx
import React from 'react';
import './Login.css'; // If you're using a separate CSS file

const Login = () => {
  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter password" required />
        </div>
        <div className="form-actions">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button className="btn" type="submit">Sign In</button>
      </form>
      <div className="secondary">
        <p>Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
