import Title from "./Title";
import { motion } from "framer-motion";

export default function Publications() {
  return (
    <section id="publications" className="py-20 2xl:py-32">
      <div className="max-w-3xl mx-auto px-4">
        <Title
          title="Publications"
          heading="Research publications & scholarly work"
          description={
            <>
              <a
                href="https://scholar.google.com/citations?user=dsYP7Z8AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                Google Scholar
              </a>{" "}
              | IF: 2-year Impact Factor
            </>
          }
        />

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70 }}
          className="space-y-10 text-sm text-gray-300 leading-relaxed"
        >
          {/* Journal Papers */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Journal Papers
            </h3>

            <ul className="space-y-4">
              <li>
                R. Premadasa, P. Almasi, S. Ghimire, W. Dong, C. Zhang, P. Jiao,
                Q. Zhang, “Tunable Plug-and-Play Meta-Nanogenerator Materials
                for Multi‐Range Force Measurements”, Advanced Science, In-press,
                2026.{" "}
                <a
                  href="https://doi.org/10.1002/advs.202600009"
                  target="_blank"
                  className="text-indigo-400 hover:underline"
                >
                  https://doi.org/10.1002/advs.202600009
                </a>{" "}
                (Q1, IF=14.1)
              </li>

              <li>
                R. Premadasa, P. Almasi, Z. Wan, A. Alavi, Q. Zhang, “Digital
                Shape Morphing Thermo-Mechanical Metamaterials”, Materials
                Horizons, In-press, 2025.{" "}
                <a
                  href="https://doi.org/10.1039/D5MH02021B"
                  target="_blank"
                  className="text-indigo-400 hover:underline"
                >
                  https://doi.org/10.1039/D5MH02021B
                </a>{" "}
                (Q1, IF=10.7)
              </li>

              <li>
                R. Premadasa, Z. Wan, P. Almasi, K. Barri, H. Zhang, P. Jiao, Q.
                Zhang, “CFTrack: Advanced Diagnostic, Monitoring, and Tracking
                Device for Cystic Fibrosis Care,” ACS Sensors, In-press, 2024.{" "}
                <a
                  href="https://doi.org/10.1021/acssensors.4c01669"
                  target="_blank"
                  className="text-indigo-400 hover:underline"
                >
                  https://doi.org/10.1021/acssensors.4c01669
                </a>{" "}
                (Q1, IF=9.1)
              </li>

              <li>
                S. Li, X. Tang, W. Guo, Y. Li, L. Hong, Z. Wan, H. Lu, R.
                Premadasa, Q. Zhang, H. Salehi, P. Jiao, “Numerical Simulations
                of Piezoelectricity and Triboelectricity: From Materials,
                Structures to Devices,” Applied Materials Today, In-press, 2024.{" "}
                <a
                  href="https://doi.org/10.1016/j.apmt.2024.102092"
                  target="_blank"
                  className="text-indigo-400 hover:underline"
                >
                  https://doi.org/10.1016/j.apmt.2024.102092
                </a>{" "}
                (Q1, IF = 8.3)
              </li>

              <li>
                P. Almasi, R. Premadasa, S. Ghimire, P. Jiao, Q. Zhang, “Plate
                Lattices Superior Weight-to-Strength Mechanical Metamaterials:
                Mechanics, Design, Manufacturing, and Applications,” Materials
                Horizons, In-review, 2026. (Q1, IF=10.7)
              </li>

              <li>
                P. Almasi, Y. Xiao, R. Premadasa, J. Boyle, D. Jauregui, A.
                Khodagholi, Z. Wan, Q. Zhang, “Meta-Heuristic-Driven Continuous
                Path Optimization for Area Coverage in UAV-based Infrastructure
                Inspection,” Automation in Construction, In-revision, 2026.
              </li>

              <li>
                P. Almasi, Y. Xiao, R. Premadasa, H. Yin, J. Boyle, D. Jauregui,
                Z. Wan, Q. Zhang, “A General Method for Pre-flight Preparation
                in Data Collection for UAV-based Bridge Inspection,” Drones,
                In-press, 2024.{" "}
                <a
                  href="https://doi.org/10.3390/drones8080386"
                  target="_blank"
                  className="text-indigo-400 hover:underline"
                >
                  https://doi.org/10.3390/drones8080386
                </a>{" "}
                (Q1, IF = 4.4)
              </li>
            </ul>
          </div>

          {/* Conference Papers */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Conference Papers
            </h3>

            <ul className="space-y-4">
              <li>
                H. Hussain, J. Diaz, R. Premadasa, Q. Zhang, C. Mahajan,
                “Multi-Material 3D Plate Lattice Structures Using Fused Filament
                Fabrication Technique,” IISE Annual Conference, 2024.
              </li>

              <li>
                R. Premadasa, J. Perera, “Effects of Manufactured Sand on the
                Properties of Normal and High Strength Concrete”, SICET 2022.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
