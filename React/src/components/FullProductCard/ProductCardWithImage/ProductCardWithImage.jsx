import React from 'react'
import ProductRating from '../ProductRating/ProductRating.jsx'
function ProductCardWithImage(name, price, inStock) {
    function Check(inStock) {
        if (inStock) {
            return <button style={{color: "green"}}>Купить</button>
        } else {
            return <button style={{color: "red"}}>Нет в наличии</button>
        }
    }
    
  return (
    {
        name,
        price,
        inStock
    }
  )
}

export default ProductCardWithImage
