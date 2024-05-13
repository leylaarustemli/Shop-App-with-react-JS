import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="header2">
          <div className="container">
            <div className="left-head2">
          <img src="  https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
            </div>
            <div className="right-head2">
              <ul>
               <li> <Link to="/admin/add">Add </Link></li>
               <li></li>
               
                
              </ul>
            </div>
          </div>
        </div>
    </>
    
  )
}

export default Header