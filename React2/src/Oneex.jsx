import React from 'react'

function Oneexx( {count, setCount} ) {
    function limiteCount(prev) {
        alert("Вы привысили допустимый лимит");
        prev = prev
        return prev;
    }
    return (

    <div>
        <button onClick={() =>
        setCount(prev => prev===10 ? limiteCount(prev) : prev + 1)}>Увеличить счётчик</button>
        <button onClick={() =>
        setCount(prev => prev===1 ? limiteCount(prev) : prev - 1)}>Уменьшить счётчик</button>
    </div>
  )
}

export default Oneexx
