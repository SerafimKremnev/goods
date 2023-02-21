import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AllProducts} from "../interfaces/products.interface";

interface IStates {
    products: AllProducts | null,
    allProducts: AllProducts | null,
    binder: {
        brand: string[],
        category: string[],
    }
}
const initialState: IStates = {
    products: null,
    allProducts: null,
    binder: {
        brand: [],
        category: [],
    }
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts(state, action: PayloadAction<AllProducts>) {
            state.products = action.payload;
            state.allProducts = action.payload;
        },
        sortProducts(state) {
            if(state.binder.brand.length == 0 && state.binder.category.length == 0) {
                state.products = state.allProducts;
            } else {
                if(state.products && state.allProducts) {
                    if(state.binder.brand.length == 0) {
                        state.products.products = state.allProducts.products.filter(e => state.binder.category.includes(e.category));
                    } else if (state.binder.category.length == 0) {
                        state.products.products = state.allProducts.products.filter(e => state.binder.brand.includes(e.brand));
                    } else {
                        state.products.products = state.allProducts.products.filter(e => state.binder.brand.includes(e.brand) && state.binder.category.includes(e.category));
                    }
                }
            }
        },
        addSort(state,  action: PayloadAction<{ value:string, type: 'brand' | 'category'}>) {
            if(action.payload.type == 'brand') {
                state.binder.brand.push(action.payload.value);
            } else {
                state.binder.category.push(action.payload.value);
            }
        },
        removeSort(state,  action: PayloadAction<{ value:string, type: 'brand' | 'category'}>) {
            if(action.payload.type == 'brand') {
                state.binder.brand = state.binder.brand.filter(c => action.payload.value != c);
            } else {
                state.binder.category = state.binder.category.filter(c => action.payload.value != c);
            }
        },
    }
});

export const {getProducts, sortProducts, addSort, removeSort} = productsSlice.actions;
export default productsSlice.reducer;