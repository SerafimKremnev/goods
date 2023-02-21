import React, {useEffect, useState} from 'react';
import {SortingProps} from "./Sorting.props";
import {useDispatch} from "react-redux";
import {addSort, removeSort, sortProducts} from "../../../store/productsSlice";
import {useRouter} from "next/router";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import {useProductsSelector} from "../../../store";

const Sorting = ({id, children, typeValue, className, products, ...props}: SortingProps) => {
    const router = useRouter();
    const [checked, setChecked] = useState<boolean>(false);
    const dispatch = useDispatch();
    const sorting = useProductsSelector(state => state.products.binder);

    const handleSubmit= () => {
        setChecked(!checked);
    };
    useEffect(() => {
        setChecked(false);
    }, [router.asPath]);


    useEffect(() => {
        if(checked) {
            dispatch(addSort({value: id, type: typeValue}));
        } else {
            dispatch(removeSort({value: id, type: typeValue}));
        }
    }, [checked]);

    useEffect(() => {
        dispatch(sortProducts());
    }, [sorting]);

    return (
        <Checkbox id={id} handleSubmit={handleSubmit} checked={checked}>{children}</Checkbox>
    );
};

export default Sorting;