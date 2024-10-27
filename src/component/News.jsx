import React, { useState } from 'react';
import './News.css'; // Ensure News.css exists and is styled properly
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const News = () => {
    const [email, setEmail] = useState(''); // Email store karne ke liye state
    const [isSubscribed, setIsSubscribed] = useState(false); // Subscription status

    const handleSubscribe = () => {
        if (email) {
            setIsSubscribed(true); // User ko subscribe karna
            setEmail(''); // Email input ko khali karna
            alert('Thank you for subscribing!'); // Success message
        } else {
            alert('Please enter a valid email'); // Agar email nahi diya hai
        }
    };

    return (
        <div className="news-section">
            <div className="newsletter-header">
                <h2>SUBSCRIBE FOR NEWSLETTER</h2>
                <div className="newsletter-input">
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email} // Email state ko yahan set karein
                        onChange={(e) => setEmail(e.target.value)} // Email ko update karein
                    />
                    <button onClick={handleSubscribe}>SUBSCRIBE</button> {/* Button ko click handler assign karein */}
                </div>
                {isSubscribed && <p>Thank you for subscribing!</p>} {/* Subscription status */}
            </div>
            <div className="features">
                <div className="feature">
                    <i className="icon priority"></i>
                    <h3>PRIORITY STITCHING</h3>
                    <p>Receive your stitched orders more quickly in a timeline of 2 weeks</p>
                </div>
                <div className="feature">
                    <i className="icon custom-size"></i>
                    <h3>CUSTOM SIZE</h3>
                    <p>Get your outfit tailored to perfection as per your desired measurements</p>
                </div>
                <div className="feature">
                    <i className="icon shipping"></i>
                    <h3>FREE SHIPPING</h3>
                    <p>We provide free shipping all across Pakistan on all of our orders</p>
                </div>
                <div className="feature">
                    <i className="icon exchange"></i>
                    <h3>ORDER EXCHANGE</h3>
                    <p>For a hassle-free exchange service, fill out the <Link to="/exchange-form">exchange form</Link></p>
                </div>
            </div>
        </div>
    );
};

export default News;
