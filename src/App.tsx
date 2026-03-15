import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import Spline from '@splinetool/react-spline';

function App() {
    return (
        <main className="w-full min-h-screen text-white font-sans selection:bg-white/30 selection:text-white relative">
            {/* Global 3D Spline Scene Background */}
            <div className="fixed inset-0 w-full h-full z-0 opacity-100 pointer-events-auto bg-[#8792c3]">
                <Spline scene="https://prod.spline.design/s4q4KHsJd4LMrY7N/scene.splinecode" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full">
                <Navbar />
                <Hero />
                <Features />
                <About />
                <Footer />
            </div>
        </main>
    );
}

export default App;
