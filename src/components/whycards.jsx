import React from 'react'

function WhyCard({ title, description, image }) {
  return (
    <article className="why-card">
      <img src={image} alt="" />
      <div className="why-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default React.memo(WhyCard)