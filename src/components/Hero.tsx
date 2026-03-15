import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="relative w-full h-screen overflow-hidden text-white">
            {/* Hero Content Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-6 text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="max-w-4xl pt-24"
                >

                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none text-white/50"
            >
                <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
