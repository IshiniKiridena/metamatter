import { Check } from 'lucide-react';
import Title from './Title';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Team() {
    const ref = useRef<HTMLDivElement | null>(null);

    return (
        <section id="team" className="py-20 bg-white/3 border-t border-white/6">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="Team"
                    heading="Research Lead"
                    description="Meet the researcher behind MetaMatter Labs and the work driving innovation in intelligent materials and systems."
                />

                <div className="flex justify-center">
                    <motion.div
                        ref={ref}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                        onAnimationComplete={() => {
                            if (ref.current) {
                                ref.current.classList.add("transition", "duration-500", "hover:scale-[1.02]");
                            }
                        }}
                        className="w-full max-w-2xl p-6 rounded-xl border border-white/8 bg-indigo-950/30 backdrop-blur"
                    >

                        {/* Profile */}
                        <div className="flex flex-col items-center text-center mb-6">
                            <img
                                src="/team.png"
                                alt="Roshira Premadasa"
                                className="w-28 h-28 rounded-full object-cover mb-4 border border-white/10"
                            />
                            <h3 className="text-xl font-semibold">Roshira Premadasa</h3>
                            <p className="text-gray-400 text-sm">
                                Graduate Research Assistant <br />
                                Department of Civil and Environmental Engineering <br />
                                New Mexico State University
                            </p>
                        </div>

                        {/* Education */}
                        <div className="mb-6">
                            <h4 className="text-md font-semibold mb-3">Education</h4>

                            <div className="space-y-3 text-sm text-gray-300">

                                <div className="flex items-center gap-3">
                                    <img src="/nm-logo.png" className="w-6 h-6" />
                                    <div>
                                        Ph.D. in Civil Engineering <br />
                                        <span className="text-gray-400">New Mexico State University (2023–Present)</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/nm-logo.png" className="w-6 h-6" />
                                    <div>
                                        M.Sc. in Civil Engineering <br />
                                        <span className="text-gray-400">New Mexico State University (2025)</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img src="/sliit.png" className="w-6 h-6" />
                                    <div>
                                        B.Sc. in Civil Engineering <br />
                                        <span className="text-gray-400">SLIIT (2022)</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Awards */}
                        <div className="mb-6">
                            <h4 className="text-md font-semibold mb-3">Honors & Awards</h4>

                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-indigo-400" /> Bhatti Family Graduate Assistant Award (2026)</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-indigo-400" /> First Place, 3-Minute-Thesis Competition (2026)</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-indigo-400" /> Distinguished Graduate Assistant Award – Doctoral (2025)</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-indigo-400" /> First Place, Bold Idea Challenge (2024)</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-indigo-400" /> Second Place, Aggie Shark Tank (2024)</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-indigo-400" /> NMSU Outstanding Graduate Student Fellowship (2024)</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-indigo-400" /> Merit Award – SLIIT (2022)</li>
                            </ul>
                        </div>

                        {/* Professional Service */}
                        <div>
                            <h4 className="text-md font-semibold mb-3">Professional Service</h4>

                            <p className="text-sm text-gray-300">
                                Journal Reviewer — Measurement Journal / Elsevier
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}