import React from 'react'

function Card({ title, desc, image, category }) {
  return (
    <article className="why-card menu-item-card">
      <img src={image} alt="" />
      <div className="why-card-content">
        {category && <p className="menu-item-category">{category}</p>}
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </article>
  )
}

export default React.memo(Card)