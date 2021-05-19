import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/getMDData'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'
import Head from 'next/head'

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id, 'projects')
    return {
        props: {
            postData
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

export default function Project({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.projectTitle}>{postData.title}</h1>
                <h4 className={utilStyles.github}>
                <a href={postData.link}>GitHub</a></h4>
                <h4 className={utilStyles.author}>{postData.author} </h4>
            <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>)
}
