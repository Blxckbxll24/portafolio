"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Server, Rocket, Search } from "lucide-react";

const services = [
    {
        icon: <MonitorSmartphone className="h-8 w-8" />,
        title: "Desarrollo Frontend",
        description: "Creación de interfaces de usuario interactivas, accesibles y responsivas utilizando React, Next.js y Tailwind CSS, garantizando la mejor experiencia.",
    },
    {
        icon: <Server className="h-8 w-8" />,
        title: "Desarrollo Backend",
        description: "Construcción de APIs robustas, escalables y seguras con Node.js, Express y bases de datos SQL/NoSQL como PostgreSQL y MongoDB.",
    },
    {
        icon: <Rocket className="h-8 w-8" />,
        title: "Optimización de Rendimiento",
        description: "Análisis y mejora de aplicaciones web existentes para incrementar la velocidad de carga, SEO técnico y la eficiencia general del código.",
    },
    {
        icon: <Search className="h-8 w-8" />,
        title: "SEO y Posicionamiento",
        description: "Implementación de buenas prácticas de SEO en la estructura de la web para mejorar la visibilidad orgánica en los motores de búsqueda de Google.",
    },
];

export function Services() {
    return (
        <section id="services" className="py-20 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Mis Servicios</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Soluciones tecnológicas integrales diseñadas para impulsar tu negocio al siguiente nivel.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden"
                        >
                            {/* Subtle hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                            <div className="p-4 rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0 shadow-sm relative z-10">
                                {service.icon}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-[15px]">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
