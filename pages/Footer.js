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
        <Link href="guide">Guide</Link>
        <Link href="about">About</Link>
        <a
          href="https://bit.ly/3tPOaOz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Akshat Sharma
        </a>
        <a
          href="https://vivekpal.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vivek Pal
        </a>
      </div>
    </footer>
  );
}
