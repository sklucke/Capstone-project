import React from "react"
import { useParams } from "react-router"
import ProductCardItem from "./ProductCardItem";

const Categories = ({products, setCart, cart}) => {
    const {categoryItem} = useParams();
    const filteredCategories = products.map((product) => {
        if (product.category === categoryItem) {
            return <ProductCardItem key={product.id} product={product} setCart={setCart} cart={cart} />
        }
    })
    return (
        <div>{filteredCategories}</div>
    )
}

export default Categories