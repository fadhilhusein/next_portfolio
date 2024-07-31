"use client"
import "./css/index.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";
import { Quotes } from "@phosphor-icons/react";

const Content = () => {

    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from(".circle", {
            delay: 1.2,
            duration: 1,
            scale: 0,
            ease: "bounce",
            scrollTrigger: {
                // markers: true,
                trigger: ".about_me__content",
                start: "top 40%",
                end: "bottom center",
            }
        })
        gsap.from(".caption_text", {
            y: 300,
            opacity: 0,
            ease: "circ",
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: ".about_me__content",
                start: "top 40%",
                end: "bottom center"
            }
        })
        gsap.from(".biograph", {
            y: 300,
            opacity: 0,
            ease: "circ",
            duration: 1.5,
            scrollTrigger: {
                trigger: ".caption_text",
                start: "top 40%",
                end: "20% center",
            }
        })
        // gsap.from(".robot", {
        //     x: -100,
        //     opacity: 0,
        //     ease: "back",
        //     duration: 1,
        //     delay: 1.2,
        //     scrollTrigger: {
        //         trigger: "about_me__content",
        //         start: "top 40%",
        //         end: "bottom center"
        //     }

        // })
    });

    return (
        <div className="about_me__content flex flex-col gap-10 mt-16 rounded-xl overflow-hidden font-Poppins">
            <div className="moto flex gap-1 flex-col lg:flex-row h-[auto] lg:h-[50svh]">
                <div className="image flex items-center shrink-0 basis-[auto] lg:basis-[40%] h-[50svh] lg:h-auto relative p-4">
                    {/* <span className="circle w-[21rem] h-[21rem] inset-0 m-auto lg:inset-auto"></span> */}
                    <Spline
                        className="absolute inset-0 m-auto"
                        scene="https://prod.spline.design/cQsRl7BRTuKdbwmp/scene.splinecode" 
                    />
                </div>
                <div className="caption relative flex justify-center items-center p-4">
                    <div className="bg-circle-1 absolute w-[350px] h-[350px] bg-[#1573ee] rounded-full blur-2xl opacity-30 z-0"></div>
                    <p className="caption_text font-semibold font-SpaceGrotesk text-3xl lg:text-5xl p-4 z-10 text-center md:text-justify">Explore and Surf The Internet. Working With Clients Heart to Heart and Giving The Best.</p>
                </div>
            </div>
            <div className="biograph grid grid-cols-1 md:grid-rows-2 h-auto py-10 px-4 overflow-hidden">
                <div className="box_1 relative p-10">
                    <div className="bg-circle absolute top-[-80px] left-[-80px] w-[350px] h-[350px] bg-[#1573ee] rounded-full blur-2xl opacity-30 z-0"></div>
                    <div className="relative flex flex-col items-center gap-4 z-10">
                        <div className="profilePicture bg-cover w-[300px] h-[300px] rounded-full" />
                        <h2 className="text-xl font-semibold">M Fadhil Syahrian</h2>
                        <p className="text-sm text-center">Web Developer | Graphic Design | UI/UX | App Developer</p>
                    </div>                    
                </div>
                <div className="box_2 relative mt-20 md:mt-0 grid lg:grid-cols-biography items-center">
                    <div className="bg-circle absolute top-[-80px] right-[-80px] w-[400px] md:w-[350px] h-[350px] bg-[#1573ee] rounded-full blur-2xl opacity-30 z-0"></div>
                    <div className="relative gap-4 z-10">
                        <div className="studyAt">
                            <h1 className="text-4xl font-Poppins font-bold text-center">Study At.</h1>
                            <div className="image-university flex justify-center">
                                <img src="FEB.png" alt="feb undip" className="mt-10 w-[400px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="about_me__text mt-20 lg:mt-0 p-4 lg:mr-6 font-SpaceGrotesk">
                        <Quotes className="quotesIcon" size={32} weight="fill" />
                        <p className="text-lg md:text-xl md:text-justify relative z-10 mt-5">"Hello, my name is Fadhil. I am now 18 years old and studying at Diponegoro University, Faculty of Economics and Business. Even though I studied economics, I have skills in creating websites, Android applications, UI/UX design, and graphic design. and I also master the tools used for website development such as libraries and frameworks which help me in developing a website."</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;