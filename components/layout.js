import Head from 'next/head'
import styles from '../styles/layout.module.css'
import {useTheme} from '../styles/theme'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export const siteTitle = 'eras.page'


export default function Layout({children}) {
    const [isDark, themeStyle,]= useTheme()

    return (
        <div
            className={styles.mainContainer}>
            <Head>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel='icon' type='image/png' href='/favicon.png' />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <main>{children}</main>
            </div>
            <Footer />
            <style jsx global>{`
                body {
                background-color: ${themeStyle.background};
                color: ${themeStyle.color};
                }
                a {
                color: ${themeStyle.color}
                }
                p {
                color: ${themeStyle.color}
                }
                a:hover{
                color: ${isDark ? 'skyblue' : 'peru'}
                }
                `}
            </style>
        </div>
    )
} 
