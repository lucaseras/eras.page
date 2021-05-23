import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {useRouter} from 'next/router'
import {useTheme} from '../styles/theme'

export const siteTitle = 'eras.page'


export default function Layout({children, home, post}) {
    const [,themeStyle,]= useTheme()
    const router = useRouter()

    return (
        <div
            style={themeStyle}
            className={styles.mainContainer}>
            <Head>
                <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
            </Head>
            <Navbar/>
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
