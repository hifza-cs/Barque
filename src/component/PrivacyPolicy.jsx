import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to Barque. This privacy policy outlines how we collect, use, and protect your personal information when you use our website. We value your privacy and are committed to safeguarding your data.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <ul>
          <li>**Personal Information:** Such as name, email, and contact details provided at the time of account creation or order placement.</li>
          <li>**Payment Details:** Information needed to complete your purchases securely.</li>
          <li>**Browsing Data:** Including data about your interactions with our website to enhance your experience and improve our offerings.</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>
          Your information is used to process orders, provide customer support, notify you of updates, and enhance your shopping experience. Data security is a priority, and we ensure your information is protected at all times.
        </p>
      </section>

      <section>
        <h2>Data Protection and Security</h2>
        <p>
          We implement advanced security measures to protect your data from unauthorized access. We use encryption and secure servers to safeguard personal and payment information.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal data. To make requests regarding your data, contact us at <a href="mailto:privacy@barque.com">privacy@barque.com</a>.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          For questions regarding our privacy practices, please reach out at <a href="mailto:support@barque.com">support@barque.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
