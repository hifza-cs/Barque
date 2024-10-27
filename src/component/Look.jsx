import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/look.css';
import { Link } from 'react-router-dom';

const Look = () => {
    const [smallImage, setSmallImage] = useState("https://baroque.pk/cdn/shop/files/31_151832cd-8414-4511-8809-36948db264ac.jpg?v=1727772462&width=500");

    // Function to handle image change on click
    const handleImageChange = (newImage) => {
        setSmallImage(newImage);
    };

    return (
        <div className="container my-5 look-container">
            <h2 className="text-center mb-4">SHOP THE LOOK</h2>
            <div className="row">
                {/* Left Image */}
                <div className="col-md-6">
                    <img 
                        src="https://baroque.pk/cdn/shop/files/Shop_The_Look82.jpg?v=1728049596&width=400" 
                        className="img-fluid main-image" 
                        alt="Embroidered Velvet Shawl" 
                    />
                    {/* View Product Button Below the Image */}
                    <div className="mt-3 text-center">
                        <Link to="/product" className="btn btn-custom btn-hover">
                            VIEW PRODUCT
                        </Link>
                    </div>
                    {/* Product Details Paragraph */}
                    <div className="mt-2 text-center product-details">
                        <p>Elevate your style with our Embroidered Velvet Shawl. Perfect for special
                             occasions or a cozy night out. Some of the qualities most frequently associated with 
                             the Baroque are grandeur, sensuous richness, drama, dynamism, movement, tension, emotional exuberance, 
                             and a tendency 
                             to blur distinctions between the various arts.
                             Baroque emphasizes dramatic, exaggerated motion and clear, easily interpreted, detail.</p>
                    </div>
                </div>
                {/* Right Product Details */}
                <div className="col-md-6">
                    <h3>Embroidered Velvet Shawl VS-54</h3>
                    <p className="price">PKR 19,990.00</p>
                    {/* Small Image with Frame and Hover Effect */}
                    <div className="small-image-container mt-3">
                        <img 
                            src={smallImage} 
                            className="img-fluid small-image" 
                            alt="Embroidered Velvet Shawl Small" 
                        />
                    </div>
                    {/* Thumbnails for Small Image */}
                    <div className="thumbnail-container mt-3">
                        <img 
                            src="https://baroque.pk/cdn/shop/files/Shop_The_Look82.jpg?v=1728049596&width=400" 
                            className="thumbnail" 
                            alt="Thumbnail 1" 
                            onClick={() => handleImageChange("https://baroque.pk/cdn/shop/files/Shop_The_Look82.jpg?v=1728049596&width=500")}
                        />
                        <img 
                            src="https://baroque.pk/cdn/shop/files/31_151832cd-8414-4511-8809-36948db264ac.jpg?v=1727772462&width=500" 
                            className="thumbnail" 
                            alt="Thumbnail 2" 
                            onClick={() => handleImageChange("https://baroque.pk/cdn/shop/files/31_151832cd-8414-4511-8809-36948db264ac.jpg?v=1727772462&width=500")}
                        />
                        {/* Add More Thumbnails as Needed */}
                        <img 
                            src="https://baroque.pk/cdn/shop/files/02_Banner201.jpg?v=1729245108&width=500" 
                            className="thumbnail" 
                            alt="Thumbnail 3" 
                            onClick={() => handleImageChange("https://baroque.pk/cdn/shop/files/02_Banner60_558178e3-f81f-4962-b6db-e37fcccfb484.jpg?v=1729511806&width=500")}
                        />
                        <img 
                            src="https://baroque.pk/cdn/shop/files/02_Banner202_ca5b3df3-88ca-4197-961f-a8bbbad12333.jpg?v=1729245091&width=500" 
                            className="thumbnail" 
                            alt="Thumbnail 4" 
                            onClick={() => handleImageChange("https://baroque.pk/cdn/shop/files/35_df6095a7-5fa7-4f53-81d3-eceffa6a7ddc.jpg?v=1726904816&width=600")}
                        />
                        <img 
                            src="https://baroque.pk/cdn/shop/files/02_Banner201.jpg?v=1729245108&width=500" 
                            className="thumbnail" 
                            alt="Thumbnail 3" 
                            onClick={() => handleImageChange("https://baroque.pk/cdn/shop/files/02_Banner60_558178e3-f81f-4962-b6db-e37fcccfb484.jpg?v=1729511806&width=500")}
                        />
                        <img 
                            src="https://baroque.pk/cdn/shop/files/02_Banner202_ca5b3df3-88ca-4197-961f-a8bbbad12333.jpg?v=1729245091&width=500" 
                            className="thumbnail" 
                            alt="Thumbnail 4" 
                            onClick={() => handleImageChange("https://baroque.pk/cdn/shop/files/35_df6095a7-5fa7-4f53-81d3-eceffa6a7ddc.jpg?v=1726904816&width=600")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Look;
