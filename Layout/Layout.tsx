import React, {FunctionComponent, useState} from 'react';
import {LayoutProps} from "./Layout.props";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from './Layout.module.css';
import {HomeProps} from "../pages";
import Main from "./Main/Main";
import {TypeProps} from "../pages/products/[type]";
import cn from "classnames";
//todo
const Layout = ({children}: LayoutProps) => {
    const [burger, setBurger] = useState<boolean>(false);

    return (
        <div className={styles.wrapper}>
            <Header burger={burger} setBurger={setBurger} className={styles.header}/>
            <Main className={cn(styles.main, {
                [styles.mainBlock]: burger
            })}>
                {children}
            </Main>
            <Footer className={styles.footer}/>
        </div>
    );
};

const withLayout = <T extends Record<string, unknown> & HomeProps & TypeProps>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};


export default withLayout;