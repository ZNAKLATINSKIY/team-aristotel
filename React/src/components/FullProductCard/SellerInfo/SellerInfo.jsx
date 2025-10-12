import React from 'react'
function SellerInfo({
    seller: {
    name: sellerName,
    rating: sellerRating,
    reviewsCount: reviewsCount,
    isVerifed: isVerifed,
}}) {
    if (isVerifed) {
        return <p>Продавец верифицирован✅</p>
    } else {
        return <p>Продавец НЕ верицифирован.</p>
    }
    let result = "⭐".repeat(sellerRating);
    result += "☆".repeat(5 - sellerRating);  
  return (
    <div>
    
      <p>Рейтинг: {result}. Количество отзывов: {reviewsCount}</p>
    </div>
  )
}

export default SellerInfo
