import React, {useEffect} from 'react';
import withLayout from "../../Layout/Layout";
import axios from "axios";
import {GetStaticProps} from "next";
import {AllProducts} from "../../interfaces/products.interface";
import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "../../store/categorySlice";
import ProductList from "../../Components/ProductList/ProductList";
import {getProducts} from "../../store/productsSlice";


const Products = ({categories, products}: MensProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if(products){
            dispatch(getProducts(products));
        }
        dispatch(getCategory(categories));
    }, []);
    return (
        <>
            {products && <ProductList products={products}/>}
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