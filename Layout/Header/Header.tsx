import React, {useState} from 'react';
import styles from './Header.module.css';
import {HeaderProps} from "./Header.props";
import cn from "classnames";
import Basket from './icons/basket.svg'
import User from './icons/account.svg'
import {useSelector} from "react-redux";
import Categories from "./Categories/Categories";
import Link from "next/link";

const needCategory: string[] = [
    'smartphones', 'laptops', 'womens', 'mens', 'fragrances', 'furniture',
];

const Header = ({className, ...props}: HeaderProps) => {
    const [openCategory, setOpenCategory] = useState<boolean>(false)
    const category: unknown = useSelector<Record<string, Record<string, string[]>>>(state => state.category.category);
    return (
        <>
            <div {...props} className={cn(className, styles.header)}>
                <h1 className={styles.logo}><Link href={'/'}>gooods</Link></h1>
                <div className={styles.info}>
                    <User className={styles.icon}/>
                    <Basket className={styles.icon}/>
                </div>
                <div className={cn(styles.categories, {
                    [styles.categoryOpenCategory]: openCategory
                })}>
                    <div onMouseEnter={() => setOpenCategory(true)}
                         onMouseLeave={() => setOpenCategory(false)}
                         className={cn(styles.allCategories, styles.category)}>
                        categories
                    </div>
                    {needCategory.map(e => <Link href={e == 'mens' || e == 'womens'? `/products/${e}` : `/products/category/${e}`} className={styles.category}>{e}</Link>)}
                    <Link href={'/products'} className={styles.category}>all goods</Link>
                </div>
                <Categories
                    openCategory={openCategory}
                    onMouseEnter={() => setOpenCategory(true)}
                    onMouseLeave={() => setOpenCategory(false)}
                    className={cn(styles.allCategoriesBlock, {
                    [styles.allCategoriesBlockOpen]: openCategory,
                })} categories={category}/>
            </div>
        </>
    );
};

export default Header;