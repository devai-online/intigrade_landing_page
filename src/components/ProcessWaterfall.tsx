import { motion } from 'framer-motion';
import {
    ScanLine,
    BrainCircuit,
    CheckCircle2,
    MessageSquare,
    TrendingUp
} from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

const ProcessWaterfall = () => {
    return (
        <div className="bg-texture-light dark:bg-texture-dark min-h-screen flex flex-col font-sans text-charcoal dark:text-gray-200 transition-colors duration-300">
            <Navigation variant="default" />

            <main className="flex-grow relative overflow-hidden flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mb-16 relative z-10"
                >
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-charcoal dark:text-white leading-tight">
                        The Kinetic <span className="text-primary italic">Process</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
                        From physical paper to digital insight in seconds. Experience the seamless flow of intelligent grading.
                    </p>
                </motion.div>

                <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center gap-8">

                    {/* Step 1: Scan */}
                    <div className="relative group z-20">
                        <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 p-8 rounded-2xl shadow-soft flex flex-col items-center w-64 text-center"
                        >
                            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 text-primary">
                                <ScanLine className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-xl font-semibold mb-2 text-charcoal dark:text-white">Scan Papers</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Upload in bulk via app or scanner integration.</p>
                        </motion.div>
                    </div>

                    {/* Connector 1 */}
                    <div className="h-24 w-px relative overflow-hidden">
                        <div className="absolute inset-0 w-px bg-gray-300 dark:bg-gray-700"></div>
                        <div className="absolute inset-0 w-px bg-primary/60 animate-flow-down"></div>
                    </div>

                    {/* Step 2: Processing (Animated) */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-20 will-change-transform"
                    >
                        <div className="absolute inset-0 rounded-full border border-primary/20 scale-150 animate-pulse-slow"></div>
                        <div className="absolute inset-0 rounded-full border border-primary/10 scale-[1.8]"></div>
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-primary/30 shadow-[0_0_40px_rgba(23,207,161,0.25)] flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10"></div>
                            <BrainCircuit className="text-primary w-12 h-12 md:w-16 md:h-16 relative z-10" />
                            <span className="absolute bottom-6 text-[10px] font-bold uppercase tracking-widest text-primary/80">Processing</span>
                        </div>
                    </motion.div>

                    {/* Connector 2 (Branching for Desktop, Vertical for Mobile) */}
                    <div className="h-24 w-full max-w-[600px] relative flex justify-center">
                        <div className="h-full w-px bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
                            <div className="absolute inset-0 w-px bg-primary/60 animate-flow-down" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                        {/* Desktop Branching SVG */}
                        <svg className="absolute top-0 w-full h-full pointer-events-none text-gray-300 dark:text-gray-700 hidden md:block" preserveAspectRatio="none">
                            <path d="M300,0 C300,40 100,40 100,100" fill="none" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                            <path d="M300,0 C300,40 500,40 500,100" fill="none" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                        </svg>
                    </div>

                    {/* Step 3: Outputs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -5 }}
                            className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-sage-faint dark:bg-primary/20 rounded-lg text-primary">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <h4 className="font-serif font-semibold text-lg text-charcoal dark:text-gray-100">Graded Paper</h4>
                            </div>
                            <div className="space-y-3">
                                <div className="h-2 w-3/4 bg-gray-100 dark:bg-gray-700 rounded animate-pulse"></div>
                                <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded animate-pulse delay-75"></div>
                                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">A-</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">92% Accuracy</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ y: -8 }}
                            className="bg-surface-light dark:bg-surface-dark rounded-xl border border-primary/30 dark:border-primary/40 p-6 shadow-md relative overflow-hidden transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -mr-8 -mt-8"></div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-sage-faint dark:bg-primary/20 rounded-lg text-primary">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <h4 className="font-serif font-semibold text-lg text-charcoal dark:text-gray-100">Student Feedback</h4>
                            </div>
                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <p className="italic">"Great analysis of the historical context, Sarah. Consider expanding on..."</p>
                                <div className="flex items-center gap-2 mt-3">
                                    <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                                    <span className="text-xs text-gray-500">Generated in 2.4s</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ y: -5 }}
                            className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-sage-faint dark:bg-primary/20 rounded-lg text-primary">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <h4 className="font-serif font-semibold text-lg text-charcoal dark:text-gray-100">Class Analytics</h4>
                            </div>
                            <div className="flex items-end justify-between h-16 gap-2 mt-2 px-2">
                                <div className="w-full bg-primary/20 dark:bg-primary/10 rounded-t-sm h-[40%] group-hover:h-[50%] transition-all duration-500"></div>
                                <div className="w-full bg-primary/40 dark:bg-primary/30 rounded-t-sm h-[70%] group-hover:h-[85%] transition-all duration-500"></div>
                                <div className="w-full bg-primary rounded-t-sm h-[60%] group-hover:h-[65%] transition-all duration-500"></div>
                                <div className="w-full bg-primary/30 dark:bg-primary/20 rounded-t-sm h-[50%] group-hover:h-[55%] transition-all duration-500"></div>
                            </div>
                            <div className="mt-3 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                                <span>Avg: 88%</span>
                                <span>Trend: <span className="text-primary">▲ 4%</span></span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer isSimple />
        </div>
    );
};

export default ProcessWaterfall;
