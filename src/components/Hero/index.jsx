"use client"
import { useEffect, useRef } from "react";
import { TextScramble, next } from "./js/scramble_text";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import Scroller from "./Scroller";
import "./css/hero.css"

export default function Hero() {
  const el = useRef()

  useEffect(() => {
    const fx = new TextScramble(el.current)
    setTimeout(next(fx), 1000);
  })

  useGSAP(() => {
    gsap.from(".content", {
      delay: .5,
      duration: 2,
      y: 100,
      opacity: 0,
      ease: "circ",
    })
  })

  return (
    <div className="hero">
      <div 
      className={`
      relative overflow-hidden 
      flex justify-center items-center
      mt-7 rounded-xl 
      h-[75svh] hero_gradient font-Poppins font-bold uppercase text-center
      `}>

        <video className="min-w-[400%] md:min-w-full min-h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10" autoPlay muted playsInline loop>
          <source src="coding.mp4" type="video/mp4"/>
        </video>
        <div className="content flex flex-col justify-center items-center gap-4">
          <div className="hero_title z-10 text-2xl md:text-4xl">
            <h1 className=" ">The future is our technologies.</h1>
            <h1 className="">Meet Fadhil, the <span className="gradient" ref={el}>Web Developer</span></h1>
          </div>
          <div className="cta flex gap-4 font-SpaceGrotesk">
            <a className="hover:bg-blue-800 flex items-center gap-2 bg-blue-500 text-center p-3 rounded-md transition-all ease-linear" href="">About me <ArrowSquareOut className="mb-1" size={16} weight="bold"/></a>
            <a className="hover:opacity-70 border-2 text-center  p-3 rounded-md transition-all ease-linear" href="">Reach me out</a>
          </div>
        </div>
      </div>
      <Scroller /> 
    </div>
  );
}
