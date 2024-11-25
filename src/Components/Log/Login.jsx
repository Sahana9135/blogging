import React from 'react';
import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate('/');
  }

  // return isValid;
  return (
    <>
      {/* login form */}
      <section id="login-section" class="login-section">
        <div class="login-container"><br /><br />
          <h2>Login to Your Account</h2>
          <p>Welcome back! Please enter your credentials to access your account.</p>

          {/* Login Form  */}
          <form id="loginForm" onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your Email" required />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" required />
            </div>

            <button type="submit" class="login-button">Login</button>

            <div class="form-footer">
              <p>Don't have an account? <Link to="/signin">Register here</Link></p>
              <p><Link to="/signin">Forgot Password?</Link></p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login;