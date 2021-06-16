import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import {useTheme} from '../styles/theme'
import Image from 'next/image'
import ThemeSwitcher from './themeSwitcher'
import useWindowDimensions from '../components/useWindowDimensions'
// React component that defines the navigation bar


export default function Navbar() {
    const {width} = useWindowDimensions();
    const items = [
        {
            title: "programming",
            id: 'programming',
        },
        {
            title: "writing",
            id: 'writing',
        },
        {
            title: "engineering",
            id: 'engineering',
        },
        {
            title: "art",
            id: 'art',
        },

    ]
    const [, themeStyle,] = useTheme()
    const handleClick = (id) => {
        const element = document.getElementById(id)
        if (!element) { 
            document.location.href = `/#${id}`;
        } else {
            document.getElementById(id).scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <nav
            style={{ background: themeStyle.navbar }}
            className={styles.navbar}
        >
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
                {(width > 600) ? (
                <ul className={styles.ul}>
                    {items.map((item, index) => {
                        return (
                            <li key={index} className={styles.li}>
                                <a className={styles.a} onClick={() => {handleClick(item.id)}}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                ) 
                : (<></>) }
                <ThemeSwitcher />
            </div>
        </nav>
    )
}
