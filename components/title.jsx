import Image from 'next/image'
import styles from '../styles/title.module.css'
import Link from 'next/link'
import {useTheme} from '../styles/theme'

export default function Title() {
    const [, , themeSwitch] = useTheme()
    return (
        <div
            className={styles.mainContainer}
        >
            <div className={styles.logo}>
            <Image
                src='/logo.png'
                height={70}
                width={70}
                onClick={themeSwitch}
            />
            </div>
            <div className={styles.titleName}>
                <Link href='/' passHref>
                    eras.page
                </Link> 
                </div>
        </div>
    )
}
