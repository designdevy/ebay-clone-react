import React from "react";
import "./Button.css";

function Button({text, onClick}) {
    return (
        <button className="buttonComponent__container" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;
