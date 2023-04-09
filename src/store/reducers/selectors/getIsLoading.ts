import {RootState} from "../../store";
import {PreloadedState} from "@reduxjs/toolkit";

export const getIsLoading = (state: RootState | PreloadedState<RootState>) => state?.catalogReducer?.isLoading;