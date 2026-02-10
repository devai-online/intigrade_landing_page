import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme as 'light' | 'dark';
            }
            // Default to dark mode
            return 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
        // Dispatch custom event for theme-aware components like Navigation
        window.dispatchEvent(new CustomEvent('theme-change', { detail: theme }));
    }, [theme]);

    return (
        <div className="flex items-center bg-gray-100 dark:bg-white/10 rounded-full p-1 relative">
            <button
                onClick={() => setTheme('light')}
                className={`p-1.5 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-white shadow-sm text-yellow-500' : 'text-gray-400 hover:text-gray-600'}`}
                aria-label="Switch to light theme"
            >
                <Sun className="w-4 h-4" />
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={`p-1.5 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-surface-dark text-white shadow-sm' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
                aria-label="Switch to dark theme"
            >
                <Moon className="w-4 h-4" />
            </button>
        </div>
    );
};
