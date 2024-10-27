import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/styles.css';
import { Link } from 'react-router-dom';

const productsData = [
    {
        id: 1,
        title: 'SHAWL',
        price: 4500,
        image: 'https://baroque.pk/cdn/shop/files/56_63d6c2ce-c16b-4893-bbb6-7edf548c3a24.jpg?v=1724068816&width=500',
        category: 'Shawls',
        size: 'Medium',
    },
    {
        id: 2,
        title: 'READY TO WEAR',
        price: 6000,
        image: 'https://baroque.pk/cdn/shop/files/67_7c2084cb-a1f1-4533-8211-f4d68e66b60b.jpg?v=1728045363&width=500',
        category: 'Ready to Wear',
        size: 'Large',
    },
    {
        id: 3,
        title: 'CHANTELLE',
        price: 7500,
        image: 'https://baroque.pk/cdn/shop/files/23_17aa3a5d-b88f-4965-8151-ff5505f93302.jpg?v=1728046879&width=500',
        category: 'Ready to Wear',
        size: 'Small',
    },
    {
        id: 3,
        title: 'CHANTELLE',
        price: 7500,
        image: 'https://baroque.pk/cdn/shop/files/170_e27f12c7-745b-48b3-b54c-564fde719c54.jpg?v=1729159108&width=500',
        category: 'Ready to Wear',
        size: 'Small',
    },
    {
        id: 3,
        title: 'CHANTELLE',
        price: 7500,
        image: 'https://baroque.pk/cdn/shop/files/31_95cde9cd-d5e1-4d18-b279-47b0754adf8a.jpg?v=1729322852&width=500',
        category: 'Ready to Wear',
        size: 'Small',
    },
    {
        id: 3,
        title: 'CHANTELLE',
        price: 7500,
        image: 'https://baroque.pk/cdn/shop/files/42_92097e6a-6907-49ca-b04d-743405794d8d.jpg?v=1726904816&width=500',
        category: 'Ready to Wear',
        size: 'Small',
    },
    {
        id: 3,
        title: 'CHANTELLE',
        price: 7500,
        image: 'https://baroque.pk/cdn/shop/files/28_836e7926-e2e5-44ff-b793-94dc920be7e4.jpg?v=1727270747&width=500',
        category: 'Ready to Wear',
        size: 'Small',
    },
    {
        id: 3,
        title: 'CHANTELLE',
        price: 7500,
        image: 'https://baroque.pk/cdn/shop/files/135_5a390530-a1a5-4a49-ab55-2c82b0d79b7a.jpg?v=1724493924&width=500',
        category: 'Ready to Wear',
        size: 'Small',
    },
    {
        id: 3,
        title: 'CHANTELLE',
        price: 7500,
        image: 'https://baroque.pk/cdn/shop/files/104_d6b627e8-207a-4c77-9bfd-aa1de7a21321.jpg?v=1727095404&width=500',
        category: 'Ready to Wear',
        size: 'Small',
    },
    {
        id: 3,
        title: 'CHANTELLE',
        price: 7500,
        image: 'https://baroque.pk/cdn/shop/files/77_1fcfed75-11d4-4d54-8c92-512a8d9b0d73.jpg?v=1729322911&width=500',
        category: 'Ready to Wear',
        size: 'Small',
    },
];

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [selectedSize, setSelectedSize] = useState([]);

    // Handle category filter change
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Handle price range change
    const handlePriceChange = (minValue, maxValue) => {
        setPriceRange([minValue, maxValue]);
    };

    // Handle size filter change
    const handleSizeChange = (size) => {
        setSelectedSize((prev) =>
            prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
        );
    };

    // Filter products based on selected filters
    const filteredProducts = productsData.filter(product => {
        const withinPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSize = selectedSize.length === 0 || selectedSize.includes(product.size);
        return withinPriceRange && matchesCategory && matchesSize;
    });

    // Add product to cart
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="container mt-5 shop-page">
            <h2 className="text-center mb-4">Shop Our Collection</h2>
            <div className="row">
                {/* Sidebar for Filters */}
                <div className="col-md-3">
                    <h4>Filters</h4>
                    <h5>Categories</h5>
                    <select className="form-select mb-3" onChange={handleCategoryChange}>
                        <option value="All">All</option>
                        <option value="Shawls">Shawls</option>
                        <option value="Ready to Wear">Ready to Wear</option>
                    </select>

                    <h5>Price Range</h5>
                    <div className="mb-2">
                        <strong>Current Range: PKR {priceRange[0]} - PKR {priceRange[1]}</strong>
                    </div>
                    <input
                        type="range"
                        className="form-range"
                        min="0"
                        max="10000"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(+e.target.value, priceRange[1])}
                    />
                    <input
                        type="range"
                        className="form-range"
                        min="0"
                        max="10000"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(priceRange[0], +e.target.value)}
                    />

                    <h5>Size</h5>
                    <ul className="list-unstyled">
                        {['Small', 'Medium', 'Large'].map(size => (
                            <li key={size}>
                                <input
                                    type="checkbox"
                                    checked={selectedSize.includes(size)}
                                    onChange={() => handleSizeChange(size)}
                                /> {size}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Product Grid */}
                <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <select className="form-select w-25">
                            <option value="new-arrivals">New Arrivals</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                        </select>
                    </div>

                    {/* Product List */}
                    <div className="row">
                        {filteredProducts.map(product => (
                            <div className="col-md-6 mb-4" key={product.id}>
                                <div className="card">
                                    <img src={product.image} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">PKR {product.price}</p>
                                        <button
                                            className="btn btn-custom w-100"
                                            onClick={() => addToCart(product)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Cart Summary */}
                <div className="col-md-3 cart-summary-container">
                    <div className="cart-summary">
                        <h4>Order Summary</h4>
                        <ul className="list-group">
                            {cart.map((item, index) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{ width: '50px', height: '50px', marginRight: '10px' }}
                                    />
                                    <span>{item.title} - PKR {item.price}</span>
                                </li>
                            ))}
                        </ul>
                        {cart.length > 0 && (
                            <Link to="/contact" className="btn btn-primary mt-3 w-100">
                                Proceed to Order
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default Shop;