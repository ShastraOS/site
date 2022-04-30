import React from "react";
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
      <a href="guide">GUIDE</a>
        <a href="about">ABOUT</a>
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
