import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/footer.module.css'
import useWindowDimensions from './useWindowDimensions'
import {useTheme} from '../styles/theme'

export default function bottom() {
    const [isDark, , ] = useTheme()
    const {width} = useWindowDimensions();

    const githubLogo = (
        <div>
        <Link
            href='https://github.com/lucaseras'
        >
            <a>
                <Image
                    className={`${isDark ? styles.inverted : ''}`}
                    src='/github.png'
                    alt={'Github account'}
                    width={34}
                        height={34}
                    />
                <p style={{marginTop: '0px'}}>GitHub</p>
            </a>
        </Link>
        </div>
    )

    const linkedinLogo = (
        <div>
        <Link
            href='https://www.linkedin.com/in/lucaseraspaiva/'
        >
            <a>
                <Image
                    className={`${isDark ? styles.inverted : ''}`}
                    src='/linkedin.png'
                    alt={'Linkedin account'}
                    width={34}
                    height={34}
                />
                <p style={{marginTop: '0px'}}>LinkedIn</p>
            </a>
        </Link>
        </div>
    )

    const madeByText = (width) => {
        if (width > 500) {
            return "Made by Lucas Eras using React.js and Next.js"
        } else {
            return "Made by Lucas Eras"
        }
    }
    return (
        <div className={styles.main}>
            <p className={styles.text}>
                {madeByText(width)}
            </p>
            <div className={styles.logos}>
                {githubLogo}
                {linkedinLogo}
            </div>
        </div>
    )
}
