'use client'
import Hero from "@/components/Hero";
import ResearchProjects from "@/components/ResearchProjects";
import Team from "@/components/Team";
import Publications from "@/components/Publications";
import Conference from "@/components/Conference";


export default function Page() {
    return (
        <>
            <Hero />
            <ResearchProjects />
            <Team />
            <Publications />
            <Conference />
        </>
    );
}