//@ts-nocheck

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AllProducts} from "../interfaces/products.interface";


const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: {},
        allProducts: {},
    },
    reducers: {
        getProducts(state, action: PayloadAction<AllProducts>) {
            state.products = action.payload;
            state.allProducts = action.payload;
        },
        sortProducts(state, action: PayloadAction<string[]>) {
            if(action.payload.length == 0) {
                state.products = state.allProducts;
            } else {
                state.products.products = state.allProducts.products.filter(e => action.payload.includes(e.brand));
            }
        },
    }
});

export const {getProducts, sortProducts} = productsSlice.actions;
export default productsSlice.reducer;