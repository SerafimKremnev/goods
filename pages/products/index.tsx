import React, {useEffect} from 'react';
import withLayout from "../../Layout/Layout";
import axios from "axios";
import {GetStaticProps} from "next";
import {AllProducts} from "../../interfaces/products.interface";
import {useDispatch} from "react-redux";
import {getCategory} from "../../store/categorySlice";
import ProductList from "../../Components/ProductList/ProductList";
import {getProducts} from "../../store/productsSlice";
import { useProductsSelector} from "../../store";


const Products = ({categories, products}: MensProps) => {
    const dispatch = useDispatch();
    const stateCategory = useProductsSelector((state) => state.products.products);

    useEffect(() => {
        console.log(stateCategory)
        if(products){
            dispatch(getProducts(products));
        }
        dispatch(getCategory(categories));
    }, []);
    return (
        <>
            {stateCategory && <ProductList products={stateCategory}/>}
        </>
    );
};

export default withLayout(Products);

export const getStaticProps: GetStaticProps<MensProps> = async () => {
    const {data: categories} = await axios.get<string[]>(process.env.NEXT_PUBLIC_DOMAIN + '/products/categories');
    const {data: products} = await axios.get<AllProducts>(process.env.NEXT_PUBLIC_DOMAIN + '/products');
    return {
        props: {
            products,
            categories
        }
    };
};

export interface MensProps {
    products?: AllProducts
    categories: string[]
}