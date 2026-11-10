import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
 return (
  <nav className="navbar navbar-expand-lg navbar-dark site-navbar">
    <div className="container site-navbar-inner">
      <NavLink className="navbar-brand d-flex align-items-center gap-3" to="/">
        <img src="/logo.jpg" alt="Haven Coffee home" />
        <div>
          <div className="site-brand-name">HAVEN</div>
          <div className="site-brand-tagline">GOOD COFFEE? THAT IS ALL WE KNOW</div>
        </div>
      </NavLink>
      <div className="site-navbar-links">
        <ul className="navbar-nav d-flex flex-row gap-4">
          <li className="nav-item"><NavLink className="nav-link" to="/">HOME</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/menu">MENU</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/about">ABOUT US</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/contact">CONTACT US</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
)
}

export default React.memo(Navbar)