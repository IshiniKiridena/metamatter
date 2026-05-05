import { motion } from "framer-motion";

export default function Patents() {
  return (
    <section id="patents" className="py-20 2xl:py-32">
      <div className="max-w-3xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-white mb-3">
            Patents
          </h2>
          <p className="text-sm text-gray-400">
            Intellectual property and technology disclosures
          </p>
        </motion.div>

        {/* Patent List */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, delay: 0.2 }}
          className="space-y-5 text-sm text-gray-300"
        >

          {/* Patent 1 */}
          <div className="border border-white/10 rounded-xl p-5 bg-white/5">
            <p className="text-white font-medium">
              Mechanical Metamaterial Augmented Force Sensing
            </p>
            <p className="text-gray-400 mt-1">
              R. Premadasa, Q. Zhang
            </p>
            <p className="mt-2">
              U.S. Provisional Patent, May 2025
            </p>
          </div>

          {/* Patent 2 */}
          <div className="border border-white/10 rounded-xl p-5 bg-white/5">
            <p className="text-white font-medium">
              EcoCFTrack: Advanced Diagnostic, Monitoring, and Tracking Device for Affordable Cystic Fibrosis Care
            </p>
            <p className="text-gray-400 mt-1">
              R. Premadasa, Q. Zhang
            </p>
            <p className="mt-2">
              U.S. Utility Patent, February 2025
            </p>
          </div>

          {/* Patent 3 */}
          <div className="border border-white/10 rounded-xl p-5 bg-white/5">
            <p className="text-white font-medium">
              Thermo-Mechano-Electrical Metamaterial Modular Computation System
            </p>
            <p className="text-gray-400 mt-1">
              R. Premadasa, Q. Zhang
            </p>
            <p className="mt-2">
              U.S. Utility Patent, November 2025
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}