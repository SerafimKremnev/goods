import React, {useEffect, useState} from 'react';
import {CheckboxProps} from "./Checkbox.props";
import styles from './Checkbox.module.css';

const Checkbox = ({id, checked, children, handleSubmit, ...props}: CheckboxProps) => {

    return (
        <div className={styles.wrapper}>
            <input checked={checked} onChange={handleSubmit} className={styles.checkbox} type="checkbox" id={id}/>
            <label className={styles.label} htmlFor={id}>{children}</label>
        </div>
    );
};

export default Checkbox;