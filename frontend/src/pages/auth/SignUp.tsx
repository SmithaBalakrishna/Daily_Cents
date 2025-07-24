import React from "react";

const SignUp = () => {
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter email" />

        <label>Password:</label>
        <input type="password" placeholder="Enter password" />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
