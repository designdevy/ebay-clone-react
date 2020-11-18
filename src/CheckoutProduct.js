import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";
import Button from "./ui-comp/Button";

function CheckoutProduct({id, title, image, price, rating}) {
    const [, dispatch] = useStateValue();
    
    function removeFromBasket() {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
    }
    
    return(
        <div className="checkoutProduct">
            <img className="checkoutProduct__image"
                 src={image}
                 alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>★</p>
                        ))}
                </div>
                <Button text="Remove from cart" onClick={removeFromBasket}/>
            </div>
        </div>
    )
}

export default CheckoutProduct;