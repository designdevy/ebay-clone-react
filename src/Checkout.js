import React from "react";
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket, user}] = useStateValue();
    
    return (
        <div className="checkout">
            {/* If there is nothing in the cart, show a message*/}
            {basket?.length === 0 ? (
                <>
                    <h2>Your shopping basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                </>
            ) : (
                <div className="checkout__lower">
                    <div className="checkout__lower--left">
                        <h3>Hello, {user?.email}</h3>
                        <h2>Shopping cart ({basket?.length} item{basket?.length !== 1 ? 's': ''})</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                    <div className="checkout__lower--right">
                        <Subtotal/>
                    </div>
                </div>
                )}
        </div>
    )
}

export default Checkout;