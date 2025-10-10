import React from 'react'

function AddToCartButton(props) {
  function Click() {
    alert("Товар добавлен в корзину!");
  };
  return (
    <div>
       <button onClick = {Click}>{props.text}</button>
    </div>
  )
}

export default AddToCartButton
