import React from 'react'

function ProductSpecifications({ 
    specifications = {
        brand: "Samsung",
        color: "black",
        memory: "128GB",
        screen: "1920x1080",
    }
}) {
  return (
    <div>
        <h2>Характеристики продукта:</h2>
        <ul>
            {Object.entries(specifications).map(([key, value]) => (
                <li key={key}>
                    {key}: {value}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductSpecifications
