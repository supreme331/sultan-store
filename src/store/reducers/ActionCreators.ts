import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchProductsImitation} from "../../utils/utils";

export const fetchProductItems = createAsyncThunk('catalog/fetchProductItems', async (_, thunkAPI) => {
    try {
        return await fetchProductsImitation();

    } catch (e) {
        return thunkAPI.rejectWithValue('Ошибка при получении товаров.')
    }
})