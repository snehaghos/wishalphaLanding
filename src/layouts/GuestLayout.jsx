import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'

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