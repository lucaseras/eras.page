import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.css'
import useWindowDimensions from './useWindowDimensions'

const githubLogo = (
    <Link
        href='https://github.com/lucaseras'
    >
        <a>
            <Image
                src='/github.png'
                alt={'Github account'}
                width={32}
                height={32}
            />
        </a>
    </Link>
)

const linkedinLogo = (
    <Link
        href='https://www.linkedin.com/in/lucaseraspaiva/'
    >
        <a>
            <Image
                src='/linkedin.png'
                alt={'Linkedin account'}
                width={34}
                height={34}
            />
        </a>
    </Link>
)

const madeByText = (width) => {
    if (width > 500) {
        return "Made by Lucas Eras using React.js and Next.js"
    } else {
        return "Made by Lucas Eras"
    }
}

export default function bottom() {
    const {width} = useWindowDimensions();

    if (width > 500) {
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
    } else {
        return (
            <div className={styles.main}>
                <p className={styles.text}>Made by Lucas Eras</p>
                <div className={styles.logos}>
                    {githubLogo}
                    {linkedinLogo}
                </div>
            </div>
        )

    }
}
