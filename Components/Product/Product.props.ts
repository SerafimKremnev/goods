import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IProduct} from "../../interfaces/products.interface";

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IProduct
}