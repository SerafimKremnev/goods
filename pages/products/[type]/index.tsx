import React, {useEffect} from 'react';
import withLayout from "../../../Layout/Layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {AllProducts, IProduct} from "../../../interfaces/products.interface";
import {ParsedUrlQuery} from "querystring";
import {useDispatch} from "react-redux";
import {getCategory} from "../../../store/categorySlice";

const Type = ({ product, categories }: TypeProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory(categories));
    }, []);
    return (
        <div>
            {product && product.title}
        </div>
    );
};

export default withLayout(Type);


export const getStaticPaths: GetStaticPaths = async () => {
    const {data: total} = await axios.get<AllProducts>(process.env.NEXT_PUBLIC_DOMAIN + `/products`);
    const {data: products} = await axios.get<AllProducts>(process.env.NEXT_PUBLIC_DOMAIN + `/products?limit=${total.total}`);

    const paths: string[] = products.products.map(p => `/products/${p.id}`)
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    try {
        if (!params) {
            return {
                notFound: true
            };
        }

        const {data: product} = await axios.get<IProduct>(process.env.NEXT_PUBLIC_DOMAIN + `/products/${params.type}`);
        const {data: categories} = await axios.get<string[]>(process.env.NEXT_PUBLIC_DOMAIN + '/products/categories');

        if(!product) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                categories,
                product,
            }
        };
    } catch {
        return {
            notFound: true
        }
    }
};

export interface TypeProps {
    product: IProduct,
    categories: string[]
}