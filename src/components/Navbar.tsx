import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="glass max-w-7xl mx-auto rounded-2xl px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <div className="w-4 h-4 bg-black rounded-full" />
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">Nexora</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#home" className="text-sm text-gray-300 hover:text-white transition-colors">Home</a>
                    <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
                    <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors">
                        Get Started
                    </button>
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 left-6 right-6 glass rounded-2xl p-6 flex flex-col gap-4 md:hidden"
                >
                    <a href="#home" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#features" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Features</a>
                    <button className="w-full py-3 rounded-full bg-white text-black font-medium mt-2">
                        Get Started
                    </button>
                </motion.div>
            )}
        </nav>
    );
}
