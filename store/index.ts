import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from './categorySlice';
import productsReducer from "./productsSlice";
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';


export const store = configureStore({
    reducer:{
        category: categoryReducer,
        products: productsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export const useProductsSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
