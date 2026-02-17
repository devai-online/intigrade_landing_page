import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WaterfallSection from './components/WaterfallSection';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProcessWaterfall from './components/ProcessWaterfall';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import { ScrollToTop } from './components/ScrollToTop';
import DemoModal from './components/DemoModal';

const HomePage = ({ onDemoClick }: { onDemoClick: () => void }) => {
    return (
        <div className="min-h-screen">
            <Navigation variant="default" />
            <main className="relative overflow-hidden">
                <Hero onDemoClick={onDemoClick} />
                <WaterfallSection /> {/* This is the landing page version of the waterfall */}
                <Features />
                {/* <Testimonials /> */}
                <CTA onDemoClick={onDemoClick} />
            </main>
            <Footer />
        </div>
    );
};

function App() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <>
            <div className="fixed inset-0 pointer-events-none noise-overlay z-50"></div>
            <ScrollToTop />
            <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
            <Routes>
                <Route path="/" element={<HomePage onDemoClick={() => setIsDemoModalOpen(true)} />} />
                <Route path="/process" element={<ProcessWaterfall />} />
                <Route path="/features" element={<FeaturesPage onDemoClick={() => setIsDemoModalOpen(true)} />} />
                <Route path="/pricing" element={<PricingPage onDemoClick={() => setIsDemoModalOpen(true)} />} />
            </Routes>
        </>
    )
}

export default App
