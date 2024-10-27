import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
// import { useHistory } from 'react-router-dom';

const Product = () => {
    // const history = useHistory();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            image: "https://baroque.pk/cdn/shop/files/56_63d6c2ce-c16b-4893-bbb6-7edf548c3a24.jpg?v=1724068816&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 7000,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/02_Banner60_558178e3-f81f-4962-b6db-e37fcccfb484.jpg?v=1729511806&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 4500,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/02_Banner201.jpg?v=1729245108&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 5500,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/52_21d554c2-8ef6-4627-9847-3a0ce772f43c.jpg?v=1705564218&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 4500,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/37_2985eb17-832d-4738-8e32-971c51040675.jpg?v=1705664484&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 4490,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 8000,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/52_21d554c2-8ef6-4627-9847-3a0ce772f43c.jpg?v=1705564218&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 5900,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/138_db4b4406-862e-4566-9fa0-7a9c57b0a418.jpg?v=1705564507&width=600",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 4500,
        },
        {
            image: "https://baroque.pk/cdn/shop/files/144_68031997-1167-4d4a-bbc2-05020234b535.jpg?v=1705736503&width=600",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 4500,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/35_db2598ab-2487-4e65-83e4-ce1e70e744b2.jpg?v=1677314412&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 4500,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/57_fd253598-1ab5-4938-9888-b602f874c65f.jpg?v=1677322864&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 4500,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/57_1.jpg?v=1687599432&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 4500,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/38_5.jpg?v=1669115652&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 4500,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/1Q0A1764.jpg?v=1570388246&width=500",
            title: "Stitched Collection A",
            category: "Stitched",
            price: 4500,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/C5.jpg?v=1645270201&width=500",
            title: "Unstitched Collection B",
            category: "Unstitched",
            price: 4800,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/ST4_1fbcf726-55e9-439e-bba1-c05f00177007.jpg?v=1687599557&width=500",
            title: "Ready to Wear Collection C",
            category: "Ready to Wear",
            price: 5000,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/86_77c95ada-8275-4c99-a13e-c7a225323649.jpg?v=1669115405&width=500",
            title: "Stitched Collection D",
            category: "Stitched",
            price: 6000,
        },
        {
            image: "https://baroque.pk/cdn/shop/products/43_3a884a2e-ab3a-4a89-b710-bec59cae26bf.jpg?v=1677313250&width=500",
            title: "Unstitched Collection E",
            category: "Unstitched",
            price: 4300,
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
            // history.push({
            //     pathname: '/contact',
            //     state: { selectedProduct }
            // });
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
