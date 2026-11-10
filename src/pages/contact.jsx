import { useState, useEffect } from 'react'
import Toast from '../components/Toast'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState(false)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  

  const validatePhone = (value) => {
    if (!value) return false
    const digits = value.replace(/\D/g, '')
    return digits.length === 10
  }

  const maxMessageLength = 500

  const validationErrors = (() => {
    const errs = {}
    if (!name.trim()) errs.name = 'Name is required'
    if (!email.trim()) errs.email = 'Email is required'
    else if (!validateEmail(email)) errs.email = 'Please enter a valid email'
    if (!phone.trim()) errs.phone = 'Phone is required'
    else if (!validatePhone(phone)) errs.phone = 'Phone must contain 10 digits'
    if (!subject) errs.subject = 'Please select a subject'
    if (!message.trim()) errs.message = 'Message is required'
    else if (message.length > maxMessageLength) errs.message = `Message must be <= ${maxMessageLength} characters`
    return errs
  })()

  const isFormValid = Object.keys(validationErrors).length === 0

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [successMessage])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isFormValid) {
      setErrors(validationErrors)
      return
    }

    // submit (for now just log)
    console.log({ name, email, phone, subject, message })
    setName('')
    setEmail('')
    setPhone('')
    setSubject('')
    setMessage('')
    setErrors({})
    setSuccessMessage(true)
  }

  return (
    <div style={{ backgroundColor: 'beige' }}>

      {/* Header */}
      <section style={{
        backgroundColor: 'beige',
        padding: '10px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2rem',
          letterSpacing: '4px',
          fontFamily: "'Playfair Display', serif",
          color: '#3e2723'
        }}>
          CONTACT US
        </h1>
        
      </section>

      {/* Main Section */}
      <section style={{ padding: '10px' }}>
        <div className="container">
          <div className="row align-items-center justify-content-center gap-5">

            {/* LEFT - Overlapping Images */}
            <div className="col-md-5" style={{ position: 'relative', height: '520px', overflow: 'hidden' }}>

              {/* Background colour block */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '0px',
                width: '180px',
                height: '380px',
                backgroundColor: '#d7ccc8',
                borderRadius: '6px',
                zIndex: 0
              }} />

              {/* Image 1 - top right */}
              <img
                src="https://img.freepik.com/free-photo/side-view-mix-cookies-with-walnut-chocolate-chips-cottage-cheese-puff-pastry-vanilla-sugar-powder_141793-5018.jpg?semt=ais_hybrid&w=740&q=80"
                alt="coffee"
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: '120px',
                  width: '260px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  zIndex: 2
                }}
              />

              {/* Image 2 - middle left overlapping */}
              <img
                src="https://marketplace.canva.com/EAGunn4rwNM/1/0/1600w/canva-black-and-white-simple-coffee-shop-logo-KNbmksGXehQ.jpg"
                alt="cafe interior"
                style={{
                  position: 'absolute',
                  top: '130px',
                  left: '20px',
                  width: '220px',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  zIndex: 3
                }}
              />

              {/* Image 3 - bottom right */}
              <img
                src="https://t3.ftcdn.net/jpg/02/87/65/82/360_F_287658291_CDWrlBjtKNss3xnKh60GI0MUGcRcPbUR.jpg"
                alt="coffee shop"
                style={{
                  position: 'absolute',
                  top: '290px',
                  left: '160px',
                  width: '240px',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  zIndex: 2
                }}
              />

            </div>

            {/* RIGHT - Form */}
            <div className="col-md-5">
              <h2 style={{
                color: '#3e2723',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '30px',
                fontSize: '1.8rem'
              }}>
                Send us a message
              </h2>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: '#3e2723', fontWeight: '500', marginBottom: '8px' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name(eg- John Doe)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: errors.name ? '2px solid #d32f2f' : '1px solid #d7ccc8',
                      borderRadius: '4px',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: 'white',
                      color: '#3e2723'
                    }}
                  />
                  {errors.name && <span style={{ color: '#d32f2f', fontSize: '12px' }}>{errors.name}</span>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: '#3e2723', fontWeight: '500', marginBottom: '8px' }}>
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Your email address(eg- john.doe@example.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: (errors.email || validationErrors.email) ? '2px solid #d32f2f' : '1px solid #d7ccc8',
                      borderRadius: '4px',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: 'white',
                      color: '#3e2723'
                    }}
                  />
                  {(errors.email || validationErrors.email) && <span style={{ color: '#d32f2f', fontSize: '12px' }}>{errors.email || validationErrors.email}</span>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: '#3e2723', fontWeight: '500', marginBottom: '8px' }}>
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Your phone number (10 digits)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: (errors.phone || validationErrors.phone) ? '2px solid #d32f2f' : '1px solid #d7ccc8',
                      borderRadius: '4px',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: 'white',
                      color: '#3e2723'
                    }}
                  />
                  {(errors.phone || validationErrors.phone) && <span style={{ color: '#d32f2f', fontSize: '12px' }}>{errors.phone || validationErrors.phone}</span>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: '#3e2723', fontWeight: '500', marginBottom: '8px' }}>
                    Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: (errors.subject || validationErrors.subject) ? '2px solid #d32f2f' : '1px solid #d7ccc8',
                      borderRadius: '4px',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: 'white',
                      color: '#3e2723'
                    }}
                  >
                    <option value="">-- Select subject --</option>
                    <option value="general">General</option>
                    <option value="orders">Orders</option>
                    <option value="feedback">Feedback</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                  {(errors.subject || validationErrors.subject) && <span style={{ color: '#d32f2f', fontSize: '12px' }}>{errors.subject || validationErrors.subject}</span>}
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', color: '#3e2723', fontWeight: '500', marginBottom: '8px' }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Your message for us..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    maxLength={maxMessageLength}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: (errors.message || validationErrors.message) ? '2px solid #d32f2f' : '1px solid #d7ccc8',
                      borderRadius: '4px',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                      backgroundColor: 'white',
                      color: '#3e2723'
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {(errors.message || validationErrors.message) && <span style={{ color: '#d32f2f', fontSize: '12px' }}>{errors.message || validationErrors.message}</span>}
                    <span style={{ fontSize: '12px', color: '#6b6375' }}>{message.length} / {maxMessageLength}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  style={{
                    width: '100%',
                    padding: '14px',
                    backgroundColor: isFormValid ? '#3e2723' : '#bdbdbd',
                    color: 'beige',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: isFormValid ? 'pointer' : 'not-allowed',
                    letterSpacing: '1px'
                  }}
                >
                  SEND MESSAGE
                </button>
              </form>

              {successMessage && (
                <>
                  {/* Toast notification component */}
                  <Toast message="Message sent successfully!" onClose={() => setSuccessMessage(false)} />
                </>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact