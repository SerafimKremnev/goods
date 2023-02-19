import React from 'react';
import styles from "./HeaderTop.module.css";
import Link from "next/link";
import User from "./icons/account.svg";
import Basket from "./icons/basket.svg";
import {HeaderTopProps} from "./HeaderTop.props";
import Burger from "./Burger/Burger";
import cn from "classnames";

const HeaderTop = ({className, burger, setBurger} : HeaderTopProps) => {
    return (
        <div className={cn(className, styles.headerTop)}>
            <h1 className={styles.logo}><Link href={'/'}>gooods</Link></h1>
            <div className={styles.info}>
                <User className={styles.icon}/>
                <Basket className={styles.icon}/>
                <Burger burger={burger} setBurger={setBurger}/>
            </div>
        </div>
    );
};

export default HeaderTop;