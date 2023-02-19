import {DetailedHTMLProps, HTMLAttributes} from "react";
import {AllProducts, IProduct} from "../../interfaces/products.interface";

export interface ProductListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    products: AllProducts
}