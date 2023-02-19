import React, {FunctionComponent} from 'react';
import {LayoutProps} from "./Layout.props";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from './Layout.module.css';
import {HomeProps} from "../pages";
import Main from "./Main/Main";
import {TypeProps} from "../pages/products/[type]";

const Layout = ({children}: LayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Main className={styles.main}>
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