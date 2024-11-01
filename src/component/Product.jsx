import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        // Stitched products
        {
            image: "https://baroque.pk/cdn/shop/files/56_63d6c2ce-c16b-4893-bbb6-7edf548c3a24.jpg?v=1724068816&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 7000,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/Shop_The_Look84.jpg?v=1730274834&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 7000,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/19_55df1a53-63e6-4d84-9a90-d2b1fb6b2755.jpg?v=1729854267&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 7000,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/05_61c7c53f-dc3e-4fb3-8f2a-44f7cccdb90c.jpg?v=1727270694&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 7000,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/20_1fe9d83d-ae53-4b77-b78c-ed9c4c056b0a.jpg?v=1728046833&width=600",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 7000,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/56_63d6c2ce-c16b-4893-bbb6-7edf548c3a24.jpg?v=1724068816&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 7000,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/56_63d6c2ce-c16b-4893-bbb6-7edf548c3a24.jpg?v=1724068816&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 7000,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/135_5a390530-a1a5-4a49-ab55-2c82b0d79b7a.jpg?v=1724493924&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 7000,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/55_10736858-aa30-4f70-b1e1-c499b9379b08.jpg?v=1726904703&width=500",
            title: "Unstitched Collection B",
            category: "Unstitched",
            price: 4300,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/126_e66d99c0-df87-4c02-85ea-38918eff05f8.jpg?v=1724493875&width=500",
            title: "Unstitched Collection B",
            category: "Unstitched",
            price: 4300,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/47_18.jpg?v=1693402740&width=500",
            title: "Unstitched Collection B",
            category: "Unstitched",
            price: 4300,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/95_5cf61249-b425-4784-9840-5e1c13058fba.jpg?v=1727772400&width=500",
            title: "Unstitched Collection B",
            category: "Unstitched",
            price: 4300,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/95_5cf61249-b425-4784-9840-5e1c13058fba.jpg?v=1727772400&width=500",
            title: "Stitched Collection B",
            category: "Stitched",
            price: 7500,
        },
        // Unstitched products
        
      
        {
            image: "https://baroque.pk/cdn/shop/files/78_18f2d4d1-5d28-438a-8313-030a67c0a020.jpg?v=1694854014&width=500",
            title: "Unstitched Collection B",
            category: "Unstitched",
            price: 4300,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/68.jpg?v=1632894665&width=500",
            title: "Unstitched Collection B",
            category: "Unstitched",
            price: 4300,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/50_14.jpg?v=1693402740&width=500",
            title: "Unstitched Collection B",
            category: "Unstitched",
            price: 4300,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/02_Banner201.jpg?v=1729245108&width=500",
            title: "Unstitched Collection B",
            category: "Unstitched",
            price: 4300,
        },
        

        {   image:"https://baroque.pk/cdn/shop/files/50_2a39ef59-ca40-47f1-8041-c6bde0b52427.jpg?v=1727772253&width=500",
            title: "Unstitched Collection B",
            category: "Unstitched",
            price: 4300,
        },
        // Ready to Wear products
        {
            image: "https://baroque.pk/cdn/shop/products/c3_1.jpg?v=1581409907&width=500",
            title: "Ready to Wear Collection A",
            category: "Ready to Wear",
            price: 5000,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/1Q0A1764.jpg?v=1570388246&width=500",
            title: "Ready to Wear Collection A",
            category: "Ready to Wear",
            price: 5000,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/17.jpg?v=1692857558&width=500",
            title: "Ready to Wear Collection A",
            category: "Ready to Wear",
            price: 5000,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/ST4_1fbcf726-55e9-439e-bba1-c05f00177007.jpg?v=1687599557&width=500",
            title: "Ready to Wear Collection A",
            category: "Ready to Wear",
            price: 5000,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/57_fd253598-1ab5-4938-9888-b602f874c65f.jpg?v=1677322864&width=500",
            title: "Ready to Wear Collection A",
            category: "Ready to Wear",
            price: 5000,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/86_77c95ada-8275-4c99-a13e-c7a225323649.jpg?v=1669115405&width=500",
            title: "Ready to Wear Collection B",
            category: "Ready to Wear",
            price: 6000,
        }
    ];

    const stitchedProducts = products.filter(product => product.category === "Stitched");
    const unstitchedProducts = products.filter(product => product.category === "Unstitched");
    const readyToWearProducts = products.filter(product => product.category === "Ready to Wear");

    const handleProductSelection = (product) => {
        setSelectedProduct(product);
    };

    const handleAddToCart = () => {
        if (selectedProduct) {
            navigate('/contact', { state: { selectedProduct } });
        } else {
            alert("Please select a product first.");
        }
    };

    const renderProductSection = (sectionTitle, products) => (
        <div className="product-section container">
            <h3 className="section-title text-center my-4">{sectionTitle}</h3>
            <div className="row justify-content-center">
                {products.map((product, index) => (
                    <div className="col-md-4 text-center mb-4" key={index}>
                        <img 
                            src={product.image} 
                            className={`img-thumbnail product-thumbnail ${selectedProduct === product ? 'selected' : ''}`} 
                            alt={product.title}
                            onClick={() => handleProductSelection(product)}
                        />
                        <h5 className="mt-2">{product.title}</h5>
                        <p className="price">PKR {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="product-container container my-5">
            <h2 className="text-center mb-4">Product Details</h2>

            {renderProductSection("Stitched Collection", stitchedProducts)}
            {renderProductSection("Unstitched Collection", unstitchedProducts)}
            {renderProductSection("Ready to Wear Collection", readyToWearProducts)}

            {selectedProduct && (
                <div className="selected-product-details mt-5">
                    <h3>{selectedProduct.title}</h3>
                    <p>Category: {selectedProduct.category}</p>
                    <p>Price: PKR {selectedProduct.price}</p>
                    <p className="description">
                        Discover elegance with our embroidered shawls. Crafted with exquisite details, each piece 
                        reflects a unique design perfect for any occasion. Complete your wardrobe with a blend of
                        tradition and style.
                    </p>
                    <button 
                        className="btn btn-custom mt-3" 
                        onClick={handleAddToCart} 
                    >
                        Add to Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default Product;
