import React from 'react'
import styles from '../styles/Home.module.css'
import { MdOutlineDownload, MdCode, MdOutlineOpenInBrowser } from "react-icons/md";



export default function Header() {
    return (
        <header>
            <a href="/">
                <img src="shastralogo.png" />
            </a>
            <div className="alignItems">
            <button className={styles.blueBtn} onClick={() => { window.open('https://github.com/shastra-os', "_blank") }}><MdCode className={styles.icon}/>GitHub</button>
                <button className={styles.blueBtn} onClick={() => { window.open('https://osdn.net/frs/redir.php?m=nchc&f=shastraos%2F77132%2FShastraDignity-Beta-2022.04.27-x86_64.iso', "_blank") }}><MdOutlineDownload className={styles.icon}/>Install</button>
            </div>
        </header>
    )
}
