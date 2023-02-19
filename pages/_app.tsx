import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../store/index";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Goods</title>
                <link rel={'icon'} href={"/favicon.ico"}/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'}/>
                <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&family=Secular+One&display=swap" rel="stylesheet"/>
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}