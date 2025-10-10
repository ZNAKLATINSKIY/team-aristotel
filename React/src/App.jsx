import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import Stats from './components/Stats/Stats.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Cart from './components/Cart/Cart.jsx'
import SimpleProductCard from './components/SimpleProductCard/SimpleProductCard.jsx'
import AddToCartButton from './components/AddToCartButton/AddToCartButton.jsx'
import ProductCardWithImage from './components/ProductCardWithImage/ProductCardWithImage.jsx'
import ProductRating from './components/ProductCardWithImage/ProductRating/ProductRating.jsx'
import SellerInfo from './components/SellerInfo/SellerInfo.jsx'

function App() {
  return (
    <>

      <Cart cartItems={"cherry"}/>
      <Cart cartItems={"banana"}/>
      <Cart cartItems={"apple"} price={25} stock={[1,2,3]}/>
      <Cart />

      <SimpleProductCard 
      name={"oreshnik"} 
      price={'1000000'}
      />

      <AddToCartButton 
      text={"Добавить в корзину"}
      />

      <ProductCardWithImage 
      name={"Название картинки"} 
      price={"Цена картинки"} 
      inStock={true}
      />

      <SellerInfo seller = {{
        name: "Евгений",
        rating: 5,
        reviewsCount: 227,
        isVerifed: true,
      }} />
    </>
  )
}

export default App