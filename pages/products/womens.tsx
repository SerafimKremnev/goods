import React, {useEffect} from 'react';
import withLayout from "../../Layout/Layout";
import axios from "axios";
import {GetStaticProps} from "next";
import {AllProducts} from "../../interfaces/products.interface";
import {useDispatch} from "react-redux";
import {getCategory} from "../../store/categorySlice";


const Womens = ({categories}: WomenProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory(categories));
    }, []);
    return (
        <div>
            Womens
        </div>
    );
};

export default withLayout(Womens);

export const getStaticProps: GetStaticProps<WomenProps> = async () => {
    const {data: categories} = await axios.get<string[]>(process.env.NEXT_PUBLIC_DOMAIN + '/products/categories');
    const {data: products} = await axios.get<AllProducts>(process.env.NEXT_PUBLIC_DOMAIN + '/products');
    return {
        props: {
            products,
            categories
        }
    };
};

export interface WomenProps {
    products?: AllProducts
    categories: string[]
}