import Head from 'next/head'
import aboutStyles from '../styles/About.module.css'

const About = () => {
    return(
        <>
            <Head>
                <title>My First NextJS App - About</title>
            </Head>
            <section className={aboutStyles.wrapper}>
                <h1>About FirstNextJS</h1>
            </section>
        </>
    )
}

export default About