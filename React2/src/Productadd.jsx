import React, { useState } from 'react'

function Productadd( {data, setData} ) {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
  })

  const updateProduct = (field, value) => {
    setProduct(prevProduct => ({
      ...prevProduct,
      [field] : value
    }))
  }

  const addProduct = () => {
    setData(prev => [...prev, product])
    setProduct({ title: '', price: '', description: '', category: '' })
  }
  return (
    <div>
      <input 
        placeholder="Введите название товара"
        value = {product.title}
        type="text" 
        onChange={(e) => updateProduct('title', e.target.value)}
        />

      <input 
        placeholder="Введите цену товара"
        value = {product.price}
        type="text" 
        onChange={(e) => updateProduct('price', e.target.value)}
        />
        
      <input 
        placeholder="Введите описание товара"
        value = {product.description}
        type="text" 
        onChange={(e) => updateProduct('description', e.target.value)}
        />

      <input
        placeholder="Введите категорию товара"
        value = {product.category}
        type="text" 
        onChange={(e) => updateProduct('category', e.target.value)}
        />
      
      <button onClick={addProduct}>Добавить товар</button>
    </div>
  )
}

export default Productadd
