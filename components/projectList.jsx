import { useTheme } from '../styles/theme'
import { useRouter } from 'next/router'
import styles from '../styles/index.module.css'
import Image from 'next/image'

/*
array projects:
    - title: project title
    - description: project description
    - link: link to project (usually a link to a project page)
    - image: display image (optional but recommended)
*/

export default function Projects({projects, title, id}) {
    const [isDark,,] = useTheme()
    const router = useRouter()
    const projectsAsJSX = projects.map((project, index) => (
        <div 
            className={styles.project}
            key={index}
        >
            {project.image
                ? (
                    <div className={styles.projectsImage}>
                    <Image src={project.image} height={165} width={330}/>
                    </div>
                )
                : ''}
            {project.link
                ? (<h3 className={styles.projectTitle}>
                    <a onClick={() => router.push(project.link)}>{project.title}</a>
                </h3>)
                : <h3 className={styles.projectTitle}>{project.title}</h3>}
            <p className={styles.projectDescription}>{project.description}</p>
        </div>
))
    return (
        <div id={id}>
            <h1 className={styles.h1}>{title}</h1>
            <hr className={isDark ? styles.lineDark : styles.lineWhite} />
            <div className={styles.projects}>
                {projectsAsJSX}
            </div>
        </div>
    );
}
