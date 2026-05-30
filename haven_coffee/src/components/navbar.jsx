import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Navbar() {
 return (
  <nav className="navbar navbar-expand-lg navbar-dark" style={{ padding: '22px 60px' }}>
    <div className="container">
      <a className="navbar-brand d-flex align-items-center gap-3" href="#">
        <img src="/logo.jpg" alt="Haven Logo" style={{ height: '100px', width: 'auto' }} />
        <div>
          <div style={{ color: 'var(--nav-text)', fontWeight: 'bold', fontSize: '27px', letterSpacing: '2px' }}>HAVEN</div>
          <div style={{ color: '#d4a574', fontSize: '17px', letterSpacing: '1px' }}>GOOD COFFEE? THAT IS ALL WE KNOW</div>
        </div>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ul className="navbar-nav d-flex flex-row gap-4" style={{ marginBottom: 0 }}>
          <li className="nav-item"><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/">HOME</NavLink></li>
          <li className="nav-item"><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/about">ABOUT US</NavLink></li>
          <li className="nav-item"><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/services">SERVICES</NavLink></li>
          <li className="nav-item"><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/contact">CONTACT US</NavLink></li>
        </ul>
        <ThemeToggle />
      </div>
    </div>
  </nav>
)
}

export default React.memo(Navbar)