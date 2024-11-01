import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './Auth.css'; // Add your custom styles

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem(email);

    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.password === password) {
        localStorage.setItem('isAuthenticated', 'true');
        // history.push('/');
      } else {
        setError('Invalid password!');
      }
    } else {
      setError('User does not exist!');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Welcome Back</h2>
      <form onSubmit={handleSignIn} className="auth-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary w-100">Sign In</button>
      </form>
      <p className="auth-switch">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn;