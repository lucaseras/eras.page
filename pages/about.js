import Head from 'next/head'
import Image from 'next/image'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function About() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headerMd}>
                <Image
                    src="/profile.png"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={"Lucas Eras Paiva"}
                />
            </section>
        </Layout>
    )
}
