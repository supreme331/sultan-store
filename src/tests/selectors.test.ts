import {getCurrentTypeOfCare} from '../store/reducers/selectors/getCurrentTypeOfCare';
import {EBodyCare, ETypeOfCare} from "../store/enums/EProducts";
import {RootState} from "../store/store";
import {PreloadedState} from "@reduxjs/toolkit";
import {getCurrentSubtypeOfCare} from "../store/reducers/selectors/getCurrentSubtypeOfCare";

const preloadedState: PreloadedState<RootState> = {catalogReducer: {
        productItems: [],
        selectedManufacturers: [],
        currentTypeOfCare: ETypeOfCare.body,
        currentSubtypeOfCare: EBodyCare.showerGels,
        isInitialization: true,
        isLoading: true,
        error: '',
    }}

describe('redux selectors', () => {
    test('should select currentTypeOfCare', () => {
        expect(getCurrentTypeOfCare(preloadedState)).toBe(ETypeOfCare.body);
    })

    test('should select currentSubtypeOfCare', () => {
        expect(getCurrentSubtypeOfCare(preloadedState)).toBe(EBodyCare.showerGels);
    })
})