import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
    const [state, handleSubmit] = useForm("mlgwggjv");

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop & Centering Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:p-6"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-lg bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col outline-none"
                        >
                            <div className="p-8 relative overflow-y-auto no-scrollbar">
                                <button
                                    onClick={onClose}
                                    className="absolute right-4 top-4 text-gray-400 hover:text-primary transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                {state.succeeded ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="flex justify-center mb-6">
                                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                                <CheckCircle2 size={48} className="text-green-600 dark:text-green-400" />
                                            </div>
                                        </div>
                                        <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-4">Request Received!</h2>
                                        <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
                                            Thanks for your interest in Intigrade. Our team will contact you within 24 hours to schedule your personalized demo.
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            Got it
                                        </button>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="mb-6">
                                            <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-2">Schedule a Demo</h2>
                                            <p className="text-gray-500 dark:text-gray-400">Fill out the form below and we'll get back to you shortly.</p>
                                        </div>

                                        <form className="space-y-4" onSubmit={handleSubmit}>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                                    <input
                                                        id="name"
                                                        name="full-name"
                                                        type="text"
                                                        required
                                                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="designation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Designation</label>
                                                    <input
                                                        id="designation"
                                                        name="designation"
                                                        type="text"
                                                        required
                                                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                                                        placeholder="Principal / Teacher"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Organization/School</label>
                                                <input
                                                    id="organization"
                                                    name="organization"
                                                    type="text"
                                                    required
                                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                                                    placeholder="School Name"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        required
                                                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                                                        placeholder="john@example.com"
                                                    />
                                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                                </div>
                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                                                    <input
                                                        id="phone"
                                                        name="phone"
                                                        type="tel"
                                                        required
                                                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                                                        placeholder="+1 (555) 000-0000"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="students" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">No. of Students</label>
                                                <input
                                                    id="students"
                                                    name="student-count"
                                                    type="number"
                                                    required
                                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                                                    placeholder="500+"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="questions" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Any other questions?</label>
                                                <textarea
                                                    id="questions"
                                                    name="questions"
                                                    rows={3}
                                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white resize-none"
                                                    placeholder="How do I get started?"
                                                ></textarea>
                                                <ValidationError prefix="Message" field="questions" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={state.submitting}
                                                className="w-full bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:scale-[1.02] active:scale-[0.98]"
                                            >
                                                {state.submitting ? 'Sending...' : 'Request Demo'}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default DemoModal;
