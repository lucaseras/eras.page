// React component that defines the navigation bar
import styles from './navbar.module.css'
import {useState} from 'react'

const items = [
    {
        title: "Home",
        url: "#",
        cName: 'nav-links'
    },
    {
        title: "About",
        url: "about",
        cName: 'nav-links'
    },
    {
        title: "Contact",
        url: "contact"
    }

]

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
        <h1 className={styles.h1}>Lucas Eras Paiva</h1>
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
