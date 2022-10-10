/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FaGithub, FaDiscord, FaReddit } from "react-icons/fa";



export default function Header() {
    return (
        <header>
            <Link href="/">
                <img src="shastralogo.png" />
            </Link>
            <div className="alignItems">
                <button className={styles.blueBtn} onClick={() => { window.open('https://www.reddit.com/r/shastraos', "_blank") }}><FaReddit className={styles.icon}/>REDDIT</button>        
                <button className={styles.blueBtn} onClick={() => { window.open('https://discord.gg/5Z4UMvhppm', "_blank") }}><FaDiscord className={styles.icon}/>SUPPORT</button>
            </div>
        </header>
    )
}
