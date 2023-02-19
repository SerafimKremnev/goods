import React from 'react';
import {CategoriesProps} from "./Categories.props";
import cn from "classnames";
import styles from './Categories.module.css'
import Link from "next/link";

const Categories = ({categories, openCategory, className, ...props}: CategoriesProps) => {
    return (
        <div className={className}>
            <div {...props} className={cn(styles.categories, {
                [styles.categoriesActive]: openCategory
            })}>
                {Array.isArray(categories) ? categories.map(c => <Link href={`/products/category/${c}`}>{c}</Link>) : <></>}
            </div>
        </div>
    );
};

export default Categories;