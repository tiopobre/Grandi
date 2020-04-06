import React from 'react';
import Link from 'next/link';
import Header from './header'
import Head from 'next/head'
import Footer from './footer';
//import { Global, css } from ''
const layaout = (props) => {
    return (
        <>
            <Head>
                <title>Grandi</title>
                <link href="/static/css/app.css" rel="stylesheet" />
                <link href="/static/css/perfil.css" rel="stylesheet" />
                <link href="/static/css/desc_planta.css" rel="stylesheet" />
                <link href="/static/css/footer.css" rel="stylesheet" />
                <link href="/static/css/seccion.css" rel="stylesheet" />
                <link href="/static/css/login.css" rel="stylesheet" />
                <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
            </Head>


            <Header/>
            
            <main>
                {props.children}
            </main>

            <Footer/>
            <script src="/static/js/jquery-3.4.1.min.js" />
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous" />
            <script src="/static/js/bootstrap.min.js" />
        </>
    );
};

export default layaout;