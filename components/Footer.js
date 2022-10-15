import React from "react";
import Link from "next/link"
import styles from "../styles/Home.module.css";

const yash={
  position:"fixed",
    right: "0",
    marginTop: "91vh",
    left: "0",
    padding: "1rem",
    textAlign: "center",

}
export default function Footer() {
  return (
    <footer style={yash}>
      <div className="alignItems" >
        <Link href="/">Home</Link>
        <Link href="install">Guide</Link>
        <Link href="about">About</Link>
        <Link href="devs">Team</Link>
        <Link href="contact"> Contact Us</Link>
      </div>
    </footer>
  );
}
