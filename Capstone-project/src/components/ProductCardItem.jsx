import React from "react"

const ProductCardItem = ({product}) => {
    return (
        <div>
            <img src={product.image} alt={product.title} />
            <div className="">
                <h3 className="">{product.title}</h3>
                <h1 className="">{product.price}</h1>
                <h2 className="">{product.rate}</h2>
                <p>{product.description}</p>

            </div>
        </div>
    )
};

export default ProductCardItem