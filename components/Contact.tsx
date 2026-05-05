import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="rounded-3xl bg-linear-to-b from-violet-900/20 to-violet-900/5 border border-violet-500/20 p-10 md:p-14 relative overflow-hidden">

          {/* Background noise */}
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />

          <div className="relative z-10">

            {/* Heading */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-semibold text-white mb-3">
                Get in Touch
              </h2>
              <p className="text-sm text-gray-400">
                For collaborations, research opportunities, or academic inquiries
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center justify-between gap-8"
            >

              {/* Contact Info */}
              <div className="space-y-4 text-sm text-gray-300">

                <p>
                  📞{" "}
                  <a
                    href="tel:+15753398076"
                    className="hover:text-white transition"
                  >
                    +1 (575) 339 8076
                  </a>
                </p>

                <p>
                  ✉️{" "}
                  <a
                    href="mailto:roshirap@nmsu.edu"
                    className="hover:text-white transition"
                  >
                    roshirap@nmsu.edu
                  </a>
                </p>

                <p>
                  🔗{" "}
                  <a
                    href="https://www.linkedin.com/in/roshira-premadasa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    linkedin.com/in/roshira-premadasa
                  </a>
                </p>
              </div>

              {/* University Logo */}
              <div className="flex items-center justify-center">
                <img
                  src="/nm.png"
                  alt="New Mexico State University"
                  className="w-20 md:w-24 object-contain opacity-90"
                />
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}