import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
import Button from "./ui-comp/Button";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    // console.log(getBasketTotal(basket))
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} item{basket?.length !== 1 ? 's': ''}):
                            <strong> {value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            
            <Button text="Proceed to checkout"></Button>
        </div>
    )
}

export default Subtotal;