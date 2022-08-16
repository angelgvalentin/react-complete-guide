import {cartActions} from "./cart-slice";
import {uiActions} from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "https://react-http-cdc3d-default-rtdb.firebaseio.com/cart.json"
            );

            if (!response.ok) {
                throw new Error("Could not fetch card data");
            }
            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                    cartTotalPrice: cartData.cartTotalPrice,
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Fetching cart data failed!",
                })
            );
        }
    };
};

export const sendCardData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: " Sending cart data!",
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://react-http-cdc3d-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                        cartTotalPrice: cart.cartTotalPrice,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed");
            }
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: " Sent cart data successfully!",
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed!",
                })
            );
        }
    };
};
