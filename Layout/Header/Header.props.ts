import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    burger: boolean,
    setBurger: (value: boolean) => void
}