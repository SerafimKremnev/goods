import React from 'react';
import styles from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";
import cn from "classnames";

const Sidebar = ({className, ...props}: SidebarProps) => {
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            Sidebar
        </div>
    );
};

export default Sidebar;