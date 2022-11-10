import React from "react";
import Link from "next/link"
import styles from "../styles/Home.module.css";

// const stickyfooter
// ={
//   position:"fixed",
//     right: "0",
//     marginTop: "91vh",
//     left: "0",
//     padding: "1rem",
//     textAlign: "center",

// }
export default function Footer() {
  return (
    <footer>
      <div className="alignItems-f" >
        <Link href="/">Home</Link>
        <Link href="install">Quick Guide</Link>
        <Link href="info">About</Link>
        <Link href="devs">Community</Link>
      </div>
    </footer>
  );
}
