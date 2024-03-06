import React from "react"
import "./ProductCardItem.css"
import { useNavigate } from "react-router-dom";



const ProductCardItem = ({product, isSingle}) => {
    const navigate = useNavigate()
    const handleViewItemClick = () => {
        navigate(`/${product.id}`);
    }
    
    return (
        <div className="card">
            <img src={product.image} alt={product.title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-price">${product.price}</p>
                {isSingle && <p className="card-description">{product.description}</p>}
                    <button className="card-button">Add to Cart</button>
                    {!isSingle && <button onClick={handleViewItemClick} className="view-item-button">View Item</button>}
            </div>
        </div>
                
                
                


    )
};

export default ProductCardItem