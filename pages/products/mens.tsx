import React, {useEffect} from 'react';
import withLayout from "../../Layout/Layout";
import axios from "axios";
import {GetStaticProps} from "next";
import {AllProducts} from "../../interfaces/products.interface";
import {useDispatch} from "react-redux";
import {getCategory} from "../../store/categorySlice";
import {getProducts} from "../../store/productsSlice";


const Mens = ({categories, products}: MensProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        products && dispatch(getProducts(products));
        dispatch(getCategory(categories));
    }, []);
    return (
        <>
            Mens
        </>
    );
};

export default withLayout(Mens);

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