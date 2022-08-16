import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        cartTotalPrice: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;

            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );

            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
                // console.log(state.items[0]);
                // state.cartTotalPrice = state.cartTotalPrice + 1;
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    existingItem.totalPrice + newItem.price;
                // state.cartTotalPrice = state.cartTotalPrice + 1;
            }

            // ! Cant figure out how to get th etotal cart price to calculate.
            // let updatedCartTotal = 0;

            // for (let i = 0; i < state.items.length; i++) {
            //     updatedCartTotal =
            //         state.cartTotalPrice + state.items[i].totalPrice;
            //     return updatedCartTotal;
            // }
            // console.log(state.cartTotalPrice);
        },
        removeItemFromCArt(state, action) {
            const id = action.payload;

            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =
                    existingItem.totalPrice - existingItem.price;
            }
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
