import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoWhite from '../assets/intigrade.png';
import LogoBlack from '../assets/intigrade black.png';
import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
    variant?: 'default' | 'process';
}

const Navigation = ({ variant = 'default' }: NavigationProps) => {
    const location = useLocation();
    const [logo, setLogo] = useState(LogoWhite);

    useEffect(() => {
        // Initial set
        const isDark = document.documentElement.classList.contains('dark');
        setLogo(isDark ? LogoWhite : LogoBlack);

        // Listen for changes
        const handleThemeChange = (e: any) => {
            setLogo(e.detail === 'dark' ? LogoWhite : LogoBlack);
        };

        window.addEventListener('theme-change', handleThemeChange);
        return () => window.removeEventListener('theme-change', handleThemeChange);
    }, []);
    if (variant === 'process') {
        return (
            <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <img src={logo} alt="IntiGrade Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-text-main-light dark:text-white font-sans">IntiGrade</span>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
                    <a
                        href="https://app.intigrade.in/"
                        className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-lg font-medium text-sm transition-all shadow-lg hover:shadow-xl"
                    >
                        Log In
                    </a>
                </div>
            </nav>
        );
    }

    return (
        <nav className="glass-nav fixed w-full top-0 z-40 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                            <img src={logo} alt="IntiGrade Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-text-main-light dark:text-white font-sans">IntiGrade</span>
                    </Link>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link
                            className={`${location.pathname === '/process' ? 'text-primary' : 'text-text-sub-light dark:text-text-sub-dark hover:text-primary dark:hover:text-primary'} transition-colors text-sm font-medium`}
                            to="/process"
                        >
                            Process
                        </Link>
                        <Link
                            className={`${location.pathname === '/features' ? 'text-primary' : 'text-text-sub-light dark:text-text-sub-dark hover:text-primary dark:hover:text-primary'} transition-colors text-sm font-medium`}
                            to="/features"
                        >
                            Features
                        </Link>
                        <Link
                            className={`${location.pathname === '/pricing' ? 'text-primary' : 'text-text-sub-light dark:text-text-sub-dark hover:text-primary dark:hover:text-primary'} transition-colors text-sm font-medium`}
                            to="/pricing"
                        >
                            Pricing
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <a
                            href="https://app.intigrade.in/"
                            className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Log In
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
