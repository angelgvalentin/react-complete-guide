import {useSelector} from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartItems = useSelector((state) => state.cart.items);
    // const cartTotal = useSelector((state) => state.cart);

    // console.log(cartItems);
    // console.log(cartTotal);

    // const sumOfPrices = cartItems.map((item) => {
    //     return item.;
    // });
    // console.log(sumOfPrices);

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => {
                    return (
                        <CartItem
                            key={item.id}
                            item={{
                                id: item.id,
                                title: item.name,
                                quantity: item.quantity,
                                total: item.totalPrice,
                                price: item.price,
                            }}
                        />
                    );
                })}
                {/* <h2>Total Price: ${cartTotal.cartTotalPrice.toFixed(2)}</h2> */}
            </ul>
        </Card>
    );
};

export default Cart;
