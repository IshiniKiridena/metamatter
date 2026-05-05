import { motion } from "framer-motion";

export default function Conference() {
  return (
    <section id="conference-presentations" className="py-20 2xl:pb-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-3xl bg-linear-to-b from-violet-900/20 to-violet-900/5 border border-violet-500/20 p-12 md:p-16 relative overflow-hidden">
          
          {/* subtle background noise */}
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />

          <div className="relative z-10">

            {/* Title */}
            <motion.h2
              className="text-2xl sm:text-4xl font-semibold mb-6 text-center"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70 }}
            >
              Conference Presentations
            </motion.h2>

            <motion.div
              className="space-y-8 text-sm text-gray-300 leading-relaxed"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, delay: 0.2 }}
            >

              {/* 2025 */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">2025</h3>

                <div className="border border-white/10 rounded-xl p-4 bg-white/5">
                  <p className="font-medium text-white">
                    ASCE Engineering Mechanics Institute (EMI) 2025, University of California, Irvine, CA, USA
                  </p>
                  <p>Digital Shape-morphing Thermo-mechanical Metamaterials</p>
                  <p>Tunable Plug-and-Play Meta-Nanogenerator Materials for Multi‐Range Force Measurements</p>
                </div>

                <div className="border border-white/10 rounded-xl p-4 bg-white/5">
                  <p className="font-medium text-white">
                    Solid Freeform Fabrication (SFF) Conference 2025, University of Texas, Austin, TX, USA
                  </p>
                  <p>
                    Design and Fabrication of Additively Manufactured Multifunctional Materials with Intrinsic Sensing and Morphological Computing Capabilities
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-4 bg-white/5">
                  <p className="font-medium text-white">
                    New Mexico Transportation Conference 2025, New Mexico State University, Las Cruces, NM, USA
                  </p>
                  <p>Self-recognizing Architected Materials for Smart Civil Infrastructure Systems</p>
                </div>
              </div>

              {/* 2024 */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">2024</h3>

                <div className="border border-white/10 rounded-xl p-4 bg-white/5">
                  <p className="font-medium text-white">
                    ASCE Engineering Mechanics Institute (EMI) 2024, University of Illinois-Urbana Champagne, IL, USA
                  </p>
                  <p>CFTrack: Advanced Monitoring and Tracking Device for Affordable Cystic Fibrosis Care</p>
                </div>

                <div className="border border-white/10 rounded-xl p-4 bg-white/5">
                  <p className="font-medium text-white">
                    Innovate New Mexico (INM) 2024, Albuquerque, NM, USA
                  </p>
                  <p>EcoCFTrack: Advanced Monitoring and Tracking Device for Affordable Cystic Fibrosis Care</p>
                </div>

                <div className="border border-white/10 rounded-xl p-4 bg-white/5">
                  <p className="font-medium text-white">
                    New Mexico Transportation Conference 2024, New Mexico State University, Las Cruces, NM, USA
                  </p>
                  <p>Self-recognizing Composite Structural Elements (SR-CSEs) for Smart Civil Infrastructure System</p>
                </div>
              </div>

              {/* 2022 */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">2022</h3>

                <div className="border border-white/10 rounded-xl p-4 bg-white/5">
                  <p className="font-medium text-white">
                    SLIIT International Conference on Engineering and Technology, Sri Lanka Institute of Information Technology, Malabe, Sri Lanka
                  </p>
                  <p>Effects of Manufactured Sand on the Properties of Normal and High Strength Concrete</p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}