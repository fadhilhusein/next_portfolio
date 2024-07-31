"use client"
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import Header from "../Aboutme/Header";
import "./css/embla.css"
import { AndroidLogo, CaretLeft, CaretRight, ChartPieSlice, Code, FigmaLogo } from "@phosphor-icons/react";
import ClassNames from "embla-carousel-class-names";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const Myservice = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true},[Autoplay(400), ClassNames()]);

    // const scrollPrev = useCallback(() => {
    //     if (emblaApi) emblaApi.scrollPrev()
    // }, [emblaApi])    
    // const scrollNext = useCallback(() => {
    //     if (emblaApi) emblaApi.scrollNext()
    // }, [emblaApi])

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

    return (
        <div className="containers myservice overflow-hidden lg:overflow-visible relative">
            <Header title="MyService." part="2" />
            <div className="bg-circle-1 absolute w-[350px] h-[350px] bg-[#1573ee] rounded-full blur-2xl opacity-35 z-0"></div>
            <div className="content flex flex-col lg:flex-row gap-4 lg:gap-0 mt-16">
                <div className="title text-3xl lg:text-6xl text-white text- font-SpaceGrotesk font-semibold relative w-[100%] flex items-center z-1">
                    <p className="text-center">
                        Always build <span className="gradient">application</span> according to needs
                    </p>
                </div>
                <div className="embla service_list w-full flex flex-col gap-y-5">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container h-full">
                            <div className="embla__slide relative overflow-hidden font-bold mr-4 lg:mr-5 shrink-0 basis-[80%] lg:basis-[50%] text-center flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
                                <Code size={40} weight="bold" className="relative z-1"/>
                                <h2 className="text-xl font-semibold relative z-1">Web Development</h2>
                                <p className="text-sm text-center relative z-1">Creating website with powerfull tools and SDK</p>
                            </div>
                            <div className="embla__slide font-bold mr-4 lg:mr-5 shrink-0 basis-[80%] lg:basis-[50%] text-center flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
                                <FigmaLogo size={40} weight="bold" className="relative z-1"/>
                                <h2 className="text-xl font-semibold relative z-1">UI/UX Design</h2>
                                <p className="text-sm text-center relative z-1">Designing UI/UX for website or mobile application</p>
                            </div>
                            <div className="embla__slide font-bold mr-4 lg:mr-5 shrink-0 basis-[80%] lg:basis-[50%] text-center flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
                                <AndroidLogo size={40} weight="bold" className="relative z-1"/>
                                <h2 className="text-xl font-semibold relative z-1">Android Development</h2>
                                <p className="text-sm text-center relative z-1">Creating powerfull App with high class framework and library</p>
                            </div>
                            <div className="embla__slide font-bold mr-4 lg:mr-5 shrink-0 basis-[80%] lg:basis-[50%] text-center flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
                                <ChartPieSlice size={40} weight="bold" />
                                <h2 className="text-xl font-semibold relative z-1">Data Analyst</h2>
                                <p className="text-sm text-center relative z-1">Analysing big data or small data with precision calculation</p>
                            </div>
                        </div>
                    </div>
                    <div className="embla__dots">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                            />
                        ))}
                    </div>
                    {/* <div className="embla__button flex justify-center gap-x-10">
                        <button className="embla__prev p-1 rounded-full" onClick={scrollPrev}>
                            <CaretLeft size={24} weight="bold" />
                        </button>
                        <button className="embla__next p-1 rounded-full" onClick={scrollNext}>
                            <CaretRight size={24} weight="bold" />
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

export default Myservice;