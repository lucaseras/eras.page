import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'

const name = "eras.page"
export const siteTitle = 'eras.page'

export default function Layout({ children, home }) {
const old_header = (
      <header className={styles.header}>
       {home ? (
          <>
            <Image
              priority
              src="/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/profile.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
            )}
    </header>
)
    return (
    <>
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
