import {useDispatch, useSelector} from "react-redux";

import {uiActions} from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    const cartQuantity = useSelector((state) => state.cart.totalQuantity);

    return (
        <button onClick={toggleCartHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
