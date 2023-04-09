import {RootState} from "../../store";
import {PreloadedState} from "@reduxjs/toolkit";

export const getCartItems = (state: RootState | PreloadedState<RootState>) => state?.cartReducer?.cartItems;