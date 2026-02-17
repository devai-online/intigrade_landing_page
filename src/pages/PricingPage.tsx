import { motion } from 'framer-motion';
import { Mail, PlayCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface PricingPageProps {
    onDemoClick: () => void;
}

const PricingPage = ({ onDemoClick }: PricingPageProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-300">
            <Navigation variant="default" />

            <main className="flex-grow flex items-center justify-center relative overflow-hidden pt-20">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-paper-texture opacity-[0.05] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}

                        {/* Heading */}
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-main-light dark:text-white mb-6 leading-tight">
                            Pricing built for <br />
                            <span className="italic text-primary">your school's scale.</span>
                        </h1>

                        {/* Subtext */}
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-sub-light dark:text-gray-400 font-light leading-relaxed mb-12">
                            We believe that AI-powered grading should be accessible to every institution.
                            Our pricing is not one-size-fits-all; it depends entirely on your school's specific
                            usage basis, student volume, and integration needs.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                            <button
                                onClick={onDemoClick}
                                className="group relative px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/25 flex items-center gap-3 overflow-hidden"
                            >
                                <Mail className="w-5 h-5" />
                                <span className="relative z-10">Contact Us for Pricing</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>

                            <button
                                className="group px-8 py-4 bg-transparent border border-gray-300 dark:border-white/20 text-text-main-light dark:text-white rounded-full font-medium text-lg transition-all hover:bg-gray-100 dark:hover:bg-white/5 flex items-center gap-3"
                            >
                                <PlayCircle className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors" />
                                <span className="relative z-10">Watch Demo</span>
                            </button>
                        </div>

                        {/* Footer Text */}
                        <p className="text-sm text-text-sub-light dark:text-gray-500 font-light italic">
                            Average setup time for new institutions: 48 hours.
                        </p>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PricingPage;
