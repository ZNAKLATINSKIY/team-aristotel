import React from 'react'

function SimpleProductCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.price} rub</p>
    </div>
  )
}

export default SimpleProductCard

