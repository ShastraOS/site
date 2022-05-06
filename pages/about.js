import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'
import { MdCode,MdDownload,MdPerson } from "react-icons/md";

export default function About() {
    return (
        <div className={'container'}>
            <Head>
                <title>About Shastra</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.duoGrid}>
                    <section>
                        <h1 className={styles.title}>Shastra OS</h1>
                        <h3>A Linux based OS comes with privacy and security.</h3>
                    </section>
                    <div className={styles.aboutScroll}>
                        <h2>Developers</h2>
                        Shastra OS is developed and designed by Vivek and Akshat in 2022.
	                    Shastra is currently under development. It is completely free and open-source, code is available on Github.
                        <h3>What makes it different?</h3>
                        It is the operating system that is completely built for Web 3 users. It is built on top of vanilla Arch Linux.
                        It is optimized for fast browsing and privacy and security.

                        <ul>
                            <ol>Comes with pre-installed Brave Browser</ol>
                            <ol>Latest Gnome Desktop with multiple falvours</ol>
                            <ol>Your Wallet Manager for Ethereum and Bitcoin</ol>
                        </ul>

                        <h3>Why Shastra</h3>
                        <ul>
                            <li>Completely yours</li>
                            <li>Customize it in your way</li>
                            <li>We need a new OS for a new generation</li>
                            <li>Play your games with a smooth experience</li>
                            <li>Privacy and Security are your right</li>
                        </ul>

                        <h4>When is it going to release officially?</h4>
                        Shastra OS is currently under development.
                        The beta release is out there.
                        The first release of Shastra-Dignity would be released in 2022.

                        Shastra Dignity is a rolling release version of Shastra OS.

                        <hr />
                        <h2>Beta Release</h2>
                        <p>The beta release is available. It is an unstable version for now. But you can test it out and contribute to this open-source project.</p>
                        <div className={styles.buttonGap}>
                            <button className={styles.whiteBtn} onClick={() => { window.open('https://github.com/shastra-os', "_blank") }}><MdCode className={styles.icon}/>GitHub</button>
                            <button className={styles.whiteBtn} onClick={() => { window.open('https://osdn.net/projects/shastraos/downloads/77132/ShastraDignity-Beta-2022.05.07-x86_64.iso/', "_blank") }}><MdDownload className={styles.icon}/>Download</button>
                        </div>

                        <hr />
                        <p>Latest Realeses <a href="https://github.com/shastra-os/iso-build/releases">GitHub</a></p>
                        <p>Thanks for Visiting us</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

<Footer />