import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Smartphone } from 'lucide-react';

const features = [
    {
        icon: <Layers size={24} className="text-white" />,
        title: 'Spatial Interfaces',
        description: 'Immersive 3D experiences integrated seamlessly natively on the web.'
    },
    {
        icon: <Zap size={24} className="text-white" />,
        title: 'High Performance',
        description: 'Optimized rendering techniques for smooth 60fps animations.'
    },
    {
        icon: <Shield size={24} className="text-white" />,
        title: 'Enterprise Security',
        description: 'Built with industry-leading security practices from the ground up.'
    },
    {
        icon: <Smartphone size={24} className="text-white" />,
        title: 'Fully Responsive',
        description: 'Adapts flawlessly across mobile, tablet, and desktop displays.'
    }
];

export default function Features() {
    return (
        <section id="features" className="py-32 px-6 relative z-10 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Capabilities that scale
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        We combine cutting-edge web technologies to deliver experiences
                        that don't just look amazing, but perform remarkably.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 group cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
