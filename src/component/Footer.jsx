// Footer.jsx
import React from 'react';

const Footer = () => {

  
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row"> 
          <div className="col-md-4 mb-3">
            <h5>ABOUT</h5>
            <ul className="list-unstyled">
              <li><a href="/who-we-are" className="text-white">Who We Are</a></li>
              <li><a href="/our-responsibility" className="text-white">Our Responsibility</a></li>
              <li><a href="/services-we-provide" className="text-white">Services We Provide</a></li>
              <li><a href="/careers" className="text-white">Careers</a></li>
              <li><a href="/legal" className="text-white">Legal</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>CUSTOMER SERVICE</h5>
            <ul className="list-unstyled">
              <li><a href="/contact-us" className="text-white">Contact Us</a></li>
              <li><a href="/dispatch-timeline" className="text-white">Dispatch Timeline</a></li>
              <li><a href="mailto:info@baroque.pk" className="text-white">Email: info@baroque.pk</a></li>
              <li><a href="tel:+923257001111" className="text-white">Call: +92 325 700 1111</a></li>
              <li><a href="https://wa.me/923257001111" className="text-white">WhatsApp: +92 325 700 1111</a></li>
            </ul>
          </div>

          {/* Policies Column */}
          <div className="col-md-4 mb-3">
            <h5>POLICIES</h5>
            <ul className="list-unstyled">
              <li><a href="/privacy-policy" className="text-white">Privacy Policy</a></li>
              <li><a href="/refund-policy" className="text-white">Refund Policy</a></li>
              <li><a href="/shipping-policy" className="text-white">Shipping Policy</a></li>
              <li><a href="/terms-of-service" className="text-white">Terms of Service</a></li>
              <li><a href="/exchange-information" className="text-white">Exchange Information</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <p>&copy; 2024 Your Website Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
