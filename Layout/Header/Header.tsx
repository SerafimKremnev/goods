import React, {useState} from 'react';
import styles from './Header.module.css';
import {HeaderProps} from "./Header.props";
import cn from "classnames";
import {useSelector} from "react-redux";
import Categories from "./Categories/Categories";
import HeaderTop from "./HeaderTop/HeaderTop";
import Menu from "./Menu/Menu";

const Header = ({burger, setBurger,className, ...props}: HeaderProps) => {
    const [openCategory, setOpenCategory] = useState<boolean>(false);

    const category: unknown = useSelector<Record<string, Record<string, string[]>>>(state => state.category.category);
    return (
        <div className={cn(className, styles.header)}>
            <HeaderTop burger={burger} setBurger={setBurger} className={styles.headerTop}/>
            <Menu setOpenCategory={setOpenCategory} openCategory={openCategory}/>
            <Categories
                setOpenCategory={setOpenCategory}
                burger={burger}
                setBurger={setBurger}
                openCategory={openCategory}
                onMouseEnter={() => setOpenCategory(true)}
                onMouseLeave={() => setOpenCategory(false)}
                className={cn(styles.allCategoriesBlock, {
                    [styles.allCategoriesBlockOpen]: openCategory || burger,
            })} categories={category}/>
        </div>
    );
};

export default Header;