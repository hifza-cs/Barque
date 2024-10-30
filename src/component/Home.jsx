import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/styles.css';
import { Link } from 'react-router-dom';
import Look from './Look';
import Video from './Video';
import News from './News';

const Home = () => {
    const carouselItem = [];
    console.log(carouselItem);
    return (
        <>
            {/* Carousel (Slider) */}
            <div id="carouselExample" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {/* First carousel item */}
                    <div className="carousel-item active">
                        <img src="https://baroque.pk/cdn/shop/files/MAin_BAnner75.jpg?v=1729079446&width=1400" className="d-block w-100 img-hover" alt="Slider 1" />
                        <div className="carousel-caption d-flex justify-content-center align-items-center">
                            <div className="text-center">
                                <h1 className="mb-4">Welcome to Our Website</h1>
                                <Link to="/shop" className="btn btn-custom btn-hover">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    {/* Second carousel item */}
                    <div className="carousel-item">
                        <img src="https://baroque.pk/cdn/shop/files/MAin_BAnner72.jpg?v=1728035540&width=1400" className="d-block w-100 img-hover" alt="Slider 2" />
                        <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ height: '100%', color: 'white' }}>
                            <div className="text-center">
                                <h1 className="mb-4">Explore Our Collection</h1>
                                <Link to="/shop" className="btn btn-custom btn-hover">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    {/* Third carousel item */}
                    <div className="carousel-item">
                        <img src="https://baroque.pk/cdn/shop/files/MAin_BAnner74.jpg?v=1728647481&width=1400" className="d-block w-100 img-hover" alt="Slider 3" />
                        <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ height: '50%', color: 'white' }}>
                            <div className="text-center">
                                <h1 className="mb-4">Discover the Latest Trends</h1>
                                <Link to="/shop" className="btn btn-custom btn-hover">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
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
            <div className="container my-5">
                <div className="row text-center">
                    {/* First Image - Shawls */}
                    <div className="col-md-4">
                        <img src="https://baroque.pk/cdn/shop/files/02_Banner197.jpg?v=1727851604&width=500" className="img-fluid img-hover" alt="Shawls" />
                        <h3 className="mt-3">SHAWLS</h3>
                        <Link to="/shop" className="btn btn-custom btn-hover mt-2">Shop Now</Link>
                    </div>
                    {/* Second Image - Ready to Wear */}
                    <div className="col-md-4">
                        <img src="https://baroque.pk/cdn/shop/files/02_Banner200.jpg?v=1728547051&width=500" className="img-fluid img-hover" alt="Ready to Wear" />
                        <h3 className="mt-3">READY TO WEAR</h3>
                        <Link to="/shop" className="btn btn-custom btn-hover mt-2">Shop Now</Link>
                    </div>
                    {/* Third Image - Chantelle */}
                    <div className="col-md-4">
                        <img src="https://baroque.pk/cdn/shop/files/02_Banner53_35833d7b-ee1b-4236-b829-68608424fe66.jpg?v=1728045171&width=500" className="img-fluid img-hover" alt="Chantelle" />
                        <h3 className="mt-3">CHANTELLE</h3>
                        <Link to="/shop" className="btn btn-custom btn-hover mt-2">Shop Now</Link>
                    </div>
                </div>
            </div>

            {/* Render the Look component */}
            <Look />
            {/* Render the Video component */}
            <Video />
            {/* Render the News component */}
            <News />
        </>
    );
};

export default Home;
