import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-1/2"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-surface-dark rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Sarah Jenkins" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                                <Quote className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start mb-4 gap-1">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-text-main-light dark:text-white italic">
                            "I used to spend my entire Sunday grading calculus exams. With IntiGrade, I'm done by Friday afternoon. It's not just a tool; it gave me my weekends back."
                        </h3>
                        <div>
                            <p className="font-bold text-lg text-text-main-light dark:text-white">Sarah Jenkins</p>
                            <p className="text-text-sub-light dark:text-text-sub-dark">AP Math Teacher, Westview High</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
