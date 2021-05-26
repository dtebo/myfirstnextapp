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
                <div className={aboutStyles.description}>
                    <p>
                        This app is designed to demonstrate the capabilities of NextJS.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About