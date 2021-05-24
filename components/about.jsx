import { useTheme } from '../styles/theme'
import Image from 'next/image'
import styles from '../styles/index.module.css'

const aboutText = (
    `Hello there! My name is Lucas Eras Paiva. I'm a programmer and an
    anthropologist interested in doing good change in this world. I value
    empathy, sincerity, and diversity.
    Feel free to reach out at
    lucaseraspaiva@gmail.com`
)


export default function About() {
    const [isDark,,] = useTheme()
    return (
        <div>
            <h1 className={styles.h1}>About me</h1>
            <hr className={isDark ? styles.lineDark : styles.lineWhite} />
            <div className={styles.content}>
                <p className={styles.about}>
                    {aboutText}
                </p>
                <div className={styles.imagediv}>
                    <Image
                        src="/profile.png"
                        className={styles.image}
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                </div>

            </div>
        </div>
    );
}
