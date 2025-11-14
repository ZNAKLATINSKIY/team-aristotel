import React from 'react'

function Chosen( {name, price, isChosen, setChosen} ) {
  return (
    <div>
      <p>Название товара: {name}</p>
      <p>Цена: {price}</p>
      {isChosen && (<p>в избранном</p>)}
      
      <button onClick = {() => 
        setChosen(!isChosen)
      }>В избранное</button>
    </div>
  )
}

export default Chosen
