import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Landing/components/Navbar'
import Footer from '../Landing/components/Footer'

const Guestlayout = () => {
  return (
    <>
    <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Guestlayout