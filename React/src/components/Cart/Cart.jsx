import React from 'react'

function Cart(props) {

  const a = props.price * 500;
  console.log(a)
  return (
    <div>
      <h1>Cart</h1>
      {/* {cartItems ? <p>{cartItems}</p> : <p>No items in cart</p>} */}
    </div>
  )
}

export default Cart
