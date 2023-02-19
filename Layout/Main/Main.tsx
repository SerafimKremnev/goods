import React from 'react';
import styles from './Main.module.css';
import {MainProps} from "./Main.props";
import cn from "classnames";
import Sidebar from "../Sidebar/Sidebar";

const Main = ({children, className, ...props}: MainProps) => {
    return (
        <main className={cn(className, styles.main)}>
            <Sidebar className={styles.sidebar}/>
            <div {...props}>
                {children}
            </div>
        </main>
    );
};

export default Main;