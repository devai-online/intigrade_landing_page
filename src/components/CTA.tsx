import { motion } from 'framer-motion';

interface CTAProps {
    onDemoClick: () => void;
}

const CTA = ({ onDemoClick }: CTAProps) => {
    return (
        <section className="py-24 bg-surface-dark dark:bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 dark:opacity-60"></div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto px-4 relative z-10 text-center"
            >
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Ready to stop grading manually?</h2>
                <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">Join 12,000+ educators who have graded over 5 million exams with IntiGrade.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={onDemoClick}
                        className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
                    >
                        Schedule a Demo
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
