"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Zentilia",
        description: "E-commerce robusto especializado en venta de equipos biomédicos. Incluye carrito de compras, gestión de usuarios y panel administrativo optimizado.",
        tags: ["Laravel", "Breeze", "Tailwind CSS"],
        color: "from-blue-500/20 to-cyan-500/20",
        image: "/zentilia.png",
    },
    {
        title: "Sistema de Predicción de Ingresos",
        description: "Herramienta analítica avanzada para proyectar ingresos futuros, integrando visualización de datos y modelos predictivos.",
        tags: ["Vue.js", "Tailwind CSS", "Python API"],
        color: "from-purple-500/20 to-pink-500/20",
        image: "/PHOTO-2025-07-28-17-07-02.jpg",
    },
    {
        title: "Blog de Recetas",
        description: "Plataforma interactiva para compartir y descubrir recetas culinarias, con un backend potente y una interfaz de usuario fluida.",
        tags: ["Vue.js", "Tailwind CSS", ".NET API"],
        color: "from-green-500/20 to-emerald-500/20",
        image: "/PHOTO-2025-03-05-14-34-12.jpg",
        
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Proyectos Destacados</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Una selección de trabajos recientes que demuestran mis capacidades técnicas y atención al detalle.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg flex flex-col"
                        >
                            {/* Image Placeholder with Gradient */}
                            <div className={`relative h-48 w-full bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="glass px-4 py-2 rounded-lg text-sm font-medium z-10 transition-transform duration-500 group-hover:scale-105">Vista Previa</div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 text-sm flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
