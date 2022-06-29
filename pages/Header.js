import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { MdOutlineDownload, MdCode, MdOutlineOpenInBrowser, MdChat } from "react-icons/md";



export default function Header() {
    return (
        <header>
            <Link href="https://shastraos.vercel.app/">
                <img src="shastralogo.png" />
            </Link>
            <div className="alignItems">
                <button className={styles.blueBtn} onClick={() => { window.open('https://github.com/shastra-os', "_blank") }}><MdCode className={styles.icon}/>CODE</button>
                <button className={styles.blueBtn} onClick={() => { window.open('https://discord.gg/5Z4UMvhppm', "_blank") }}><MdChat className={styles.icon}/>SUPPORT</button>
            </div>
        </header>
    )
}
