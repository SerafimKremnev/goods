import React, {useRef, useState} from 'react';
import styles from './Main.module.css';
import {MainProps} from "./Main.props";
import cn from "classnames";
import Sidebar from "../Sidebar/Sidebar";
import Sort from './sort.svg';


const Main = ({children, className, ...props}: MainProps) => {
    const [open, setOpen] = useState<boolean>(false);



    return (
        <main className={cn(className, styles.main)}>
            <Sidebar className={cn(styles.sidebar, {
                [styles.sidebarOpen]: open
            })}/>
            <Sort onClick={() => setOpen(!open)} className={styles.sort}/>
            <div {...props}>
                {children}
            </div>
        </main>
    );
};

export default Main;