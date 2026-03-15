import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/80 backdrop-blur-xl py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <div className="w-4 h-4 bg-black rounded-full" />
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">Nexora</span>
                </div>

                <p className="text-gray-500 text-sm font-light">
                    © {new Date().getFullYear()} Nexora Studios. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                        <Twitter size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
