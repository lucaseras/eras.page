import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {useRouter} from 'next/router'
import {useTheme} from '../styles/theme'

export const siteTitle = 'eras.page'


export default function Layout({children, home}) {
    const [isDark, themeStyle,]= useTheme()
    const router = useRouter()

    return (
        <div
            className={styles.mainContainer}>
            <Head>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel='icon' type='image/png' href='/favicon.png' />
            </Head>
            <div className={styles.container}>
                {(!home) && (
                    <div className={isDark ? styles.backDark : styles.backWhite}>
                        <a onClick={() => router.back()}>← Back to home</a>
                    </div>
                )}
                <main>{children}</main>
            </div>
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
