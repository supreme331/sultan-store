import {
    EBodyCare,
    EFaceCare,
    EFootCare,
    EGiftSets,
    EHairCare,
    EHandsCare,
    EShaving,
    ETanning,
    ETypeOfCare
} from "../enums/EProducts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../models/IProduct";
import {initialProducts} from "../initialProducts";
import {fetchProductItems} from "./ActionCreators";

interface CatalogState {
    productItems: IProduct[];
    selectedManufacturers: Array<string>;
    currentTypeOfCare: '' | ETypeOfCare;
    currentSubtypeOfCare: '' | EBodyCare | EHandsCare | EFootCare | EFaceCare | EHairCare | ETanning | EShaving | EGiftSets;
    isLoading: boolean;
    error: string;
}

const initialState: CatalogState = {
    productItems: [],
    selectedManufacturers: [],
    currentTypeOfCare: '',
    currentSubtypeOfCare: '',
    isLoading: true,
    error: '',
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        initializeApp: (state: CatalogState) => {
            state.isLoading = true;
            const data = JSON.stringify(initialProducts);
            localStorage.setItem('productItems', data);
            state.isLoading = false;
        },
        setCurrentTypeOfCare: (state: CatalogState, action: PayloadAction<'' | ETypeOfCare>) => {
            state.currentTypeOfCare = action.payload;
        },
        setCurrentSubtypeOfCare: (state: CatalogState, action: PayloadAction<'' | EBodyCare | EHandsCare | EFootCare | EFaceCare | EHairCare | ETanning | EShaving | EGiftSets>) => {
            state.currentSubtypeOfCare = action.payload;
        },
        showAllProducts: (state: CatalogState) => {
            state.currentTypeOfCare = '';
            state.currentSubtypeOfCare = '';
        },
        showAllProductsOfType: (state: CatalogState, action: PayloadAction<'' | ETypeOfCare>) => {
            state.currentTypeOfCare = action.payload;
            state.currentSubtypeOfCare = '';
        },
        addSelectedManufacturer: (state: CatalogState, action: PayloadAction<string>) => {
            state.selectedManufacturers.push(action.payload)
        },
        deleteSelectedManufacturer: (state: CatalogState, action: PayloadAction<string>) => {
            const index = state.selectedManufacturers.findIndex(item => item === action.payload);
            index !== -1 && state.selectedManufacturers.splice(index, 1);
        },
        clearSelectedManufacturer: (state: CatalogState) => {
            state.selectedManufacturers = [];
        },
        addProductItem: (state: CatalogState, action: PayloadAction<IProduct>) => {
            state.productItems.push(action.payload);
            const data = JSON.stringify(state.productItems);
            localStorage.setItem('productItems', data);
        },
        editProductItem: (state: CatalogState, action: PayloadAction<IProduct>) => {
            const index = state.productItems.findIndex(product => product.id === action.payload.id);
            state.productItems.splice(index, 1, action.payload);
            const data = JSON.stringify(state.productItems);
            localStorage.setItem('productItems', data);
        },
        deleteProductItem: (state: CatalogState, action: PayloadAction<{productId: number}>) => {
            const index = state.productItems.findIndex(product => product.id === action.payload.productId);
            state.productItems.splice(index, 1);
            const data = JSON.stringify(state.productItems);
            localStorage.setItem('productItems', data);
        },
    },
    extraReducers: {
        [fetchProductItems.pending.type]: (state: CatalogState) => {
            state.productItems = [];
            state.isLoading = true;
        },
        [fetchProductItems.fulfilled.type]: (state: CatalogState, action: PayloadAction<IProduct[]>) => {
            state.productItems = action.payload;
            state.isLoading = false;
        },
        [fetchProductItems.rejected.type]: (state: CatalogState, action: PayloadAction<string>) => {
            state.productItems = [];
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {
    initializeApp,
    setCurrentTypeOfCare,
    setCurrentSubtypeOfCare,
    showAllProducts,
    showAllProductsOfType,
    addSelectedManufacturer,
    deleteSelectedManufacturer,
    clearSelectedManufacturer,
    addProductItem,
    editProductItem,
    deleteProductItem,
} = catalogSlice.actions;

export default catalogSlice.reducer;