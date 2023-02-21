import React, {useEffect} from 'react';
import withLayout from "../../Layout/Layout";
import axios from "axios";
import {GetStaticProps} from "next";
import {AllProducts} from "../../interfaces/products.interface";
import {useDispatch} from "react-redux";
import {getCategory} from "../../store/categorySlice";
import {getProducts} from "../../store/productsSlice";
import {useProductsSelector} from "../../store";
import ProductList from "../../Components/ProductList/ProductList";


const Mens = ({categories, products}: MensProps) => {
    const dispatch = useDispatch();
    const stateCategory = useProductsSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(getCategory(categories));
        products && dispatch(getProducts(products));
    }, []);

    return (
        <>
            {stateCategory && <ProductList products={stateCategory}/>}
        </>
    );
};

export default withLayout(Mens);

export const getStaticProps: GetStaticProps<MensProps> = async () => {
    const {data: categories} = await axios.get<string[]>(process.env.NEXT_PUBLIC_DOMAIN + '/products/categories');
    const {data: products} = await axios.get<AllProducts>(process.env.NEXT_PUBLIC_DOMAIN + '/products?limit=100');
    if(products.products) {
        products.products = products.products.filter(p => p.category.toLowerCase().split('-').includes('mens'));
    }
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