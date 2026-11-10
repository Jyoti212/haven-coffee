import { useState } from 'react'
import Card from '../components/card'
import { menuCategories, menuItems } from '../data/data'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const visibleItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <main className="menu-page">
      <header className="menu-page-header">
        <div className="menu-page-header-content">
          <p className="home-eyebrow">MADE FRESH, SERVED WITH CARE</p>
          <h1>A good thing for every kind of day.</h1>
          <p>Find your coffee favorite, or pair it with something warm from our bakery.</p>
        </div>
      </header>

      <section className="menu-page-content container" aria-label="Haven menu">
        <div className="home-menu-tabs" role="tablist" aria-label="Filter menu by category">
          {menuCategories.map(category => {
            const tabId = `full-menu-tab-${category.toLowerCase().replaceAll(' ', '-')}`
            return (
              <button
                aria-controls="full-menu-panel"
                aria-selected={activeCategory === category}
                className={activeCategory === category ? 'home-menu-tab active' : 'home-menu-tab'}
                id={tabId}
                key={category}
                onClick={() => setActiveCategory(category)}
                role="tab"
                type="button"
              >
                {category}
              </button>
            )
          })}
        </div>

        <div
          aria-labelledby={`full-menu-tab-${activeCategory.toLowerCase().replaceAll(' ', '-')}`}
          className="menu-page-grid"
          id="full-menu-panel"
          role="tabpanel"
        >
          {visibleItems.map(item => (
            <Card
              category={item.category}
              desc={item.desc}
              image={item.image}
              key={item.title}
              title={item.title}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Menu
