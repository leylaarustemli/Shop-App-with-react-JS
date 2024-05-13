import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Layout/site/Header/Header'
import Footer from '../../Layout/site/Footer/Footer'
const SiteRoot = () => {
  return (
    <React.Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default SiteRoot
