import React from 'react';
import '../style/add.css';

const Add = () => {
  return (
    <div className="add-container">
      <h1 className="add-title">Discover the World of Baroque</h1>

      {/* Image Section with Boxes Below */}
      <div className="image-section">
        {/* Image 1 */}
        <div className="image-box">
          <img 
            src="https://baroque.pk/cdn/shop/products/29_9e9c4ade-eb99-4061-bfbf-d974c1ed4ec5.jpg?v=1681976936&width=500" 
            alt="Elegant Baroque Collection 1"
            className="box-image"
          />
          <div className="box-description">
            <h2>Elegant Collection</h2>
            <p>
              This collection showcases elegance with high-quality fabrics and intricate embroidery, making each piece a work of art.
            </p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="image-box">
          <img 
            src="https://baroque.pk/cdn/shop/files/126_6bb4933d-efea-4e66-9f6e-6d0eba0f1813.jpg?v=1726303745&width=500" 
            alt="Elegant Baroque Collection 2"
            className="box-image"
          />
          <div className="box-description">
            <h2>Exclusive Range</h2>
            <p>
              Our exclusive range fuses tradition with contemporary designs, perfect for those seeking a refined aesthetic.
            </p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="image-box">
          <img 
            src="https://baroque.pk/cdn/shop/files/133_b632a8ae-fcd2-4613-9771-c2aa4ae22899.jpg?v=1730282014&width=500" 
            alt="Elegant Baroque Collection 3"
            className="box-image"
          />
          <div className="box-description">
            <h2>Timeless Craftsmanship</h2>
            <p>
              Discover timeless craftsmanship and luxurious materials, curated to create memorable fashion statements.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="add-content">
        <p>
          Baroque is a symbol of elegance and craftsmanship in Pakistan’s fashion industry. Our collections fuse traditional 
          designs with contemporary sophistication, creating a style that’s uniquely Baroque.
        </p>

        <h2 className="section-title">Our Vision</h2>
        <p>
          We aspire to empower individuals with fashion that embraces cultural heritage and modern flair. Using luxurious materials 
          like silk, chiffon, and velvet, each piece embodies the essence of elegance.
        </p>

        <h2 className="section-title">Why Choose Baroque?</h2>
        <ul className="benefits-list">
          <li>High-quality, luxurious fabrics</li>
          <li>Handcrafted embroidery with attention to detail</li>
          <li>Seasonal collections with modern trends</li>
          <li>Exceptional customer service and seamless shopping</li>
        </ul>

        <h2 className="section-title">Exclusive Services</h2>
        <p>
          Baroque delivers a premium shopping experience with personalized stitching services, on-time delivery, and hassle-free 
          returns. Enjoy loyalty discounts, exclusive promotions, and early access to collections, reflecting our dedication to 
          customer satisfaction.
        </p>
      </div>
    </div>
  );
};

export default Add;
