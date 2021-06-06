import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import {useTheme} from '../styles/theme'
import Image from 'next/image'
import ThemeSwitch from './themeSwitcher'
// React component that defines the navigation bar


export default function Navbar() {
    const items = [
        //{
            //title: "/contact",
            //url: "/contact"
        //},
        //{
            //title: "/blog",
            //url: "/blog",
        //},

    ]
    const [,themeStyle,] = useTheme()
    return (
        <nav
            style={{ background: themeStyle.background }}
            className={styles.navbar}>
            <Link href='/'>
                <h1 className={styles.h1}>
                    <Image
                        src='/icon@3x.png'
                        alt='Website icon'
                        width={30}
                        height={30}
                    />

                    <a className={styles.a}>eras.page</a>
                </h1>
            </Link>
            <div className={styles.rightSide}>
            <ul className={styles.ul}>
                {items.map((item, index) => {
                    return (
                        <li key={index} className={styles.li}>
                            <Link href={item.url}>
                                <a className={styles.a} >
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    )
                })}
                </ul>
                <div className={styles.switchDiv}>
                <ThemeSwitch />
                </div>
            </div>
        </nav>
    )
}
