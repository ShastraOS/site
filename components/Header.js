/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FaSun, FaMoon, } from "react-icons/fa";
// import {Wallet} from "../public/icons/Wallet.png"
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
            <div className="alignItems">
                {/* <button className={styles.blueBtn} >Connect Wallet</button> */}
                <button className={styles.changeTheme} onClick={themeChange} title="Change Theme">{lightTheme ? <FaSun className={styles.faSun} /> : <FaMoon />}</button>
            </div>
        </header>
    )
}
