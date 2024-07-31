import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = ({title, part}) => {

    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.to(`.line-dash-${part}`,
        {            
            scrollTrigger: {
                trigger: `.line-dash-${part}`,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    gsap.timeline().to(`.line-dash-${part}`, {
                        y: () => `${document.querySelector(`.title-${part}`).offsetHeight}`,
                        delay: 0.3,
                        opacity: 1,
                        ease: "circ",
                    })
                    .to(`.text-${part}`, {
                        opacity: 1,
                        ease: "linear",
                    }, "<0.2")
                }                
            }
        })
    });

    

    return (
            <div className="about_me__title flex justify-center relative z-10 font-Poppins font-semibold text-5xl text-center">
                <h2 className={`title-${part} relative w-fit`}>
                    <span className={`line-dash line-dash-${part} opacity-0 absolute`}></span>
                    <span className={`text text-${part} text-4xl lg:text-5xl`}>{title}</span>
                </h2>
            </div>
    )
};

export default Header;