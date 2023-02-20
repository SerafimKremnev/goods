import axios from "axios";
import {AllProducts} from "../interfaces/products.interface";
import {GetStaticProps} from "next";
import withLayout from "../Layout/Layout";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCategory} from "../store/categorySlice";

function Home({products, categories}: HomeProps): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory(categories))
    }, []);

    return (
        <>
            Index Page
        </>
    );
}
export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const {data: products} = await axios.get<AllProducts>(process.env.NEXT_PUBLIC_DOMAIN + '/products');
    const {data: categories} = await axios.get<string[]>(process.env.NEXT_PUBLIC_DOMAIN + '/products/categories');

    return {
        props: {
            products,
            categories
        }
    };
};

export interface HomeProps {
    products: AllProducts
    categories: string[]
}