import {RootState} from "../../store";

export const getProductItems = (state: RootState) => state?.catalogReducer?.productItems;