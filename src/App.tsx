import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WaterfallSection from './components/WaterfallSection';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProcessWaterfall from './components/ProcessWaterfall';
import { ScrollToTop } from './components/ScrollToTop';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Navigation variant="default" />
            <main className="relative overflow-hidden">
                <Hero />
                <WaterfallSection /> {/* This is the landing page version of the waterfall */}
                <Features />
                {/* <Testimonials /> */}
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <>
            <div className="fixed inset-0 pointer-events-none noise-overlay z-50"></div>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/process" element={<ProcessWaterfall />} />
            </Routes>
        </>
    )
}

export default App
