/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FaDiscord, FaReddit, FaSun, FaMoon, FaBars } from "react-icons/fa";
import { useState } from "react";

if(!global.lightTheme)
    global.lightTheme = true;

export default function Header() {
    const [lightTheme, setLightTheme] = useState(global.lightTheme);

    const themeChange  = () => {
        var element = document.body;
        element.classList.toggle(styles.darkMode);
        global.lightTheme = !lightTheme;
        setLightTheme(!lightTheme);
    }
    return (
        <header>
            <Link href="/">
                <img src="icons/icon-indigo.svg" />
            </Link>
            <div className="alignItems-h" align="right">
                <button className={styles.blueBtn} onClick={() => { window.open('https://www.reddit.com/r/shastraos', "_blank") }}><FaReddit className={styles.icon}/>REDDIT</button>        
                <button className={styles.blueBtn} onClick={() => { window.open('https://discord.gg/5Z4UMvhppm', "_blank") }}><FaDiscord className={styles.icon}/>SUPPORT</button>
                <button className={styles.changeTheme} onClick={themeChange} title="Change Theme">{lightTheme ? <FaSun className={styles.faSun} /> : <FaMoon />}</button>
            </div>

            <div class="dropdown">
  <button className="dropbtn"><FaBars className={styles.faSun} /></button>
  <div className="dropdown-content">
    <br></br>
  <a className={styles.blueBtn} onClick={() => { window.open('https://www.reddit.com/r/shastraos', "_blank") }}><FaReddit className={styles.icon}/>REDDIT</a>        
                <a className={styles.blueBtn} onClick={() => { window.open('https://discord.gg/5Z4UMvhppm', "_blank") }}><FaDiscord className={styles.icon}/>SUPPORT</a>
                <a className={styles.changeTheme} onClick={themeChange} title="Change Theme">{lightTheme ? <FaSun className={styles.faSun} /> : <FaMoon />}</a>
  </div>
</div>
        </header>
    )
}
