import { motion } from 'framer-motion';
import { Wand2, BarChart3, Presentation } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Wand2,
            title: "AI Handwriting Recognition",
            desc: "Our engine deciphers even the messiest student handwriting with 99.8% accuracy, trained on millions of exam papers."
        },
        {
            icon: BarChart3,
            title: "Instant Analytics",
            desc: "Spot class-wide learning gaps instantly. See which questions were missed most often and adjust your teaching in real-time."
        },
        {
            icon: Presentation, // Using Presentation/Projector icon for "LMS Sync" (integration) or maybe Cable/Plug? Presentation fits Classroom context.
            title: "LMS Sync",
            desc: "Grades are automatically pushed to Canvas, Blackboard, or Google Classroom. No more manual data entry errors."
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-surface-dark relative z-10 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-text-main-light dark:text-white">Everything you need to grade smarter</h2>
                    <p className="text-text-sub-light dark:text-text-sub-dark text-lg">IntiGrade isn't just a scanner. It's a complete grading assistant that learns your style.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-gray-50 dark:bg-background-dark border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3 text-text-main-light dark:text-white">{feature.title}</h3>
                            <p className="text-text-sub-light dark:text-text-sub-dark leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
