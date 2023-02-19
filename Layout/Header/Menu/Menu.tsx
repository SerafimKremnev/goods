import React, {useState} from 'react';
import styles from './Menu.module.css'
import Link from "next/link";
import {MenuProps} from "./Menu.props";
import cn from "classnames";

const needCategory: string[] = [
    'smartphones', 'laptops', 'womens', 'mens', 'fragrances', 'furniture',
];



const Menu = ({className, openCategory, setOpenCategory} : MenuProps) => {

    function onClose() {
        if (document.documentElement.clientWidth > 900) {
            setOpenCategory(false)
        } else {
            return;
        }
    }

    return (
        <div className={cn(styles.categories, {
            [styles.categoryOpenCategory]: openCategory
        })}>
            <div onMouseEnter={() => setOpenCategory(true)}
                 onMouseLeave={onClose}
                 onClick={() => setOpenCategory(!openCategory)}
                 className={cn(styles.allCategories, styles.category)}>
                categories
            </div>
            {needCategory.map(e => <Link href={e == 'mens' || e == 'womens'? `/products/${e}` : `/products/category/${e}`} className={cn(styles.category, styles.categoryHidden)}>{e}</Link>)}
            <Link href={'/products'} className={styles.category}>all goods</Link>
        </div>
    );
};

export default Menu;