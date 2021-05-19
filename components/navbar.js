import Link from 'next/link'
import styles from './navbar.module.css'
import { useState, useEffect } from 'react'
// React component that defines the navigation bar

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

export default function Navbar() {
    const [backgroundOpacity, setBackgroundOpacity] = useState(0)

    const handleScroll = () => {
        if (window.pageYOffset == 0) {
            setBackgroundOpacity(0)
        }
        else if (window.pageYOffset < 60) {
            setBackgroundOpacity(window.pageYOffset / 65)
        } else {
            setBackgroundOpacity(1)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    });
    const navbarStyle = {
        background: `linear-gradient(to bottom, rgba(255,255,255, ${backgroundOpacity}) 85%, rgba(255, 255, 255, 0))`
        //backgroundColor: `rgba(240,240,240, ${backgroundOpacity})`
    }

    return (
        <nav className={styles.navbar} style={navbarStyle}>
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
