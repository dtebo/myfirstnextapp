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
                        This app is designed to demonstrate the incredible capabilities of NextJS.
                        These capabilities include: <br />
                        <ul>
                            <li>Simplified Routing</li>
                            <li>Faster load times</li>
                            <li>Heavy Image Optimization</li>
                            <li>Built-in CSS Support</li>
                            <li>Code-splitting and Bundling</li>
                        </ul>
                    </p>
                </div>
            </section>
        </>
    )
}

export default About