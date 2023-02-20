//@ts-nocheck

import React, {useEffect, useState} from 'react';
import styles from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";
import cn from "classnames";
import {useSelector} from "react-redux";
import {AllProducts} from "../../interfaces/products.interface";
import Checkbox from "../../UI/Checkbox/Checkbox";

const Sidebar = ({className, ...props}: SidebarProps) => {
    const products: AllProducts = useSelector(state => state.products.allProducts);
    const [category, setCategory] = useState<string[]>([]);

    function addBrands() {
        const unique = new Set(products.products?.map(p => p.brand));
        return [...unique].map(e => <Checkbox category={category} setCategory={setCategory} products={products} id={e}>{e}</Checkbox>);
    }

    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <div className={styles.title}>Brand</div>
            <div className={styles.brand}>{addBrands()}</div>
        </div>
    );
};

export default Sidebar;