'use client'
import Hero from "@/components/Hero";
import ResearchProjects from "@/components/ResearchProjects";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";


export default function Page() {
    return (
        <>
            <Hero />
            <ResearchProjects />
            <Team />
            <Faq />
            <CTA />
        </>
    );
}