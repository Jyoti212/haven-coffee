import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{
      backgroundColor: 'beige',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '6rem',
          fontWeight: 'bold',
          color: '#3e2723',
          margin: '0',
          fontFamily: "'Playfair Display', serif"
        }}>
          404
        </h1>
        
        <h2 style={{
          fontSize: '2rem',
          color: '#3e2723',
          fontFamily: "'Playfair Display', serif",
          marginBottom: '20px',
          marginTop: '10px'
        }}>
          Page Not Found
        </h2>
        
        <p style={{
          fontSize: '16px',
          color: '#555',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        <Link 
          to="/" 
          style={{
            display: 'inline-block',
            padding: '12px 30px',
            backgroundColor: '#3e2723',
            color: 'beige',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '1px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#5d4037'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3e2723'}
        >
          GO HOME
        </Link>
      </div>
    </div>
  )
}

export default NotFound
