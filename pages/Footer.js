import React from "react";
import Link from "next/link"
import styles from "../styles/Home.module.css";
import {
  MdOutlineDownload,
  MdCode,
  MdOutlineOpenInBrowser,
} from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <div className="alignItems">
        <Link href="/">Home</Link>
        <Link href="install">Guide</Link>
        <Link href="about">About</Link>
        <Link href="devs">Developers</Link>
      </div>
    </footer>
  );
}
