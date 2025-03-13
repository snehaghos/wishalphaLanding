import { Route, Routes } from "react-router-dom";
import Games from "../components/Games/Games";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Blog from "../components/Blog/Blog";
import SupportUs from "../components/SupportUs/SupportUs";
import Home from "../pages/Home/Home";
import GuestLayout from "../layouts/GuestLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<SupportUs />} />
      </Route>
    </Routes>
  );
};

export default Router;
