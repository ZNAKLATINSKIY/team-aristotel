import React, { useState } from 'react'

function Rating( {rate} ) {
    const [rating, setRating] = useState(rate);
    const array = [1,2,3,4,5];

    function changeRating(countRating) {
        setRating(countRating)
    }

  return (
    <div style={{
        fontSize: "40px",
        cursor: 'pointer',
    }}>
        {array.map((star) => (
            <span
                key={star}
                onClick={() => {changeRating(star)}}
                style={{
                    color: star <= rating ? 'yellow' : 'white',
                    transition: '0.4s',
                }}
            >
            ★
            </span>
        ))}        
    </div>
  )
}

export default Rating
