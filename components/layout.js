import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'

export const siteTitle = 'eras.page'


export default function Layout({ children, home, post}) {
    return (
        <div className={styles.mainContainer}>
        <Head>
            <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        </Head>
        <Navbar></Navbar>
        <div className={styles.container}>
            {(!home && !post) && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
                )}
                {post && (
                    <div className={styles.backToHome}>
                        <Link href='/blog'>
                            <a>← Back to blog</a>
                        </Link>
                    </div>
            )}
                <main>{children}</main>
            </div>
            <Footer></Footer>
        </div>
)
} 
