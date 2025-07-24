import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-left">
        <h1 className="brand-title">Daily Cents</h1>
        <p className="brand-subtitle">Track. Save. Grow.</p>
      </div>
      <div className="signin-right">
        <div className="signin-card">
          <h2>Welcome Back</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" required />
            </div>
            <div className="form-extra">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn-signin">Sign In</button>
          </form>
          <p className="signup-link">
            Don’t have an account? <Link to="/auth/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
