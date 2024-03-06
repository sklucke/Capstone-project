import React from "react"
import ProductCardItem from "./ProductCardItem"

const AllProducts = ({products}) => {
    console.log("products", products)
    return (
        <div>
            {products && products.map((product) => {
                return <ProductCardItem key={product.id} product={product} />
            })}
        </div>
    )
}

export default AllProducts