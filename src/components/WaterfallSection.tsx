import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FileUp, ScanLine, BrainCircuit, LineChart } from 'lucide-react';

const WaterfallSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const steps = [
        { icon: FileUp, title: "Upload", desc: "Drag & drop batches", delay: 0 },
        { icon: ScanLine, title: "Scan", desc: "AI visual recognition", delay: 0.2 },
        { icon: BrainCircuit, title: "Analyze", desc: "Contextual understanding", delay: 0.4 },
        { icon: LineChart, title: "Insight", desc: "Actionable metrics", delay: 0.6 }
    ];

    return (
        <section className="relative py-24 bg-gradient-to-b from-transparent to-white dark:to-surface-dark z-20 overflow-hidden">
            {/* Parallax Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 dark:bg-primary/10 rounded-l-[100px] transform translate-x-1/4 -skew-y-6 z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
                <div className="flex flex-col items-center mb-16">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="text-primary mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 7 10 10" /><path d="m17 7-10 10" /><path d="m12 17 5 5" /></svg>
                        </div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-4 font-serif text-3xl md:text-4xl font-bold text-center text-text-main-light dark:text-white"
                    >
                        The Flow of Intelligence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-center text-lg text-text-sub-light dark:text-text-sub-dark max-w-2xl"
                    >
                        Watch how static paper transforms into fluid data streams.
                    </motion.p>
                </div>

                {/* Waterfall Cards */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 dark:bg-gray-700 -z-10">
                        <div className="absolute top-0 left-0 h-full w-full bg-primary/50 origin-left animate-[scaleX_3s_ease-in-out_infinite]"></div>
                    </div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: step.delay, duration: 0.5 }}
                            className="group"
                        >
                            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <step.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-bold text-xl text-center mb-2 dark:text-white">{step.title}</h3>
                                <p className="text-center text-sm text-text-sub-light dark:text-text-sub-dark">{step.desc}</p>
                            </div>
                            {/* Mobile connector line */}
                            {idx !== 3 && (
                                <div className="lg:hidden w-0.5 h-8 bg-gray-200 dark:bg-gray-700 mx-auto my-2"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WaterfallSection;
