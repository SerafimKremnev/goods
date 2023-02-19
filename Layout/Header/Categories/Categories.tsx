import React from 'react';
import {CategoriesProps} from "./Categories.props";
import cn from "classnames";
import styles from './Categories.module.css'
import Link from "next/link";
import HeaderTop from "../HeaderTop/HeaderTop";

const Categories = ({burger, setBurger, categories, setOpenCategory, openCategory, className, ...props}: CategoriesProps) => {
    const close = () => {
        setOpenCategory(false);
        setBurger(false)
    }
    return (
        <div className={className}>
            <div {...props} className={cn(styles.categories, {
                [styles.categoriesActive]: openCategory,
            })}>
                {Array.isArray(categories) ? categories.map(c => <Link onClick={close} href={`/products/category/${c}`}>{c}</Link>) : <></>}
                <Link onClick={close} href={`/products`}>all goods</Link>
            </div>
        </div>
    );
};

export default Categories;