import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {AllProducts} from "../../../interfaces/products.interface";

export interface SortingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    children: ReactNode,
    products: AllProducts,
    typeValue: 'category' | 'brand'
}