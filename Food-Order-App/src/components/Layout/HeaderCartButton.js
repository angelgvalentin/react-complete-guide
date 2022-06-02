import React from "react";
import {useContext} from "react/cjs/react.development";
import {useEffect} from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import {useState} from "react";

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnISHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        //check how
        return currentNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ""
    }`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnISHighlighted(true);
        const timer = setTimeout(() => {
            setBtnISHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
