import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/getMDData'
import styles from '../../styles/projects.module.css'
import Date from '../../components/date'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/xonokai'
import { useTheme } from '../../styles/theme'

export async function getStaticProps({params}) {
    const post = await getPostData(params.id, 'projects')
    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds('projects')
    return {
        paths,
        fallback: false
    }
}

export default function Project({post}) {
    // got component setting from https://github.com/remarkjs/react-markdown
    const components = {
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter 
                    style={theme} 
                    language={match[1]}
                    PreTag="div" 
                    children={String(children).replace(/\n$/, '')}
                    {...props} />
            ) : (
                <code className={className} {...props} />
            )
        }
    }
    const [isDark, , ] = useTheme()
    const dateStyle = isDark ? styles.dateDark : styles.dateLight
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article>
                <h1 className={styles.projectTitle}>{post.title}</h1>
                <h4 className={styles.github}>
                    <a href={post.link}>GitHub</a></h4>
                <h4 className={styles.author}>{post.author} </h4>
                <div className={dateStyle}>
                    <Date dateString={post.date} />
                </div>
                <ReactMarkdown components={components} children={post.content}></ReactMarkdown>
            </article>
        </Layout>)
}
