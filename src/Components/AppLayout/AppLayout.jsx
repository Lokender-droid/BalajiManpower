import React from 'react'
import NavBar from "./../HomePage/NavBar";
import { Outlet } from 'react-router-dom'
import FooterPage from "./../FooterPage/FooterPage";
import ScrollToTop from "../ScrollToTop";


const AppLayout = () => {
  return (
      <div className=''>
       <NavBar></NavBar>   
       <ScrollToTop /> 
       <Outlet/>
      <FooterPage></FooterPage>
    </div>
  )
}

export default AppLayout