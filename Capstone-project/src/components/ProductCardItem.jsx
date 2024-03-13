import React from "react"
import "./ProductCardItem.css"
import { useNavigate } from "react-router-dom";
import { addProductToCart } from "../api";



const ProductCardItem = ({product, isSingle, token}) => {
    const navigate = useNavigate()
    const handleViewItemClick = () => {
        navigate(`/${product.id}`);
    }
     const handleAddToCart = async () => {
        const today = new Date()
        try {
            const  result = await addProductToCart ({
                userId:token,
                    date: today.toLocaleDateString('en-CA'),
                    products:[{productId:product.id,quantity:1}]
            })
            return result
        } catch (error) {
            console.error("There was an error/ ADD Cart", error);
        }
     }
    return (
        <div className="card">
            <img src={product.image} alt={product.title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-price">${product.price}</p>
                {isSingle && <p className="card-description">{product.description}</p>}
                    <button onClick={handleAddToCart} className="card-button">Add to Cart</button>
                    {!isSingle && <button onClick={handleViewItemClick} className="view-item-button">View Item</button>}
            </div>
        </div>
                
                
                


    )
};

export default ProductCardItem