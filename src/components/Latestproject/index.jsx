"use client"
import Header from "../Aboutme/Header";
import Card from "./Card";

const Latestproject = () => {
    return (
        <div className="LatestProject relative min-h-fit">
            <Header className="relative z-10" title="Latest Projects." part="3"/>
            <div className="bg-circle-1 absolute top-[0%] w-[350px] h-[350px] bg-[#1573ee] rounded-full blur-2xl opacity-35 z-0"></div>
            <div className="project-list relative z-10 mt-16 grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(500px,_1fr))] gap-8 p-4">
                 <Card index="1" heading="Web commerce"/>
                 <Card index="2" heading="Finance application"/>
                 <Card index="3" heading="Online commerce"/>
                 <Card index="4" heading="Landpsire"/>
                 <Card index="5" heading="Online book website"/>
                 <Card index="6" heading="Library Website"/>
            </div>
            <div className="bg-circle-1 absolute bottom-[0%] right-0 w-[350px] h-[350px] bg-[#1573ee] rounded-full blur-2xl opacity-35 z-0"></div>
        </div>
    )
};

export default Latestproject;