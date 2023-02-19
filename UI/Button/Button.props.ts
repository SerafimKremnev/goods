import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {IProduct} from "../../interfaces/products.interface";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode
}