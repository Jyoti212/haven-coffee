import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/card'
import WhyCard from '../components/whycards'
import { menuItems, whyHaven } from '../data/data'

const heroSlides = [
  {
    eyebrow: 'A LITTLE MOMENT OF CALM',
    title: <>Good coffee.<br />A place to slow down.</>,
    description: 'Thoughtfully made coffee and warm spaces, ready to welcome you in.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2000&q=85',
  },
  {
    eyebrow: 'BREWED WITH CARE',
    title: <>Your daily cup,<br />made a little better.</>,
    description: 'Discover carefully crafted favorites, from a bold espresso to a silky latte.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=85',
  },
  {
    eyebrow: 'COME AS YOU ARE',
    title: <>Stay for a while.<br />Make yourself at home.</>,
    description: 'A welcoming corner for slow mornings, good company, and one more cup.',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2000&q=85',
  },
  {
    eyebrow: 'MADE FOR SLOW MORNINGS',
    title: <>Find your corner.<br />We will make the coffee.</>,
    description: 'Come in, take your time, and let the day begin at its own pace.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=85',
  },
]

function scrollCards(sliderRef, direction) {
  sliderRef.current?.scrollBy({
    left: direction * sliderRef.current.clientWidth * 0.75,
    behavior: 'smooth',
  })
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const whySliderRef = useRef(null)
  const menuSliderRef = useRef(null)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide(current => (current + 1) % heroSlides.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <main className="home-page">
      <section
        aria-label="Haven Coffee highlights"
        aria-roledescription="carousel"
        className="home-hero"
        style={{ backgroundImage: `url('${heroSlides[activeSlide].image}')` }}
      >
        <div className="home-hero-content">
          <p className="home-eyebrow">{heroSlides[activeSlide].eyebrow}</p>
          <h1>{heroSlides[activeSlide].title}</h1>
          <p className="home-hero-description">{heroSlides[activeSlide].description}</p>
          <Link className="home-hero-link" to="/about">
            Discover Haven <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="home-hero-controls" aria-label="Banner slides">
          {heroSlides.map((slide, index) => (
            <button
              aria-label={`Show banner ${index + 1}: ${slide.eyebrow.toLowerCase()}`}
              aria-current={index === activeSlide ? 'true' : undefined}
              className={index === activeSlide ? 'home-hero-indicator active' : 'home-hero-indicator'}
              key={slide.eyebrow}
              onClick={() => setActiveSlide(index)}
              type="button"
            />
          ))}
        </div>
      </section>

      <section className="home-intro">
        <div className="container home-intro-inner">
          <p className="home-eyebrow">A WARM WELCOME, EVERY TIME</p>
          <h2>More than your morning coffee.</h2>
          <p>
            Haven is a place to take a breath and enjoy the little things. We bring together
            thoughtfully prepared coffee, comforting bites, and inviting spaces that make
            it easy to stay for one more conversation.
          </p>
          <Link className="home-text-link" to="/about">
            A little more about us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="home-section home-why">
        <div className="container">
          <div className="home-section-heading">
            <p className="home-eyebrow">MADE FOR YOUR EVERYDAY</p>
            <h2>Why Haven?</h2>
          </div>
          <div className="home-slider-shell">
            <button
              aria-label="Scroll Why Haven cards left"
              className="home-slider-arrow"
              onClick={() => scrollCards(whySliderRef, -1)}
              type="button"
            >
              ←
            </button>
            <div className="home-card-slider" ref={whySliderRef}>
              {whyHaven.map(item => (
                <div className="home-slider-card" key={item.title}>
                  <WhyCard title={item.title} description={item.description} image={item.image} />
                </div>
              ))}
            </div>
            <button
              aria-label="Scroll Why Haven cards right"
              className="home-slider-arrow"
              onClick={() => scrollCards(whySliderRef, 1)}
              type="button"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section className="home-section home-menu" id="menu">
        <div className="container">
          <div className="home-section-heading">
            <p className="home-eyebrow">SOMETHING GOOD IN EVERY CUP</p>
            <h2>Our Menu</h2>
          </div>
          <div className="home-slider-shell">
            <button
              aria-label="Scroll menu cards left"
              className="home-slider-arrow"
              onClick={() => scrollCards(menuSliderRef, -1)}
              type="button"
            >
              ←
            </button>
            <div
              className="home-card-slider"
              ref={menuSliderRef}
            >
              {menuItems.map(item => (
                <div className="home-slider-card menu-slider-card" key={item.title}>
                  <Card title={item.title} desc={item.desc} image={item.image} category={item.category} />
                </div>
              ))}
            </div>
            <button
              aria-label="Scroll menu cards right"
              className="home-slider-arrow"
              onClick={() => scrollCards(menuSliderRef, 1)}
              type="button"
            >
              →
            </button>
          </div>
          <div className="home-menu-more">
            <Link className="home-text-link" to="/menu">
              Explore the full menu <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-visit">
        <div className="container home-visit-inner">
          <div>
            <p className="home-eyebrow">YOUR TABLE IS WAITING</p>
            <h2>Make room for a good cup.</h2>
            <p>Drop by for your favorite coffee, a comforting bite, and a moment that is all yours.</p>
          </div>
          <Link className="home-visit-link" to="/contact">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
