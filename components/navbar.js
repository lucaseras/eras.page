import Link from 'next/link'
import styles from './navbar.module.css'
import { useTheme } from '../styles/theme'
import ThemeSwitch from './themeSwitcher'
// React component that defines the navigation bar


export default function Navbar() {
    const items = [
        {
            title: "/contact",
            url: "/contact"
        },
        {
            title: "/blog",
            url: "/blog",
        },

    ]
    const [,themeStyle,] = useTheme()
    return (
        <nav
            style={themeStyle}
            className={styles.navbar}>
            <Link href='/'>
                <h1 className={styles.h1}>
                    <a className={styles.a}>eras.page</a>
                </h1>
            </Link>
            <div className={styles.rightSide}>
            <ul className={styles.ul}>
                {items.map((item, index) => {
                    return (
                        <li key={index} className={styles.li}>
                            <a className={styles.a} href={item.url}>
                                {item.title}
                            </a>
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
