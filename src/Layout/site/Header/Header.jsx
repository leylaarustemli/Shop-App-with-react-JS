import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
<div className="header1">
<div className='container'>
      <div className="left-head1">
        <span>+12312-3-1209</span>
        <span>SUPPORT@COLORLIB.COM</span>
      </div>
      <div className="right-head1">
        <a href="#">Login</a>
      </div>
      </div>
    </div>
    <div className="header2">
      <div className="container">
        <div className="left-head2">
      <img src="  https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
        </div>
        <div className="right-head2">
          <ul>
           <li> <Link to="/">Home </Link></li>
            <li>Category</li>
            <li>Men</li>
            <li>Women</li>
            <li>Latest</li>
            <li>Pages<i class="fa-solid fa-chevron-up"></i></li>
            
          </ul>
        </div>
      </div>
    </div>
    </>
    
    
    
  )
}

export default Header
