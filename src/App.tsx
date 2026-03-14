import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (
        <main className="w-full bg-black min-h-screen text-white font-sans selection:bg-white/30 selection:text-white">
            <Navbar />
            <Hero />
            <Features />
            <About />
            <Footer />
        </main>
    );
}

export default App;
