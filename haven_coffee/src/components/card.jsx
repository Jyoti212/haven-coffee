import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({ title, desc, image, button, postId }) {
  return (
    <NavLink to={postId ? `/post/${postId}` : '#'} style={{ textDecoration: 'none' }}>
    <div className="custom-card" style={{
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      height: '420px',
      position: 'relative',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginBottom: '20px'
    }}>

      {/* Title + Description block at bottom */}
      <div style={{
        
        backgroundColor: 'rgba(62, 39, 35, 1)',
        color: 'beige',
        padding: '15px 20px',
      }}>
        <h3 style={{
  fontWeight: '400',
  fontSize: '1.1rem',
  letterSpacing: '1px',
  fontFamily: "'Segoe UI', sans-serif",
  marginBottom: '8px',
  color: 'beige'
}}>
          {title}
        </h3>
        <p style={{
          fontSize: '0.85rem',
          lineHeight: '1.6',
          margin: '0 0 12px 0',
          color: '#d7ccc8'
        }}>
          {desc}
        </p>
        {button && (
          <button style={{
            backgroundColor: '#a1887f',
            color: 'beige',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            letterSpacing: '0.5px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#8d7570'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#a1887f'}
          >
            {button}
          </button>
        )}
      </div>

    </div>
    </NavLink>
  )
}

export default React.memo(Card)