"use client"

import styles from "@/components/Navbar/index.module.css"
import Link from "next/link";
import { Sun, SunDim } from "@phosphor-icons/react";

const Navbar = () => {
    return (
        <nav className={styles.glassMorphism + " sticky top-5 z-20 h-16 mt-5 p-4 rounded-md flex font-Poppins font-bold justify-between"}>
            <div className="logo flex gap-3 items-center">
                <h1 className="font-Poppins">FadhilDev</h1>
            </div>
            <div className="menu flex items-center">
                <ul className="flex gap-3">
                    <li className={styles.sun_rotate}>
                        <button className="h-full">
                            <Sun size={24} className="drop-shadow-[5px_3px_10px_rgb(0,81,255)]"/>
                        </button>
                    </li>
                    {/* <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;