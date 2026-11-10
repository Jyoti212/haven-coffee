function About() {
  return (
    <main className="about-page">

      {/* Header */}
      <section className="about-page-heading">
        <p className="home-eyebrow">OUR STORY</p>
        <h1>About Haven Coffee</h1>
      </section>

      {/* Section 1 - Text Left, Image Right */}
      <section className="about-page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 about-page-copy">
              <h2>THE HOME OF PLEASURES</h2>
              <p>
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
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=80"
                alt="Haven interior"
                className="about-page-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Image Left, Text Right */}
      <section className="about-page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85"
                alt="Coffee beans"
                className="about-page-image"
              />
            </div>
            <div className="col-md-6 about-page-copy">
              <h2>OUR COFFEE PHILOSOPHY</h2>
              <p>
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
      <section className="about-page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 about-page-copy">
              <h2>OUR CAFÉ PHILOSOPHY</h2>
              <p>
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
                className="about-page-image"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default About