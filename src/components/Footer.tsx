import { Share2, Mail } from 'lucide-react';

interface FooterProps {
    isSimple?: boolean;
}

const Footer = ({ isSimple = false }: FooterProps) => {
    return (
        <footer className={`border-t border-gray-200 dark:border-gray-800 py-8 ${isSimple ? 'bg-white/50 dark:bg-black/20' : 'bg-background-light dark:bg-background-dark'}`}>
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <p className="text-sm text-gray-500 dark:text-gray-500">© 2024 IntiGrade AI. All rights reserved.</p>
                <div className="flex gap-4">
                    <a className="text-gray-400 hover:text-primary transition-colors" href="#"><Share2 className="w-5 h-5" /></a>
                    <a className="text-gray-400 hover:text-primary transition-colors" href="#"><Mail className="w-5 h-5" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
