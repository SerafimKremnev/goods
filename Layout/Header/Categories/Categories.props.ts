import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CategoriesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    categories: unknown,
    openCategory: boolean,
    burger: boolean,
    setBurger: (value: boolean) => void
    setOpenCategory: (value: boolean) => void
}