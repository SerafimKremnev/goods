import React, {useRef, useState} from 'react';
import styles from './Main.module.css';
import {MainProps} from "./Main.props";
import cn from "classnames";
import Sidebar from "../Sidebar/Sidebar";
import Sort from './sort.svg';
import SortTwo from './sort2.svg';
import {useDispatch} from "react-redux";
import {sortBy} from "../../store/productsSlice";


const Main = ({children, className, ...props}: MainProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [sortOpen, setSortOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    return (
        <main className={cn(className, styles.main, {
            [styles.mainHidden]:open
        })}>
            <Sidebar setOpen={setOpen} open={open} className={cn(styles.sidebar, {
                [styles.sidebarOpen]: open
            })}/>
            <div className={styles.filter}>
                <Sort onClick={() => {
                    setOpen(!open);
                    setSortOpen(false);
                }} className={styles.sort}/>
                <div onClick={() => setSortOpen(!sortOpen)} className={styles.sortBy}>
                    <div>Sort By</div>
                    <SortTwo className={styles.sortTwo}/>
                    <div className={cn(styles.sortAdd, {
                        [styles.sortAddOpen]: sortOpen
                    })}>
                        <button onClick={() => dispatch(sortBy("minPrice"))}>Min Price</button>
                        <button onClick={() => dispatch(sortBy("maxPrice"))}>Max Price</button>
                        <button onClick={() => dispatch(sortBy("maxRating"))}>Max Rating</button>
                        <button onClick={() => dispatch(sortBy("default"))}>Default</button>
                    </div>
                </div>
            </div>
            <div className={styles.body} {...props}>
                {children}
            </div>
        </main>
    );
};

export default Main;