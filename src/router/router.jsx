import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Guestlayout from '../layouts/GuestLayout';
import Home from '../Landing/Home';
import Games from '../Landing/components/Games';
import AboutUs from '../Landing/components/AboutUs';
import ContactUs from '../Landing/components/ContactUs';
import Blog from '../Landing/components/Blog';
import SupportUs from '../Landing/components/SupportUs';
import Login from '../Auth/Components/Login';
import Register from '../Auth/Components/Register';






const Router = () => {
  return (

    <Routes>
      <Route path='/' element={<Guestlayout />}>
      <Route index element={<Home />} />
   
      <Route path="/games" element={<Games/>} />

      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blog" element={<Blog />} />

      <Route path="/support" element={<SupportUs />} />
   
  

      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      
    </Routes>

  );
};

export default Router