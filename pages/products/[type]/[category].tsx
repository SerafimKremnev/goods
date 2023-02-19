import React, {useEffect} from 'react';
import withLayout from "../../../Layout/Layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {AllProducts, Product} from "../../../interfaces/products.interface";
import {ParsedUrlQuery} from "querystring";
import {useDispatch} from "react-redux";
import {getCategory} from "../../../store/categorySlice";

const Category = ({ products, categories }: Category) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(products)
        dispatch(getCategory(categories));
    }, []);

    return (
        <div>
            {products && products.products.map(e => <div>{e.title}</div>)}
        </div>
    );
};

export default withLayout(Category);


export const getStaticPaths: GetStaticPaths = async () => {
    const {data: categories} = await axios.get<string[]>(process.env.NEXT_PUBLIC_DOMAIN + '/products/categories');

    const paths: string[] = categories.map(p => `/products/category/${p}`)
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<Category> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    try {
        if (!params) {
            return {
                notFound: true
            };
        }

        const {data: products} = await axios.get<AllProducts>(process.env.NEXT_PUBLIC_DOMAIN + `/products/category/${params.category}`);
        const {data: categories} = await axios.get<string[]>(process.env.NEXT_PUBLIC_DOMAIN + '/products/categories');

        if(!products) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                categories,
                products,
            }
        };
    } catch {
        return {
            notFound: true
        }
    }
};

export interface Category {
    products: AllProducts,
    categories: string[]
}