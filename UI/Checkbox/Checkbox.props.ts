import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {AllProducts, IProduct} from "../../interfaces/products.interface";

export interface CheckboxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    children: ReactNode,
    products: AllProducts
    category: string[]
    setCategory: (categories: string[]) => void
}