import React, {useState,useEffect} from "react";
import { getSingleProduct } from "../api";
import { useParams } from "react-router-dom";
import ProductCardItem from "./ProductCardItem";

const SingleProduct = ({cart,setCart}) => {
    const [product, setProduct] =useState(null);
    const {productId} =useParams();

    useEffect(() => {
        const fetchSingleProduct = async() => {
            const product = await getSingleProduct(productId)
            setProduct(product)
        };
        fetchSingleProduct();
    }, [productId]);

    if (!product) {
        return <h1>Loading.....</h1>;
    }
    return <ProductCardItem product={product} isSingle cart={cart} setCart={setCart} />;

} 

export default SingleProduct;
