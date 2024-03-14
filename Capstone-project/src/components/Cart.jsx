import React from "react";
import "./CartItemCard.css"
import CartItemCard from "./CartItemCard";

const Cart = ({ cart, products, setCart }) => {
  console.log("cart", cart, "products", products);
  const getAllItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items</p>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);

        return <CartItemCard key={item.productId} cartItem={productItem} quantity={item.quantity} />;
      })}
    </div>
  );
};

export default Cart;
