import About from '../components/about'
import Programming from '../components/programming'
import Writing from '../components/writing'
import Engineering from '../components/engineering'
import Art from '../components/art'


export default function Home() {
    return (
        <section>
            <About />
            <Programming />
            <Writing />
            <Engineering />
            <Art />
        </section>
    )
}
