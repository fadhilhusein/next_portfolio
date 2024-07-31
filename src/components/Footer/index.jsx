"use client"
import { TrayArrowDown } from "@phosphor-icons/react";
import "./css/style.css"

const Footer = () => {
    return (
        <div className="footer flex flex-col items-center justify-center gap-4 px-4 py-24 font-SpaceGrotesk rounded-t-md">
            <h1 className="text-5xl text-center font-semibold">Have A Project In Mind?</h1>
            <h2 className="text-2xl">Lets have a discussion!</h2>
            <a className="flex items-center gap-2 hover:opacity-70 border-2 text-center  p-3 rounded-md transition-all ease-linear" href="#">Email Me <TrayArrowDown size={24} weight="bold" /></a>
        </div>
    )
};

export default Footer;