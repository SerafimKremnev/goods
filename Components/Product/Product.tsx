import React from 'react';
import {ProductProps} from "./Product.props";
import styles from './Product.module.css'
import Button from "../../UI/Button/Button";

const Product = ({product}: ProductProps) => {
    return (
        <div className={styles.product}>
            <img className={styles.image} src={product.thumbnail} alt=""/>
            <div className={styles.name}>{product.title}</div>
            <div className={styles.price}>{product.price}$</div>
            <div className={styles.rating}>★{product.rating}</div>
            <Button className={styles.button}>Add +</Button>
        </div>
    );
};

export default Product;