import React from 'react'
import ProductCardWithImage from './ProductCardWithImage/ProductCardWithImage.jsx'
import ProductRating from './ProductRating/ProductRating.jsx'
import SellerInfo from './SellerInfo/SellerInfo.jsx'
import ProductSpecifications from './ProductSpecifications/ProductSpecifications.jsx'

function FullProductCard({ 
  product = {
  name: "iPhone 15",
  price: 85000,
  image: "iphone15.jpg",
  inStock: true,
  rating: 4.8,
  reviewsCount: 1250,
  seller: {
    name: "TechStore",
    rating: 4.9,
    reviewsCount: 5680,
    isVerified: true
  },
  specifications: {
    brand: "Apple",
    color: "Черный",
    memory: "128GB",
    screen: "6.1 дюйма"
  }
}

 }) {
  return (
    <div>
      <SellerInfo seller = {{
        name: "Евгений",
        rating: 5,
        reviewsCount: 227,
        isVerifed: true,
      }} />
      <ProductRating />
      <ProductSpecifications />
    </div>
  )
}

export default FullProductCard
