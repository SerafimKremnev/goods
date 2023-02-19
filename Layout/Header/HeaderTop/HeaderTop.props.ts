import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface HeaderTopProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children?: ReactNode,
    burger: boolean,
    setBurger: (value: boolean) => void
}