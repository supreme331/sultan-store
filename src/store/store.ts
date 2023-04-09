import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catalogReducer from './reducers/CatalogSlice'
import cartReducer from './reducers/CartSlice'
import type { PreloadedState } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    catalogReducer,
    cartReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']