import '../styles/global.css'
import {ThemeProvider} from '../styles/theme'
import React from 'react';
import Layout from '../components/layout'

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}
