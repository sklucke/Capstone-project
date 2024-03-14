import React from "react"
import "./CartItemCard.css"

const CartItemCard = ({cartItem, quantity}) => {
    if(!cartItem){
        return <h1>Loading</h1>
    }
    
  return (
    <div className="card">
      <div className="cart-image-container">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          className="card-image"
        />
      </div>
      <div className="cart-item-details">
        <h3>{cartItem.title}</h3>
        <p>Price: ${cartItem.price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="quantity-buttons">
        <button className="quantity-button">+</button>
        <button className="quantity-buttin">-</button>

      </div>
    </div>
  );
}

export default CartItemCard