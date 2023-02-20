import React, {useEffect, useRef, useState} from 'react';
import {CheckboxProps} from "./Checkbox.props";
import styles from './Checkbox.module.css';
import {useDispatch} from "react-redux";
import {sortProducts} from "../../store/productsSlice";
import {useRouter} from "next/router";

const Checkbox = ({id, children, className, products, category, setCategory, ...props}: CheckboxProps) => {
    const router = useRouter();
    const [checked, setChecked] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleSubmit= () => {
        setChecked(!checked);
    };

    return (
        <div className={styles.wrapper}>
            <input checked={checked} onChange={handleSubmit} className={styles.checkbox} type="checkbox" id={id}/>
            <label className={styles.label} htmlFor={id}>{children}</label>
        </div>
    );
};

export default Checkbox;