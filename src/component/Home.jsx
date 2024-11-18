import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/styles.css';
import Look from './Look';
import Video from './Video';
import News from './News';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Carousel (Slider) */}
            <div id="carouselExample" className="carousel slide mt-5" data-ride="carousel">
                <div className="carousel-inner">
                    {/* First carousel item */}
                    <div className="carousel-item active">
                        <img src="https://baroque.pk/cdn/shop/files/MAin_BAnner56_d4a8f4af-47a7-4b29-bada-317f88ab8956.jpg?v=1731491936&width=1400" className="d-block w-100" alt="Welcome to Our Website" />
                        <div className="carousel-caption d-flex justify-content-center align-items-center">
                            <div className="text-center">
                                <h1 className="mb-4">Welcome to Our Website</h1>
                            </div>
                        </div>
                    </div>
                    {/* Second carousel item */}
                    <div className="carousel-item">
                        <img src="https://baroque.pk/cdn/shop/files/MAin_BAnner80.jpg?v=1730272964&width=1400" className="d-block w-100" alt="Explore Our Collection" />
                        <div className="carousel-caption d-flex justify-content-center align-items-center">
                            <div className="text-center">
                                <h1 className="mb-4">Explore Our Collection</h1>
                            </div>
                        </div>
                    </div>
                    {/* Third carousel item */}
                    <div className="carousel-item">
                        <img src="https://baroque.pk/cdn/shop/files/MAin_BAnner80.jpg?v=1730272964&width=1400" className="d-block w-100" alt="Discover the Latest Trends" />
                        <div className="carousel-caption d-flex justify-content-center align-items-center">
                            <div className="text-center">
                                <h1 className="mb-4">Discover the Latest Trends</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Carousel controls */}
                <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            {/* Section with Three Images Below Slider */}
            <div className="container my-5 text-center">
                <Link to="/shop" className="btn btn-custom btn-hover mb-4">Shop Now</Link>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img src="https://baroque.pk/cdn/shop/files/77_1fcfed75-11d4-4d54-8c92-512a8d9b0d73.jpg?v=1729322911&width=500" className="img-fluid" alt="Product 1" />
                        <h5 className="mt-2">SHAWLS</h5>
                        <Link to="/shop" className="btn btn-custom">Shop Now</Link>
                    </div>
                    <div className="col-md-4 mb-4">
                        <img src="https://baroque.pk/cdn/shop/files/170_e27f12c7-745b-48b3-b54c-564fde719c54.jpg?v=1729159108&width=500" className="img-fluid" alt="Product 2" />
                        <h5 className="mt-2">READY TO WEAR</h5>
                        <Link to="/shop" className="btn btn-custom">Shop Now</Link>
                    </div>
                    <div className="col-md-4 mb-4">
                        <img src="https://baroque.pk/cdn/shop/files/158_e8e46618-8afc-489a-9991-a762670c7f8d.jpg?v=1729159021&width=500" className="img-fluid" alt="Product 3" />
                        <h5 className="mt-2">CHANTELLE</h5>
                        <Link to="/shop" className="btn btn-custom">Shop Now</Link>
                    </div>
                </div>
            </div>

            {/* Render additional components */}
            <Look />
            <Video />
            <News />
        </>
    );
};

export default Home;
