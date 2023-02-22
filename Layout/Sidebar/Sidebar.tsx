import React, {useEffect, useState} from 'react';
import styles from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";
import cn from "classnames";
import {useProductsSelector} from "../../store";
import Sorting from "./Sorting/Sorting";
import Button from "../../UI/Button/Button";

const Sidebar = ({open, setOpen, className, ...props}: SidebarProps) => {
    const products = useProductsSelector((state) => state.products.allProducts);

    function addBrands() {
        const unique: string[] = [];
        if(products) {
            for(const p of products.products) {
                if(!unique.includes(p.brand)) {
                    unique.push(p.brand);
                }
            }
        }
        return products && unique.map(e => <Sorting typeValue={'brand'} products={products} id={e}>{e}</Sorting>);
    }

    function addCategory() {
        const unique: string[] = [];
        if(products) {
            for(const p of products.products) {
                if(!unique.includes(p.category)) {
                    unique.push(p.category);
                }
            }
        }
        return products && unique.map(e => <Sorting typeValue={'category'} products={products} id={e}>{e}</Sorting>);
    }

    return (
        <div {...props} className={cn( className)}>
            <div className={styles.sidebar}>
                <div>
                    <div className={styles.title}>Categories</div>
                    <div className={styles.brand}>{addCategory()}</div>
                </div>
                <div>
                    <div className={styles.title}>Brand</div>
                    <div className={styles.brand}>{addBrands()}</div>
                </div>
                <Button className={styles.button} onClick={() => setOpen(!open)}>OK</Button>
            </div>
        </div>
    );
};

export default Sidebar;