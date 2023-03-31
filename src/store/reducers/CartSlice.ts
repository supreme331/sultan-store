import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem} from "../models/ICartItem";

interface CartState {
    cartItems: ICartItem[];
    totalPrice: number;
    isLoading: boolean;
    error: string;
}

const initialState: CartState = {
    cartItems: [],
    totalPrice: 0,
    isLoading: false,
    error: '',
}

export const cartSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<ICartItem>) => {
            const totalAmountPrice = action.payload.price * action.payload.amount;
            state.cartItems.push(action.payload);
            state.totalPrice += totalAmountPrice;
        },
        removeFromCart: (state: CartState, action: PayloadAction<{ id: number }>) => {
            const index = state.cartItems.findIndex((item => item.id === action.payload.id));
            state.totalPrice = state.totalPrice - state.cartItems[index].amount * state.cartItems[index].price
            state.cartItems.splice(index, 1);
        },
        increaseAmount: (state: CartState, action: PayloadAction<{ id: number }>) => {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                item.amount++;
                state.totalPrice += item.price;
            }
        },
        decreaseAmount: (state: CartState, action: PayloadAction<{ id: number }>) => {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                if (item.amount === 1) {
                    const index = state.cartItems.findIndex((item => item.id === action.payload.id));
                    state.totalPrice = state.totalPrice - state.cartItems[index].amount * state.cartItems[index].price;
                    state.cartItems.splice(index, 1);
                    return;
                }
                item.amount--;
                state.totalPrice -= item.price;
            }
        },
        clearCart: (state: CartState) => {
            state.cartItems.length = 0;
            state.totalPrice = 0;
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

