import Link from 'next/link'
import Image from 'next/image'
import styles from './index.module.css'

const projects = [
    {
        title: "Rhythm-login",
        description: "Experimental login security feature",
        link: "https://github.com/lucaseras/rhythm-login"
    },
    {
        title: "333-se",
        description: "Software engineering course taught at Wesleyan University",
        link: "https://github.com/lucaseras/333-creations"
    },
    {
        title: "Undergrad Senior Thesis",
        description: "Anthropological study of computer science and artificial intelligence as domains of the social sciences",
    },
    {
        title: "This website",
        description: "Handmade personal website, created from scratch using React.js and Next.js",
        link: "https://github.com/lucaseras/blog"
    },
]

const projectsAsJSX = projects.map((project) => (
    <div className={styles.project}>
        {project.link 
            ? (<Link href={project.link}>
                <h3 className={styles.projectTitle}>
                    <a>{project.title}</a>
                </h3>
            </Link>)
            : <h3 className={styles.projectTitle}>{project.title}</h3>}
        <p className={styles.projectDescription}>{project.description}</p>
    </div>
))

export default function Projects() {
    return (
        <div>
            <h1 className={styles.h1}>Projects</h1>
            <hr className={styles.line} />
            <div className={styles.projects}>
                {projectsAsJSX}
            </div>
        </div>
    );
}
