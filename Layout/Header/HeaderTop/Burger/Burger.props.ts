import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface BurgerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    burger: boolean,
    setBurger: (value: boolean) => void
}