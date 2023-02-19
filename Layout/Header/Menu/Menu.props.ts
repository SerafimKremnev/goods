import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    openCategory: boolean,
    setOpenCategory: (openCategory: boolean) => void
}