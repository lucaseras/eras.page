import Link from 'next/link'
import Image from 'next/image'
import styles from './index.module.css'

const aboutText = (
    "Hello there! My name is Lucas Eras Paiva. I'm a programmer and an anthropologist interested in doing good change in this world. I value empathy, sincerity, and diversity."
)


export default function About() {
    return (
        <div>
            <h1 className={styles.h1}>About me</h1>
            <hr className={styles.line} />
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
