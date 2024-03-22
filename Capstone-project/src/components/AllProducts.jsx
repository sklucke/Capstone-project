import React from "react"
import ProductCardItem from "./ProductCardItem"
import "./AllProducts.css"

const AllProducts = ({products, cart, setCart}) => {
    console.log("products", products)
    return (
        <div className="main-containers">
            {products && products.map((product) => {
                return <ProductCardItem key={product.id} product={product} cart={cart} setCart={setCart} />
            })}
        </div>
    )
}

export default AllProducts