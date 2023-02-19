import React from 'react';
import {ButtonProps} from "./Button.props";
import styles from './Button.module.css'
import cn from "classnames";

const Button = ({children, className, ...props}: ButtonProps) => {
    return (
        <button {...props} className={cn(className, styles.button)}>
            {children}
        </button>
    );
};

export default Button;