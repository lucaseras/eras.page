import {useContext} from 'react'
import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { ThemeContext } from '../styles/theme'
import { useRouter } from 'next/router'

export const siteTitle = 'eras.page'


export default function Layout({children, home, post}) {
    const {dark, theme, toggleTheme} = useContext(ThemeContext)
    const router = useRouter()

    return (
        <div
            style={{
                backgroundColor: theme.background,
                color: theme.foreground
            }}
            className={styles.mainContainer}>
            <Head>
                <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
            </Head>
            <Navbar/>
            <button onClick={toggleTheme}>toggle to {!dark ? 'Dark' : 'Light'}</button>
            <p>{theme.background}</p>
            <div className={styles.container}>
                {(!home && !post) && (
                    <div className={styles.back}>
                        <a onClick={() => router.back()}>← Back to home</a>
                    </div>
                )}
                {post && (
                    <div className={styles.back}>
                        <a onClick={() => router.back()}>← Back to blog</a>
                    </div>
                )}
                <main>{children}</main>
            </div>
            <Footer></Footer>
        </div>
    )
} 
