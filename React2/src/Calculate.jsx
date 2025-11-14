import React, {useState} from 'react'

function Calculate({ price }) {
    const [newPrice, setNewPrice] = useState(price);
    const [discount, setDiscount] = useState(20)
    function changePrice() {
        const newDiscount = Math.random() * 50;       
        setDiscount(newDiscount);                     
        setNewPrice(price - (price * newDiscount / 100)); 
    }

    return (
        <div>
            <p>Цена: {price}</p>
            <p>Цена со скидкой в {Math.round(discount)}%: {Math.round(newPrice)}</p>
            <button onClick={changePrice}>Изменить скидку</button>
        </div>
    )
}

export default Calculate
