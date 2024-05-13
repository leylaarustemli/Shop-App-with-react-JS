import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Layout/admin/Header/Header'
import Footer from '../../Layout/admin/Footer/Footer'
const AdminRoots = () => {
  return (
    <React.Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default AdminRoots
