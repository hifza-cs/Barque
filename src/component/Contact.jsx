import React, { useState } from 'react';
import './contact.css'; // Add your custom styles

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="form-label" htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />

        <label className="form-label" htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label className="form-label" htmlFor="paymentMethod">Payment Method</label>
        <select 
          id="paymentMethod" 
          value={paymentMethod} 
          onChange={(e) => setPaymentMethod(e.target.value)} 
          required
        >
          <option value="">Select Payment Method</option>
          <option value="EasyPaisa">EasyPaisa</option>
          <option value="JazzCash">JazzCash</option>
          <option value="BankTransfer">Bank Transfer</option>
          <option value="CashOnDelivery">Cash on Delivery</option>
        </select>

        {/* Show account number and bank name fields if Bank Transfer is selected */}
        {paymentMethod === 'BankTransfer' && (
          <div>
            <label className="form-label" htmlFor="bankName">Bank Name</label>
            <input 
              type="text" 
              id="bankName" 
              value={bankName} 
              onChange={(e) => setBankName(e.target.value)} 
              required 
            />

            <label className="form-label" htmlFor="accountNumber">Account Number</label>
            <input 
              type="text" 
              id="accountNumber" 
              value={accountNumber} 
              onChange={(e) => setAccountNumber(e.target.value)} 
              required
            />
          </div>
        )}

        {/* Show account number field for EasyPaisa or JazzCash */}
        {(paymentMethod === 'EasyPaisa' || paymentMethod === 'JazzCash') && (
          <div>
            <label className="form-label" htmlFor="accountNumber">Account Number</label>
            <input 
              type="text" 
              id="accountNumber" 
              value={accountNumber} 
              onChange={(e) => setAccountNumber(e.target.value)} 
              required
            />
          </div>
        )}

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Contact;
