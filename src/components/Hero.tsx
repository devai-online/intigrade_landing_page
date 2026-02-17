import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, PlayCircle, School, Presentation, Grid, Folder } from 'lucide-react';

interface HeroProps {
    onDemoClick: () => void;
}

const Hero = ({ onDemoClick }: HeroProps) => {
    const { scrollY } = useScroll();

    // Smooth out the scroll value for less jittery parallax
    const smoothScrollY = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const y1 = useTransform(smoothScrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(smoothScrollY, [0, 1000], [0, 400]);

    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10 overflow-hidden">
            {/* Background Blobs - Parallaxed */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen will-change-transform"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary/20 via-secondary/5 to-transparent rounded-full blur-[80px] pointer-events-none mix-blend-multiply dark:mix-blend-screen will-change-transform"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left pt-10 lg:pt-0"
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 dark:bg-surface-dark/80 border border-primary/20 mb-8 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow cursor-default">
                            <span className="flex h-2 w-2 relative mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-xs font-bold tracking-wide uppercase text-primary">v1.0 Now Live</span>
                        </div>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.1] font-bold mb-6 text-text-main-light dark:text-white tracking-tight">
                            Handwritten Exams. <br />
                            <span className="text-primary italic pr-2">Digitally Perfected.</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-text-sub-light dark:text-text-sub-dark mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light px-4 lg:px-0">
                            The AI grading assistant that bridges the gap between pen and paper. IntiGrade scans, analyzes, and grades physical tests instantly, giving teachers their weekends back.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full px-4 lg:px-0">
                            <button
                                onClick={onDemoClick}
                                className="w-full sm:w-auto group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-base font-medium transition-all shadow-xl shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center gap-2"
                            >
                                Grade Your First Exam
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button className="w-full sm:w-auto group px-8 py-4 rounded-lg text-text-main-light dark:text-white border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all flex items-center justify-center gap-2 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                                <PlayCircle className="w-5 h-5 text-primary" />
                                Watch Demo
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Content - Interactive Hero Graphic */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative h-[400px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
                    >
                        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-full z-20 pointer-events-none opacity-40 dark:opacity-20" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 350C100 350 100 50 200 50C300 50 300 350 350 350" stroke="currentColor" className="text-primary" strokeDasharray="8 8" strokeWidth="2"></path>
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent dark:from-primary/20 rounded-[3rem] transform rotate-3 scale-95 -z-10 opacity-50 blur-2xl"></div>

                        <div className="relative w-full max-w-[320px] lg:max-w-none aspect-square lg:aspect-auto lg:h-full">
                            {/* Paper Graphic */}
                            <div className="absolute bottom-0 left-0 w-3/4 z-10 transform -rotate-3 transition-transform hover:-rotate-1 duration-500 origin-bottom-left">
                                <div className="bg-[#Fdfbf7] p-4 lg:p-6 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/lined-paper-2.png')]"></div>
                                    <div className="space-y-3 lg:space-y-4 font-serif text-gray-800 opacity-80 relative">
                                        <div className="flex justify-between border-b border-gray-300 pb-2 mb-4">
                                            <span className="text-xs lg:text-sm">Name: Alex Student</span>
                                            <span className="text-xs lg:text-sm">Date: Oct 12</span>
                                        </div>
                                        <div className="h-3 lg:h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
                                        <div className="h-3 lg:h-4 w-1/2 bg-gray-300 rounded animate-pulse"></div>
                                        <div className="pt-2 lg:pt-4">
                                            <p className="font-handwriting text-xl lg:text-2xl text-blue-900 transform -rotate-2" style={{ fontFamily: "'Brush Script MT', cursive" }}>x = 24</p>
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 12 }}
                                            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                                            className="absolute top-8 lg:top-10 right-2 lg:right-4 w-12 h-12 lg:w-16 lg:h-16 border-2 lg:border-4 border-red-500 rounded-full flex items-center justify-center"
                                        >
                                            <span className="text-red-500 font-bold text-lg lg:text-2xl">A-</span>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Analysis Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-4 lg:top-10 right-0 w-3/4 z-30 will-change-transform"
                            >
                                <div className="bg-white dark:bg-surface-dark rounded-xl lg:rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 overflow-hidden backdrop-blur-xl">
                                    <div className="px-3 lg:px-4 py-2 lg:py-3 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                                        <div className="flex gap-1.5 lg:gap-2">
                                            <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-red-400"></div>
                                            <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-yellow-400"></div>
                                            <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="text-[10px] lg:text-xs font-semibold text-gray-400 uppercase tracking-wider">Analysis Complete</div>
                                    </div>
                                    <div className="p-4 lg:p-6">
                                        <div className="flex items-center justify-between mb-4 lg:mb-6">
                                            <div>
                                                <h3 className="text-sm lg:text-lg font-bold text-gray-900 dark:text-white">Calculus 101</h3>
                                                <p className="text-[10px] lg:text-xs text-gray-500">Section B • 24 Papers</p>
                                            </div>
                                            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 lg:px-3 py-1 rounded-full text-[10px] lg:text-xs font-bold">
                                                100% Graded
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 lg:gap-4 mb-4 lg:mb-6">
                                            <div className="bg-gray-50 dark:bg-gray-800 p-2 lg:p-3 rounded-lg">
                                                <p className="text-[10px] lg:text-xs text-gray-500 mb-0.5 lg:mb-1">Average Score</p>
                                                <p className="text-base lg:text-xl font-bold text-primary">84%</p>
                                            </div>
                                            <div className="bg-gray-50 dark:bg-gray-800 p-2 lg:p-3 rounded-lg">
                                                <p className="text-[10px] lg:text-xs text-gray-500 mb-0.5 lg:mb-1">Time Saved</p>
                                                <p className="text-base lg:text-xl font-bold text-primary">4h 12m</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2 lg:space-y-3">
                                            <div className="flex items-center gap-2 lg:gap-3 p-1.5 lg:p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                                                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-[10px] lg:text-xs">AS</div>
                                                <div className="flex-1">
                                                    <p className="text-xs lg:text-sm font-medium text-gray-900 dark:text-gray-200">Alex Student</p>
                                                    <p className="text-[10px] lg:text-xs text-gray-400">Question 3 needs review</p>
                                                </div>
                                                <span className="text-xs lg:text-sm font-bold text-gray-700 dark:text-gray-300">92/100</span>
                                            </div>
                                            <div className="flex items-center gap-2 lg:gap-3 p-1.5 lg:p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                                                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-secondary/30 dark:bg-secondary/20 flex items-center justify-center text-primary-dark dark:text-secondary font-bold text-[10px] lg:text-xs">JD</div>
                                                <div className="flex-1">
                                                    <p className="text-xs lg:text-sm font-medium text-gray-900 dark:text-gray-200">Jane Doe</p>
                                                    <p className="text-[10px] lg:text-xs text-gray-400">Perfect Score</p>
                                                </div>
                                                <span className="text-xs lg:text-sm font-bold text-gray-700 dark:text-gray-300">100/100</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="absolute top-1/2 left-1/2 w-24 h-24 lg:w-32 lg:h-32 border-t-2 border-r-2 border-primary/30 rounded-tr-[30px] lg:rounded-tr-[50px] -translate-x-4 translate-y-4 z-20"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium text-text-sub-light dark:text-text-sub-dark mb-8 uppercase tracking-widest opacity-60">Seamlessly integrates with</p>

                {/* Marquee/Infinite Scroll for Logos */}
                <div className="overflow-hidden w-full relative group">
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10"></div>

                    <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused] w-max">
                        {[...Array(3)].map((_, setIndex) => (
                            <div key={setIndex} className="flex gap-20 mx-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="flex items-center gap-2 text-xl font-bold font-sans text-gray-600 dark:text-gray-400"><School className="w-6 h-6" /> Canvas</div>
                                <div className="flex items-center gap-2 text-xl font-bold font-sans text-gray-600 dark:text-gray-400"><Presentation className="w-6 h-6" /> Blackboard</div>
                                <div className="flex items-center gap-2 text-xl font-bold font-sans text-gray-600 dark:text-gray-400"><Grid className="w-6 h-6" /> Moodle</div>
                                <div className="flex items-center gap-2 text-xl font-bold font-sans text-gray-600 dark:text-gray-400"><Folder className="w-6 h-6" /> Google Classroom</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
