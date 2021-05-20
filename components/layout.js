import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const siteTitle = 'eras.page'


export default function Layout({children, home, post}) {
    const router = useRouter()
    return (
        <div className={styles.mainContainer}>
            <Head>
                <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
            </Head>
            <Navbar></Navbar>
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
