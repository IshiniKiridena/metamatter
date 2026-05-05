'use client'
import Hero from "@/components/Hero";
import ResearchProjects from "@/components/ResearchProjects";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";


export default function Page() {
    return (
        <>
            <Hero />
            <ResearchProjects />
            <Pricing />
            <Faq />
            <CTA />
        </>
    );
}