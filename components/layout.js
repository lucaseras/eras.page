import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'

export const siteTitle = 'eras.page'

export default function Layout({ children, home }) {
    return (
        <>
        <Head>
            <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        </Head>

        <Navbar></Navbar>
        <div className={styles.container}>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            <main>{children}</main>
        </div>
        </>
)
} 
