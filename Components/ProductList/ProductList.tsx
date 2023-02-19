import React from 'react';
import styles from './ProductList.module.css'
import Product from "../Product/Product";
import {ProductListProps} from "./ProductList.props";

const ProductList = ({products}: ProductListProps) => {
    return (
        <div className={styles.list}>
            {products.products.map(product => <Product product={product}/>)}
        </div>
    );
};

export default ProductList;