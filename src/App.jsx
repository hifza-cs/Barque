import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './component/Home';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Product from './component/Product';
import Shop from './component/Shop';
import Contact from "./component/Contact";
import Service from "./component/Service";
import About from "./component/About";
import MyNavbar from "./component/MyNavbar";
import Footer from "./component/Footer";
import News from './component/News';
import ExchangeForm from './component/ExchangeForm';

const App = () => {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/exchange-form" element={<ExchangeForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
