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
import Team from '../component/Team/Team';
import NoPage from '../component/No-page';







const Router = () => {
  return (

    <Routes>
      <Route path='/' element={<Guestlayout />}>
        <Route index element={<Home />} />

        <Route path="/games" element={<Games />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/support-us" element={<SupportUs />} />

        <Route path="/games/:type" element={<GameTypePage />} />
        <Route path="/nopagefound" element={<NoPage />} />
        {/* <Route path='/inde' */}



      </Route>

      <Route path="/developer" element={<DeveloperLandingPage />} />


    </Routes>

  );
};

export default Router