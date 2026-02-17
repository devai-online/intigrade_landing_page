import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, ListChecks, Activity, Languages, Calendar, GraduationCap, Users, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const featuresList = [
    { x: 20, y: 10, icon: Activity, label: 'AI Analytics', cat: 'Insight', delay: 0 },
    { x: 80, y: 25, icon: Languages, label: 'Regional Language', cat: 'Linguistics', delay: 1 },
    { x: 15, y: 55, icon: Calendar, label: 'Coursework Planner', cat: 'Organization', delay: 2 },
    { x: 50, y: 70, icon: GraduationCap, label: 'Homework Integration', cat: 'Integration', delay: 1.5 },
    { x: 85, y: 65, icon: Users, label: 'Personalized Tutor', cat: 'Mentorship', delay: 0.5 },
];

interface FeaturesPageProps {
    onDemoClick: () => void;
}

const FeaturesPage = ({ onDemoClick }: FeaturesPageProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-300">
            <Navigation variant="default" />
            <main className="relative pt-32 pb-24 flex-grow">
                <div className="absolute inset-0 bg-paper-texture opacity-[0.05] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

                <section className="max-w-7xl mx-auto px-6 mb-32 relative">
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h1 className="font-serif text-5xl lg:text-6xl mb-6 text-text-main-light dark:text-white">Current Power</h1>
                        <p className="text-text-sub-light dark:text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Our core engine, built for the modern educator. Experience the precision of AI-driven grading today.
                        </p>
                    </motion.header>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Brain, title: 'AI Evaluation', desc: 'Advanced handwriting recognition and semantic analysis for grading open-ended responses.' },
                            { icon: TrendingUp, title: 'Metric Analysis', desc: 'Comprehensive class dashboards that visualize growth and identify learning gaps.' },
                            { icon: ListChecks, title: 'Student Performance', desc: 'Drill down into specific rubric criteria to understand student performance on each question.' }
                        ].map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group bg-white/60 dark:bg-white/5 p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 hover:border-primary/20 transition-all duration-500 hover:shadow-xl relative overflow-hidden"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <f.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-serif text-2xl mb-4 text-text-main-light dark:text-white">{f.title}</h3>
                                <p className="text-text-sub-light dark:text-gray-400 text-sm leading-relaxed font-light">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="relative min-h-[800px] flex items-center justify-center overflow-hidden py-24">
                    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full h-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center mb-12 relative z-20"
                        >
                            <h2 className="font-serif text-5xl lg:text-6xl mb-6 italic text-primary">Coming Soon</h2>
                            <p className="text-text-sub-light dark:text-gray-400 max-w-xl mx-auto font-light">
                                The future of classroom intelligence is being drafted. Explore our visionary feature set.
                            </p>
                            {/* Origin Point Indicator (Optional, but helps visual anchoring) */}
                            <div className="w-2 h-2 bg-primary/50 rounded-full mx-auto mt-8 blur-[1px]"></div>
                        </motion.div>

                        <div className="relative w-full h-[600px]">
                            {/* Dynamic Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
                                {/* Main trunk line from text to center */}
                                <line
                                    x1="50%" y1="-20" x2="50%" y2="20%"
                                    className="stroke-gray-300 dark:stroke-gray-800 stroke-[1] stroke-dash-4"
                                    strokeDasharray="4 4"
                                />

                                {featuresList.map((feature, i) => (
                                    <g key={`line-${i}`}>
                                        <line
                                            x1="50%"
                                            y1="20%" // Branching point
                                            x2={`${feature.x}%`}
                                            y2={`${feature.y}%`}
                                            className={`stroke-[1] transition-colors duration-300 ${hoveredIndex === i ? 'stroke-primary drop-shadow-[0_0_8px_rgba(23,207,161,0.5)]' : 'stroke-gray-300 dark:stroke-gray-800'}`}
                                            strokeDasharray="4 4"
                                        />
                                        {/* Dot at the end of the line */}
                                        <circle
                                            cx={`${feature.x}%`}
                                            cy={`${feature.y}%`}
                                            r="3"
                                            className={`fill-current transition-colors duration-300 ${hoveredIndex === i ? 'text-primary' : 'text-gray-300 dark:text-gray-800'}`}
                                        />
                                    </g>
                                ))}
                            </svg>

                            {featuresList.map((bubble, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute"
                                    style={{ top: `${bubble.y}%`, left: `${bubble.x}%` }}
                                    initial={{ x: '-50%', y: '-50%' }} // Center the bubble on the coordinate
                                    animate={{
                                        x: '-50%',
                                        y: ['-50%', '-60%', '-50%']
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: bubble.delay }}
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div
                                        className={`
                                        backdrop-blur-md border px-8 py-6 rounded-full flex items-center gap-4 
                                        transition-all duration-300 cursor-default shadow-lg hover:shadow-xl hover:scale-110
                                        ${hoveredIndex === i
                                                ? 'bg-white/80 dark:bg-white/10 border-primary/50 ring-2 ring-primary/20'
                                                : 'bg-white/40 dark:bg-white/5 border-white/30 dark:border-white/10'
                                            }
                                    `}
                                    >
                                        <bubble.icon className={`w-6 h-6 transition-colors duration-300 ${hoveredIndex === i ? 'text-primary' : 'text-primary/80'}`} />
                                        <div>
                                            <h4 className="font-serif text-lg leading-none text-text-main-light dark:text-white">{bubble.label}</h4>
                                            <p className="text-[10px] uppercase tracking-widest text-text-sub-light dark:text-gray-400 mt-1 opacity-60">{bubble.cat}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="max-w-4xl mx-auto px-6 text-center mt-20 pt-20 border-t border-black/5 dark:border-white/5">
                    <h5 className="uppercase tracking-[0.3em] text-[10px] font-bold text-text-sub-light dark:text-gray-500 mb-8 opacity-40">The IntiGrade Ethos</h5>
                    <p className="font-serif text-3xl lg:text-4xl text-text-main-light dark:text-white italic leading-relaxed">
                        "We don't just grade papers; we illuminate the path of learning through the fusion of human empathy and artificial intelligence."
                    </p>
                    <div className="mt-12">
                        <button
                            onClick={onDemoClick}
                            className="px-10 py-5 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2 mx-auto group"
                        >
                            Sign up for the Beta Features
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
};

export default FeaturesPage;
