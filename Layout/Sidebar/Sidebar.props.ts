import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    open: boolean,
    setOpen: (T: boolean) => void
}