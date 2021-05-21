import '../styles/global.css'
import {ThemeProvider} from '../styles/theme'
import React from 'react';

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
