import React from 'react';
import styles from './Footer.module.css';
import {FooterProps} from "./Footer.props";
import cn from "classnames";
import { format } from 'date-fns'
const Footer = ({className, ...props}: FooterProps) => {
    return (
        <div {...props} className={cn(className, styles.footer)}>
            2010-{format(Date.now(), 'yyyy')} © goods
        </div>
    );
};

export default Footer;