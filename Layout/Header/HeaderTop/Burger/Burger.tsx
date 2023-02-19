import React, {useState} from 'react';
import styles from "./Burger.module.css";
import {BurgerProps} from "./Burger.props";
import cn from "classnames";

const Burger = ({burger, setBurger, ...props} : BurgerProps) => {
    const block = () => {
        setBurger(!burger);
        const body = document.getElementsByTagName('body');
    };
    return (
        <div onClick={block} className={cn(styles.burger, styles.burgerOpen, {
            [styles.burgerClose]: burger
        })}></div>
    );
};

export default Burger;