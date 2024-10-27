import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './Auth.css'; // Add your custom styles

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [error, setError] = useState('');
  // const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Check if email already exists in localStorage
    if (localStorage.getItem(email)) {
      setError('User already exists!');
      return;
    }

    // Save the user credentials and delivery details in localStorage
    const userData = { email, password, city, area, deliveryAddress, deliveryTime };
    localStorage.setItem(email, JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true'); // Mark as authenticated
    // history.push('/'); // Redirect to home page
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Create Your Account</h2>
      <form onSubmit={handleSignUp} className="auth-form">
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
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <select 
            className="form-control" 
            id="city" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            required
          >
            <option value="">Select City</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Rawalpindi">Rawalpindi</option>
            <option value="Peshawar">Peshawar</option>
            <option value="Quetta">Quetta</option>
            <option value="Faisalabad">Faisalabad</option>
            <option value="Multan">Multan</option>
            <option value="Sialkot">Sialkot</option>
            {/* Add more cities as needed */}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="area" className="form-label">Area</label>
          <input 
            type="text" 
            className="form-control" 
            id="area" 
            value={area} 
            onChange={(e) => setArea(e.target.value)} 
            placeholder="e.g., Gulshan-e-Iqbal, DHA" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="deliveryAddress" className="form-label">Full Delivery Address</label>
          <input 
            type="text" 
            className="form-control" 
            id="deliveryAddress" 
            value={deliveryAddress} 
            onChange={(e) => setDeliveryAddress(e.target.value)} 
            placeholder="Street, House Number, Building, etc." 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="deliveryTime" className="form-label">Preferred Delivery Time</label>
          <select 
            className="form-control" 
            id="deliveryTime" 
            value={deliveryTime} 
            onChange={(e) => setDeliveryTime(e.target.value)} 
            required
          >
            <option value="">Select Time</option>
            <option value="9AM - 12PM">9AM - 12PM</option>
            <option value="12PM - 3PM">12PM - 3PM</option>
            <option value="3PM - 6PM">3PM - 6PM</option>
            <option value="6PM - 9PM">6PM - 9PM</option>
          </select>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
      <p className="auth-switch">
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
};

export default SignUp;
