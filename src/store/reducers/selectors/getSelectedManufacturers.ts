import {RootState} from "../../store";

export const getSelectedManufacturers = (state: RootState) => state?.catalogReducer?.selectedManufacturers;