import { useRef } from "react";
import Title from "./Title";
import { motion } from "framer-motion";

export default function ResearchProjects() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const researchProjects = [
    {
      title:
        "Tunable Plug-and-Play Meta-Nanogenerators for Multi-Range Force Sensing",
      desc: "This project develops a modular meta-nanogenerator system that integrates triboelectric nanogenerators within additively manufactured mechanical metamaterial architectures to enable self-powered, multi-range force sensing. By tailoring geometric parameters through additive manufacturing, the sensing range and sensitivity can be reconfigured without altering materials or electronics. The plug-and-play design enables scalable deployment in structural health monitoring, smart infrastructure, and adaptive load sensing applications.",
      image:
        "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=800",
    },
    {
      title: "Digital Shape-Morphing Thermo-mechanical Metamaterials",
      desc: "This project develops additively manufactured architected mechanical metamaterials capable of programmable shape morphing through thermo-mechanical coupling. By exploiting multi-stable geometries and temperature-dependent material behavior, the systems transition between discrete mechanical states that can be digitally encoded to enable mechanical logic, adaptive load redistribution, and autonomous structural reconfiguration. The resulting thermo-mechanical systems provide a pathway toward adaptive infrastructure components, deployable structures, and mechanically programmable materials.",
      image:
        "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=800",
    },
    {
      title: "Self-Sensing Cementitious Composites with Architected Aggregates",
      desc: " This project develops cementitious composites with inherent sensing capabilities through the integration of additively manufactured architected lattice structures as functional coarse aggregates. The research investigates architected plastic aggregates to tailor mechanical performance, reduce structural weight, and improve material efficiency; examines how additive manufacturing parameters influence the mechanical behavior and durability of printed aggregates; and enables self-sensing smart concrete through conductive matrices and triboelectric transduction. By linking aggregate architecture, fabrication processes, and electromechanical functionality, the work advances sustainable, load-bearing concrete systems capable of real-time structural state monitoring and extended service life.",
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800",
    },
    {
      title:
        "Architected Plate Lattice Systems for Lightweight and High-Performance Structures",
      desc: "This project investigates architected plate lattice systems as a material-efficient strategy for developing lightweight structural components with enhanced stiffness, strength-to-weight performance, and energy absorption capacity. The research explores plate lattice architectures across multiple material systems, including polymeric, composite, and cementitious implementations, to understand the influence of geometry, material selection, and fabrication methods on mechanical performance and failure behavior. By enabling tunable structural response and improved material efficiency, these systems support resilient infrastructure, protective structures, and multifunctional structural applications.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
    },
    {
      title:
        "Wearable Electrochemical Sensing Systems for Cystic Fibrosis Screening",
      desc: "This project develops a wearable electrochemical sensing platform for rapid, non-invasive screening of cystic fibrosis through sweat analysis. The system integrates microfluidic sweat collection, ion-selective sensing, and portable signal acquisition to enable real-time chloride detection for early diagnosis. By emphasizing low-cost fabrication, user-friendly operation, and point-of-care deployment, the technology supports accessible screening and continuous monitoring in clinical and remote healthcare settings.This project develops a wearable electrochemical sensing platform for rapid, non-invasive screening of cystic fibrosis through sweat analysis. The system integrates microfluidic sweat collection, ion-selective sensing, and portable signal acquisition to enable real-time chloride detection for early diagnosis. By emphasizing low-cost fabrication, user-friendly operation, and point-of-care deployment, the technology supports accessible screening and continuous monitoring in clinical and remote healthcare settings.",
      image:
        "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800",
    },
    {
      title: "Metamaterial-Based Self-Powered Strain Sensing Systems",
      desc: "This project develops additively manufactured mechanical metamaterial architectures integrated with triboelectric nanogenerators to enable self-powered strain sensing for structural deformation monitoring. By tailoring architected geometries to control deformation pathways and sensitivity, the system enables high-resolution strain detection across tunable measurement ranges. The resulting sensing platforms provide real-time insight into structural behavior for applications in structural health monitoring and intelligent infrastructure systems.",
    },
    {
      title:
        "Self-Recognizing Composite Structural Elements for Intelligent Infrastructure",
      desc: "This project develops multifunctional composite structural elements with integrated sensing and energy harvesting capabilities to enable self-recognizing infrastructure systems. Through architected material design and embedded triboelectric transduction mechanisms, the load-bearing components function simultaneously as structural members, sensing media, and energy harvesters. The technology is applicable to both new construction and retrofitting applications, where composite strengthening systems provide structural rehabilitation while enabling self-powered condition monitoring. This integrated approach enhances durability, reduces maintenance requirements, and supports cost-effective lifecycle management of aging infrastructure.",
    },
  ];

  return (
    <section id="research-projects" className="py-20 2xl:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          title="Research"
          heading="Key Research Projects"
          description="A selection of ongoing and completed research exploring metamaterials, smart infrastructure, biomedical systems, and advanced manufacturing."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchProjects.map((project, i) => (
            <motion.div
              ref={(el) => {
                refs.current[i] = el;
              }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.1 + i * 0.1,
              }}
              key={i}
              onAnimationComplete={() => {
                const card = refs.current[i];
                if (card) {
                  card.classList.add(
                    "transition",
                    "duration-300",
                    "hover:border-white/15",
                    "hover:-translate-y-1",
                  );
                }
              }}
              className="rounded-2xl overflow-hidden bg-white/3 border border-white/6"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
