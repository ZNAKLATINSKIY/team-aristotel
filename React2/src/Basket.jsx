import React, {useState} from 'react'
import Rating from './Rating';
import Calculate from './Calculate';
function Basket( {data} ) {
    const [basketArray, setBasketArray] = useState([]);
    let countSumBasket = 0;
    const sumBasket = basketArray.forEach((element) => countSumBasket += Math.round(element.price));
    function addBasket(product) {
        setBasketArray(array => [...array, product]);
    }
    function clearBasket() {
        setBasketArray([]);
    } 
    function deleteProductBasket(product) {
        setBasketArray(array => [...array.filter(item => item !== product)]);
    }
    return (
        <>
            <div style={{display: basketArray[0] ? 'flex' : 'inline', justifyContent: basketArray ? 'space-around' : null}}>
                <h1>Список продуктов:</h1>
                <br></br>
                <ul>
                    {data.map(i => (
                        <li key={i.id}>
                            <p>{i.title}</p>
                            <Rating rate={Math.round(i.rating.rate)}/>
                            <p>Цена: {Math.round(i.price)}</p>
                            <button style={{margin: '10px 0 0 0'}} onClick={() => addBasket(i)}>Добавить в корзину</button>
                        </li>
                    ))}
                </ul>
                {basketArray[0] ?
                    <>
                        <h1>Корзина:</h1>
                        <br></br>
                        <ul>
                            {basketArray.map(i => (
                                <li key={i.id}>
                                    <p>{i.title}</p>
                                    <p>{Math.round(i.price)}</p>
                                    <button onClick={() => deleteProductBasket(i)}>Удалить из корзины</button>
                                </li>
                            ))}
                        </ul>
                        
                        <p style={{margin: '50px 0 0 50px'}}>Общая стоимость товаров: {countSumBasket}</p>
                        <button style={{height: '200px'}} onClick={() => clearBasket()}>Очистить корзину</button>
                    </>
                    :
                    null
                }
                
            </div>
        </>
    )
}

export default Basket
