function About() {
  return (
    <div style={{ backgroundColor: 'beige' }}>

      {/* Header */}
      <section style={{
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'beige'
      }}>
        <h1 style={{
          color: '#3e2723',
          fontSize: '2rem',
          letterSpacing: '4px',
          fontFamily: "'Playfair Display', serif"
        }}>
          ABOUT HAVEN COFFEE
        </h1>
      </section>

      {/* Section 1 - Text Left, Image Right */}
      <section style={{ padding: '20px', backgroundColor: 'beige' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" style={{ paddingRight: '60px' }}>
              <h2 style={{
                color: '#3e2723',
                fontSize: '1.5rem',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '25px'
              }}>
                THE HOME OF PLEASURES
              </h2>
              <p style={{ color: '#5d4037', lineHeight: '1.9', marginBottom: '15px' }}>
                Haven was built on one simple belief — that a great cup of coffee can make everything better.
                We started as a small corner café in Noida with a single espresso machine and a big dream.
                What began as a small roastery has grown into a café culture that celebrates
                the simple pleasures of everyday life. We source the finest beans, roast them
                fresh in-house, and serve them in spaces built around modern Indian warmth.
                Today, Haven is a place where people come not just for the coffee, but for the warmth,
                the conversations, and the feeling of being exactly where they belong.
                It is a feeling of familiarity, of warmth, of being remembered.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://b1858819.smushcdn.com/1858819/wp-content/uploads/2025/02/Native-Cocktail-Bar-Interiors-Jaipur-Rajasthan-India-Outdoor-Terrace-scaled.jpg?lossy=2&strip=1&webp=1"
                alt="Haven interior"
                style={{ width: '100%', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Image Left, Text Right */}
      <section style={{ padding: '20px', backgroundColor: 'beige' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/051/201/942/small/design-the-perfect-packaging-for-your-coffee-products-using-a-blank-template-tailored-for-whole-beans-and-ground-coffee-photo.jpg"
                alt="Coffee beans"
                style={{ width: '100%', borderRadius: '4px' }}
              />
            </div>
            <div className="col-md-6" style={{ paddingLeft: '60px' }}>
              <h2 style={{
                color: '#3e2723',
                fontSize: '1.3rem',
                letterSpacing: '3px',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '20px'
              }}>
                OUR COFFEE PHILOSOPHY
              </h2>
              <p style={{ color: '#5d4037', lineHeight: '1.9', marginBottom: '15px' }}>
                India grows some of the world's most expressive coffees — and we exist to
                bring that truth forward. Our coffee is freshly roasted, sourced responsibly,
                and shaped by Indian terroir.
                Through our cafés, we make speciality coffee approachable — for first-time
                brewers, everyday drinkers, and seasoned coffee lovers alike.
                Through our cafés and our Home Brewing Collection, we make speciality coffee approachable — for first-time brewers, everyday drinkers, and seasoned coffee lovers alike. We believe that great coffee should be accessible to everyone, and that the best way to enjoy it is in a space that feels like home. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Text Left, Image Right */}
      <section style={{ padding: '20px', backgroundColor: 'beige' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" style={{ paddingRight: '60px' }}>
              <h2 style={{
                color: '#3e2723',
                fontSize: '1.3rem',
                letterSpacing: '3px',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '20px'
              }}>
                OUR CAFÉ PHILOSOPHY
              </h2>
              <p style={{ color: '#5d4037', lineHeight: '1.9', marginBottom: '15px' }}>
                Every Haven café is built with a deep respect for architecture, light, Indian
                materiality, and emotional presence. Soft light, warm woods, handcrafted
                textures, and quiet corners for solace.
                Each café feels different in its shell but identical in its soul — familiar, warm,
                and built for slow conversations.Each café feels different in its shell but identical in its soul — familiar, warm, and built for slow conversations. And at the heart of every café is our signature comfort food, crafted simply and honestly, meant to pair beautifully with our coffee.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://static.designmynight.com/uploads/2024/09/The-Milkman-Edinburgh-.png"
                alt="Cafe philosophy"
                style={{ width: '100%', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About