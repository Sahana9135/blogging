import React from 'react';
import './Login.css';

function Login() {
  // const username = document.getElementById('username').value.trim();
  // const password = document.getElementById('password').value.trim();
  // const usernameError = document.getElementById('usernameError');
  // const passwordError = document.getElementById('passwordError');

  // // Reset error messages
  // usernameError.textContent = '';
  // passwordError.textContent = '';
  // usernameError.style.display = 'none';
  // passwordError.style.display = 'none';

  // let isValid = true;

  // // Username validation
  // if (username === '') {
  //   usernameError.textContent = 'Username is required.';
  //   usernameError.style.display = 'block';
  //   isValid = false;
  // }

  // // Password validation
  // if (password === '') {
  //   passwordError.textContent = 'Password is required.';
  //   passwordError.style.display = 'block';
  //   isValid = false;
  // } else if (password.length < 6) {
  //   passwordError.textContent = 'Password must be at least 6 characters long.';
  //   passwordError.style.display = 'block';
  //   isValid = false;
  // }

  // return isValid;
  return (
    <>
      {/* login form */}
      <section id="login-section" class="login-section">
        <div class="login-container">
          <h2>Login to Your Account</h2>
          <p>Welcome back! Please enter your credentials to access your account.</p>

          {/* Login Form  */}
          <form id="loginForm" >
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" required />
              <small class="error-message" id="usernameError"></small>
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
              <small class="error-message" id="passwordError"></small>
            </div>

            <button type="submit" class="login-button">Login</button>

            <div class="form-footer">
              <p>Don't have an account? <a href="register.html">Register here</a></p>
              <p><a href="#">Forgot Password?</a></p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login;