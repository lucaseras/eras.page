import Link from 'next/link'
import styles from './navbar.module.css'
import {useState} from 'react'
// React component that defines the navigation bar

const items = [
    {
        title: "/contact",
        url: "contact"
    },
    {
        title: "/about",
        url: "about",
        cName: 'nav-links'
    },

    //{
        //title: "/home",
        //url: "#",
        //cName: 'nav-links'
    //}

]

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
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
