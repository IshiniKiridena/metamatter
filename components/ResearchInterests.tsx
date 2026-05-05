import { motion } from "framer-motion";

export default function ResearchInterests() {
  return (
    <section id="research-interests" className="py-20 2xl:py-32">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-white mb-3">
            Research Interests
          </h2>
          <p className="text-sm text-gray-400">
            Core areas of research and interdisciplinary exploration
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 70,
            delay: 0.2,
          }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* 1 */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="text-white font-semibold mb-3">
              Smart Concrete & Multifunctional Structural Materials
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                Self-sensing concrete for real-time strain, damage, and load
                monitoring.
              </li>
              <li>Energy-harvesting and self-powered structural materials.</li>
              <li>Lightweight and modular concrete structural systems.</li>
            </ul>
          </div>

          {/* 2 */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="text-white font-semibold mb-3">
              Engineered Marine Structures for Coastal Restoration and Offshore
              Energy
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                Metamaterial-based structural solutions for wave loading and
                impact resistance.
              </li>
              <li>
                Bioactive and modular 3D printed concrete systems for coral reef
                restoration and floating solar-farm foundations.
              </li>
              <li>
                Wave-induced energy harvesting for self-powered offshore
                infrastructure.
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="text-white font-semibold mb-3">
              Self-powered and Compact Biomedical Devices and Implants
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                Triboelectric and energy-harvesting mechanisms for battery-free
                medical devices.
              </li>
              <li>
                Architected materials for compact and mechanically adaptive
                patient-specific implants.
              </li>
              <li>
                Integrated sensing platforms for continuous physiological
                monitoring.
              </li>
            </ul>
          </div>

          {/* 4 */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="text-white font-semibold mb-3">
              Additive Manufacturing for Advanced Construction
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                3D printed smart concrete and architected structural systems.
              </li>
              <li>
                Topology and process parameter optimized printable structures
                for strength and multifunctionality.
              </li>
              <li>
                Sustainable additive manufacturing for next-generation
                infrastructure.
              </li>
            </ul>
          </div>

          {/* 5 */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 md:col-span-2">
            <h3 className="text-white font-semibold mb-3">
              Digital Twins & Self-Sensing Infrastructure Systems
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                Material-integrated sensing for real-time structural state
                awareness.
              </li>
              <li>
                AI-driven damage detection and lifecycle performance
                forecasting.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <img
            src="/research-visual.jpg"
            alt="Research visualization"
            className="w-full h-64 md:h-80 object-cover rounded-2xl border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
