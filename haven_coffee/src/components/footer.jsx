import React from 'react'

function Footer() {
  return (
    <footer style={{ backgroundColor: '#3e2723', color: 'beige', padding: '10px 10px' }}>
      <div className="container">
        <div className="row align-items-start justify-content-center gap-5">

          {/* Column 1 - Logo + Haven + Tagline */}
          <div className="col-auto">
            <div className="d-flex gap-3 align-items-center">
              <img src="/logo.jpg" alt="Haven Logo" style={{ height: '80px', width: 'auto' }} />
              <div style={{ lineHeight: '1.5' }}>
                <p style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>HAVEN</p>
                <p style={{ fontSize: '12px', color: '#d4a574', margin: 0 }}>GOOD COFFEE? THAT IS ALL WE KNOW</p>
              </div>
            </div>
          </div>

          {/* Column 2 - Address & Contact */}
          <div className="col-auto">
            <p style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 0 0' }}>Contact</p>
            <p style={{ fontSize: '14px', margin: '6px 0', color: '#d7ccc8' }}>GT 40, Sector 117, Noida, Uttar Pradesh 201304</p>
            <p style={{ fontSize: '14px', margin: '6px 0', color: '#d7ccc8' }}>097170 59002</p>
            <p style={{ fontSize: '14px', margin: '6px 0', color: '#d7ccc8' }}>info@havencoffee.com</p>
            <p style={{ fontSize: '14px', margin: '6px 0', color: '#d7ccc8' }}>All Days: 8AM - 9PM</p>
          </div>

          {/* Column 3 - Social Links */}
          <div className="col-auto">
            <p style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 0 0' }}>Follow us</p>
            <p style={{ fontSize: '14px', margin: '6px 0' }}><a href="#" style={{ color: '#d7ccc8', textDecoration: 'none' }}>Facebook</a></p>
            <p style={{ fontSize: '14px', margin: '6px 0' }}><a href="#" style={{ color: '#d7ccc8', textDecoration: 'none' }}>LinkedIn</a></p>
            <p style={{ fontSize: '14px', margin: '6px 0' }}><a href="#" style={{ color: '#d7ccc8', textDecoration: 'none' }}>Instagram</a></p>
            <p style={{ fontSize: '14px', margin: '6px 0' }}><a href="#" style={{ color: '#d7ccc8', textDecoration: 'none' }}>YouTube</a></p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)