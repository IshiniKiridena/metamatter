'use client'
import Hero from "@/components/Hero";
import ResearchProjects from "@/components/ResearchProjects";
import Team from "@/components/Team";
import Publications from "@/components/Publications";
import Conference from "@/components/Conference";
import Patents from "@/components/Patents";
import ResearchInterests from "@/components/ResearchInterests";
import Contact from "@/components/Contact";


export default function Page() {
    return (
        <>
            <Hero />
            <ResearchProjects />
            <Team />
            <Publications />
            <Conference />
            <Patents />
            <ResearchInterests />
            <Contact />
        </>
    );
}