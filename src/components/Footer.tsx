import { Mail } from 'lucide-react';

interface FooterProps {
    isSimple?: boolean;
}

const Footer = ({ isSimple = false }: FooterProps) => {
    return (
        <footer className={`border-t border-gray-200 dark:border-gray-800 py-8 ${isSimple ? 'bg-white/50 dark:bg-black/20' : 'bg-background-light dark:bg-background-dark'}`}>
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <p className="text-sm text-gray-500 dark:text-gray-500">© 2024 IntiGrade. All rights reserved.</p>
                    <a
                        href="https://www.devai.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-400 dark:text-gray-600 hover:text-primary transition-colors underline underline-offset-2 decoration-gray-700/30"
                    >
                        A Product of DevAI Labs Computing
                    </a>
                </div>
                <div className="flex gap-6 items-center">
                    <a
                        href="mailto:hello@intigrade.in"
                        className="flex items-center gap-2 text-gray-500 hover:text-primary transition-all duration-200 group group-hover:cursor-pointer"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="text-sm font-medium">hello@intigrade.in</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
