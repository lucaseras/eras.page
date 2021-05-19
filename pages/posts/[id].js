import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'
import Head from 'next/head'

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({postData}) {
    return (
        <Layout post>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <h4 className={utilStyles.lightText}>{postData.author} </h4>
            <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>)
}
