import React from 'react'
function ProductRating( { rating, reviewsCount } ) {
  function checkRating(rating, reviewsCount) {
    let result = "⭐".repeat(rating);
    result += "☆".repeat(5 - rating);
    return `Рейтинг: ${result}. Количество отзывов: ${reviewsCount}`
  }
  return (
    <div>
    {checkRating(rating, reviewsCount)}
    </div>
  )
}

export default ProductRating
