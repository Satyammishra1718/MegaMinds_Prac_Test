import React, { useState } from 'react';
import '../assets/styles/Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      if (response.status === 200) {
        navigate("/")
        localStorage.setItem('currentUsername', username);
      }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            setErrorMessage('Username or Password is incorrect');
          } else {
            setErrorMessage('Login failed. Please try again.');
          }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <div className="Login-link">
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>} 
    </div>
  );
};

export default Login;
