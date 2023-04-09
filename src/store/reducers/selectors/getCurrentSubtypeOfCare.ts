import {RootState} from "../../store";
import {PreloadedState} from "@reduxjs/toolkit";

export const getCurrentSubtypeOfCare = (state: RootState | PreloadedState<RootState>) =>
    state?.catalogReducer?.currentSubtypeOfCare;