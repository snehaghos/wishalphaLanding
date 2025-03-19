import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Games from '../component/Games/Games';
import Guestlayout from '../layouts/GuestLayout';
import AboutUs from '../component/AboutUs/AboutUs';
import ContactUs from '../component/ContactUs/ContactUs';
import Blog from '../component/Blog/Blog';
import SupportUs from '../component/SupportUs/SupportUs';
import GameTypePage from '../component/Games/GameTypePage';
import DeveloperLandingPage from '../Developer/DevLanding';







const Router = () => {
  return (

    <Routes>
      <Route path='/' element={<Guestlayout />}>
        <Route index element={<Home />} />

        <Route path="/games" element={<Games />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/support" element={<SupportUs />} />

        <Route path="/games/:type" element={<GameTypePage />} />



      </Route>

      <Route path="/developer" element={<DeveloperLandingPage />} />


    </Routes>

  );
};

export default Router