import React, { useState} from 'react';
import styles from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";
import cn from "classnames";
import Checkbox from "../../UI/Checkbox/Checkbox";
import {useProductsSelector} from "../../store";

const Sidebar = ({className, ...props}: SidebarProps) => {
    const products = useProductsSelector((state) => state.products.allProducts);
    const [category, setCategory] = useState<string[]>([]);

    function addBrands() {
        const unique: string[] = [];

        if(products) {
            for(const p of products.products) {
                if(!unique.includes(p.brand)) {
                    unique.push(p.brand);
                }
            }
        }
        return products && unique.map(e => <Checkbox category={category} setCategory={setCategory} products={products} id={e}>{e}</Checkbox>);
    }

    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <div className={styles.title}>Brand</div>
            <div className={styles.brand}>{addBrands()}</div>
        </div>
    );
};

export default Sidebar;