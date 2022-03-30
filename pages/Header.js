import React from 'react'
import styles from '../styles/Home.module.css'
import { MdOutlineDownload, MdOutlineOpenInBrowser } from "react-icons/md";



export default function Header() {
    return (
        <header>
            <a href="/">
                <img src="shastralogo.png" />
            </a>
            <div className="alignItems">
                <button className={styles.blueBtn} onClick={() => { window.open('https://osdn.net/projects/shastraos/downloads/77092/Shastra-pre-2022.03.31-x86_64.iso/', "_blank") }}><MdOutlineDownload className={styles.icon}/>Download</button>
            </div>
        </header>
    )
}
