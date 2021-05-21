import Link from 'next/link'
import styles from './navbar.module.css'
import { ThemeContext } from '../styles/theme'
import {useContext} from 'react'
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
    const {theme, toggleTheme} = useContext(ThemeContext)
    const style = {
        background: theme.background,
        color: theme.foreground,
    }
    return (
        <nav
            style={style}
            className={styles.navbar}>
            <Link href='/'>
                <h1 className={styles.h1}>
                    <a className={styles.a}>eras.page</a>
                </h1>
            </Link>
            <ul className={styles.ul}>
                {items.map((item, index) => {
                    return (
                        <li key={index} className={styles.li}>
                            <a className={styles.a} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )})}
            </ul>
        </nav>
    )
}
