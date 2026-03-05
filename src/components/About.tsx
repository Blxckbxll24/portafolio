"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout } from "lucide-react";

const features = [
    {
        icon: <Layout className="h-6 w-6" />,
        title: "Frontend Development",
        description: "Creación de interfaces modernas y responsivas con React, Next.js y Tailwind CSS.",
    },
    {
        icon: <Database className="h-6 w-6" />,
        title: "Backend Development",
        description: "Desarrollo de APIs RESTful y bases de datos robustas con Node.js, Express y SQL/NoSQL.",
    },
    {
        icon: <Code className="h-6 w-6" />,
        title: "Clean Code",
        description: "Comprometido con las buenas prácticas, principios SOLID y arquitectura escalable.",
    },
];

export function About() {
    return (
        <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Sobre Mí</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Soy ingeniero en desarrollo y gestión de software, apasionado por la tecnología y la resolución de problemas complejos.
                        Con experiencia en todo el stack de desarrollo, me especializo en construir aplicaciones web
                        que no solo funcionan perfectamente, sino que también ofrecen una experiencia de usuario inolvidable.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
