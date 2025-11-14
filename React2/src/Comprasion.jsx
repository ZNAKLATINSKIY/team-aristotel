import React, {useState} from 'react'

function Comprasion({ data }) {
    const [array, setArray] = useState([])
    const maxPrice = Math.max(...array.map(item => Math.round(item.price)));
    const minPrice = Math.min(...array.map(item => Math.round(item.price)));
    function changeArray(product) {
        if (array.length >= 3) {
            alert("3 продукта сравнения - лимит!")
            return;
        }
        setArray(prev => [...prev, product])
    }

    function clearArray() {
        setArray([])
    }
    return (
        <>
            <h1>Товары для сравнения:</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <p>{item.title}</p>
                        <p>Цена: {Math.round(item.price)}</p>
                        <button onClick={() => {changeArray(item)}}>Выбрать</button>
                    </li>
                ))}
            </ul>
            <ul
            style={{
                textAlign: "center"
            }}>
                {array.map(item => (
                    <li key={item.id}>
                        <p>{item.title}</p>
                        <p>Цена: {Math.round(item.price)}</p>
                    </li>
                ))}
            </ul>
            {console.log(array)}
            <p style={{textAlign: "center"}}>
                Самая большая цена: {maxPrice} <br></br>
                Самая маленькая цена: {minPrice}
            </p>

            <button onClick={() => {clearArray()}}>Очистить корзину сравнения</button>
        </>
        
    )
}

export default Comprasion
