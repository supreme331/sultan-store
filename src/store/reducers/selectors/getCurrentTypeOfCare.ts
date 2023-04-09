import {RootState} from "../../store";
import {PreloadedState} from "@reduxjs/toolkit";

export const getCurrentTypeOfCare = (state: RootState | PreloadedState<RootState>) =>
    state?.catalogReducer?.currentTypeOfCare;