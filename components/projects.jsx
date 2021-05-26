import { useTheme } from '../styles/theme'
import { useRouter } from 'next/router'
import styles from '../styles/index.module.css'

const projects = [
    {
        title: "Rhythm-login",
        description: "Experimental login security feature",
        //link: "https://github.com/lucaseras/rhythm-login",
        link: "/projects/rhythm-login"
    },
    {
        title: "333-se",
        description: "Software engineering course taught at Wesleyan University",
        //link: "https://github.com/lucaseras/333-creations"
        link: "/projects/333-se"
    },
    {
        title: "Undergrad Senior Thesis",
        description: "Anthropological study of computer science and artificial intelligence as domains of the social sciences",
    },
    {
        title: "Eras.page",
        description: "Handmade personal website, created from scratch using React.js and Next.js",
        //link: "https://github.com/lucaseras/blog"
        link: "/projects/eras-page"
    },
]


export default function Projects() {
    const [isDark,,] = useTheme()
    const router = useRouter()
    const projectTitle = isDark ? styles.projectTitleDark : styles.projectTitleWhite
    const projectsAsJSX = projects.map((project, index) => (
        <div className={styles.project} key={index}>
            {project.link
                ? (<h3 className={projectTitle}>
                    <a onClick={() => router.push(project.link)}>{project.title}</a>
                </h3>)
                : <h3 className={projectTitle}>{project.title}</h3>}
            <p className={styles.projectDescription}>{project.description}</p>
        </div>
))
    return (
        <div>
            <h1 className={styles.h1}>Projects</h1>
            <hr className={isDark ? styles.lineDark : styles.lineWhite} />
            <div className={styles.projects}>
                {projectsAsJSX}
            </div>
        </div>
    );
}
