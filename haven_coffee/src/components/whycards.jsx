import React from 'react'
import { NavLink } from 'react-router-dom'

function WhyCard({ title, image, userData }) {
  return (
    <NavLink to={userData ? `/user/${userData.id}` : '#'} style={{ textDecoration: 'none' }}>
    <div className="why-card" style={{
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <img src={image} alt={title} style={{ 
        width: '100%', 
        height: '250px', 
        objectFit: 'cover',
        objectPosition: 'center top',
        display: 'block'
      }} />
      <div style={{
        backgroundColor: '#3e2723',
        color: 'beige',
        padding: '15px 20px',
        textAlign: 'center',
        letterSpacing: '0.5px',
        fontSize: '0.8rem',
        fontWeight: '500',
        fontFamily: "'Segoe UI', sans-serif",
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
        lineHeight: '1.6'
      }}>
        {userData && (
          <>
            <div style={{ marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>{userData.name}</div>
            <div>@{userData.username}</div>
            <div>{userData.email}</div>
            <div>{userData.phone}</div>
            <div>{userData.website}</div>
            <div style={{ marginTop: '8px', fontSize: '0.75rem', fontStyle: 'italic' }}>
              {userData.company?.name}
            </div>
            <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>
              {userData.address?.city}, {userData.address?.zipcode}
            </div>
          </>
        )}
      </div>
    </div>
    </NavLink>
  )
}

export default React.memo(WhyCard)