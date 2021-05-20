import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import About from '../components/about'
import Projects from '../components/projects'


export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
            <About />
            <Projects />
            </section>
        </Layout>
    )
}

