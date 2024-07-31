import { ArrowLineUpRight } from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import "./css/card.css"

const Card = ({index, heading="tolong isi headingnya !!!"}) => {

    useGSAP(() => {
        gsap.from(`.card_${index}`, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power4.inOut",
            stagger: {
                amount: 0.1
            },
            scrollTrigger: {
                trigger: `.card_${index}`,
                start: "top 80%",
                end: "bottom 80%",
                toggleActions: "play none none reverse"
            }
        })
    })

    return (
        <div className={`card card_${index} font-SpaceGrotesk min-w-[300px] grid grid-rows-[1fr,_min-content] gap-y-2`} key={index}>
            <Image
                className="rounded-lg overflow-hidden" 
                src={`project/project${index}.svg`}
                width={"1000"}
                height={"500"}
            />
            <div className="description flex flex-col">
                <h2 className="text-lg">{heading}</h2>
                <a className="cta w-fit flex items-center gap-2 text-center text-sm p-2 rounded-md transition-all ease-linear" href="#">Learn more <ArrowLineUpRight size={16} weight="bold" /></a>
            </div>
        </div>
    )
};

export default Card;