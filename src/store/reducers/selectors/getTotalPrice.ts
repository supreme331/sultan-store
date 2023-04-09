import {RootState} from "../../store";
import {PreloadedState} from "@reduxjs/toolkit";

export const getTotalPrice = (state: RootState | PreloadedState<RootState>) => state?.cartReducer?.totalPrice;