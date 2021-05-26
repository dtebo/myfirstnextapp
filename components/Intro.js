import introStyles from '../styles/Intro.module.css'

import Link from 'next/link'

const Intro = () => {
    return (
        <>
            <section>
                <h1>My First NextJS App!</h1>
                <p>Welcome to my first next app. I hope you like what you see!</p>
                <p>
                    Please visit my favorite news site, Read{'\n'}
                    <Link href='https://www.neowin.net'>
                        <a className={introStyles.link}>Neowin</a>
                    </Link>
                </p>
            </section>
        </>
    )
}

export default Intro