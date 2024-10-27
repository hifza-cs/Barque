import React, { useState } from 'react';
import './ExchangeForm.css'; // Add this line to link the CSS file

const ExchangeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        orderNumber: '',
        reason: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to server)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="exchange-form-container">
            <h2 className="form-heading">Exchange Form</h2>
            <form className="exchange-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Order Number:</label>
                    <input
                        type="text"
                        name="orderNumber"
                        value={formData.orderNumber}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Reason for Exchange:</label>
                    <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="form-textarea"
                        required
                    />
                </div>

                <button type="submit" className="form-submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default ExchangeForm;
