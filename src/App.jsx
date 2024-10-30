// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Mynavbar from "./component/MyNavbar";
import Service from "./component/Service";
import  Contact from "./component/Contact";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import About from "./component/About";
import Shop from "./component/Shop";
import Footer from "./component/Footer";
import ExchangeForm from "./component/ExchangeForm";
import PrivacyPolicy from "./component/PrivacyPolicy";



const App = () => {
  return (
    
    <>
      <Mynavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/service"element={<Service/>}/>
         <Route path="/Contact"element={<Contact/>}/>
         <Route path="/SignIn"element={<SignIn/>}/>
         <Route path="/SignUp"element={<SignUp/>}/>
        <Route path="/exchange-form"element={<ExchangeForm/>}/>
        <Route path="Privacy-Policy"element={<PrivacyPolicy/>}/>
    

      </Routes>
      <Footer/>
    </>
  
  );
};

export default App;
