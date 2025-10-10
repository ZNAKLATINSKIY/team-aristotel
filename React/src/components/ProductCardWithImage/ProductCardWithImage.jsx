import React from 'react'
import ProductRating from './ProductRating/ProductRating'
function ProductCardWithImage(props) {
    function Check(inStock) {
        if (inStock) {
            return <button style={{color: "green"}}>Купить</button>
        } else {
            return <button style={{color: "red"}}>Нет в наличии</button>
        }
    }
  return (
    <div>
        <h3>{props.name}</h3>
        <p>Цена: {props.price}</p>
        {Check(props.inStock)};
        <ProductRating rating={4} reviewsCount={333}/>
    </div>
  )
}

export default ProductCardWithImage
