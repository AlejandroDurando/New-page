import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 relative z-10 bg-black/70 backdrop-blur-lg overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-8"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass text-sm font-medium tracking-wide">
                        <span className="text-gradient">Our Philosophy</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        We build digital <br />
                        realities that inspire.
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                        In a world of flat interfaces, depth matters. We bridge the gap between imagination and the web browser, utilizing modern frameworks and interactive 3D assets to tell your brand's story.
                    </p>

                    <div className="flex items-center gap-8 pt-4">
                        <div>
                            <h4 className="text-4xl font-black text-white mb-2">99%</h4>
                            <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Satisfaction</span>
                        </div>
                        <div className="w-[1px] h-12 bg-white/10" />
                        <div>
                            <h4 className="text-4xl font-black text-white mb-2">150+</h4>
                            <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Projects</span>
                        </div>
                    </div>
                </motion.div>

                {/* Abstract Image container / Graphics Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full"
                >
                    <div className="aspect-square rounded-3xl glass p-2 relative">
                        <div className="w-full h-full rounded-[22px] bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center overflow-hidden border border-white/5 relative">
                            {/* Internal glowing element to mimic 3D depth */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                            <div className="w-32 h-32 rounded-full border border-white/20 blur-[2px] animate-pulse" />
                            <div className="absolute w-48 h-48 rounded-full border border-white/10 blur-[4px]" style={{ animationDuration: '4s' }} />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
