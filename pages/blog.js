import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getFilesData } from '../lib/getMDData'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
    const allPostsData = getFilesData('posts').sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    const postsAsList =
        (allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                </small>
            </li>
        )))

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Website under construction. Feel free to look around!</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {postsAsList}
                </ul>
            </section>
        </Layout>
    )
}

