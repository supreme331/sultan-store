import {RootState} from "../../store";
import {PreloadedState} from "@reduxjs/toolkit";

export const getIsInitialization = (state: RootState | PreloadedState<RootState>) =>
    state?.catalogReducer?.isInitialization;