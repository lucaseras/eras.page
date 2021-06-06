import '../styles/global.css'
import {ThemeProvider} from '../styles/theme'
import React from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    )
}
