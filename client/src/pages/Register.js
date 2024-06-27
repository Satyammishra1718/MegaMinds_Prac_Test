import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import "../assets/styles/Register.css";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { username, password });
      if (response.data.token) {
        const existingTokens = JSON.parse(localStorage.getItem('UserTokens')) || {};
        existingTokens[username] = response.data.token;
  
        localStorage.setItem('UserTokens', JSON.stringify(existingTokens));
  
        navigate('/login');
      }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            setErrorMessage('User already registered. Please try again');
          } else {
            setErrorMessage('Registration failed. Please try again.');
          }
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
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
        <button type="submit">Register</button>
        <div className="Register-link">
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>} 
    </div>
  );
};

export default Register;
