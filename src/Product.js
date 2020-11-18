import React from "react";
import "./Product.css"
import {useStateValue} from "./StateProvider";
import Button from "./ui-comp/Button";

function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();
    
    function addToCart() {
        // Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
    
    return (
        <div className="product">
            <img src={image} alt=""/>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                            .fill(1)
                            .map((id) =>  (
                                <p key={id}>★</p>
                            ))}
                </div>
            </div>
            <Button onClick={addToCart} text="Add to cart"/>
        </div>
    );
}

export default Product;