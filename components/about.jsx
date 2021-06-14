import { useTheme } from '../styles/theme'
import Image from 'next/image'
import styles from '../styles/about.module.css'

const aboutText = (
    `Hello there! My name is Lucas Eras Paiva. I'm a programmer and an
    anthropologist interested in using my mixed bag of skills to positively impact the life of others. Below you will find some of my projects and interests. 
    Feel free to reach out at
    lucaseraspaiva@gmail.com`
)


export default function About() {
    const [isDark,,] = useTheme()
    return (
        <div className={styles.main}>
            <div className={styles.floating}/>
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
