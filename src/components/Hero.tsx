import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative w-full h-screen overflow-hidden bg-black text-white">
            {/* 3D Spline Scene Background */}
            <div className="absolute inset-0 w-full h-full z-0 opacity-80 pointer-events-auto">
                <Spline scene="https://prod.spline.design/s4q4KHsJd4LMrY7N/scene.splinecode" />
            </div>

            {/* Hero Content Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-6 text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="max-w-4xl pt-24"
                >
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-white/10 text-sm font-medium tracking-wide">
                        <span className="text-gradient">Introducing the Future</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-tight text-white drop-shadow-2xl">
                        Design Beyond
                        <br className="hidden md:block" /> Dimensions.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Experience spatial web interactions that elevate your digital presence.
                        We build immersive, high-performance web experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
                        <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                            Start Project
                            <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors">
                            View Showcase
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
            >
                <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
}
