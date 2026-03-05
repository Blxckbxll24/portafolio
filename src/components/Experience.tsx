"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
    {
        type: "work",
        title: "Ingeniero en Desarrollo y Gestión de Software (Freelance)",
        organization: "Proyectos Independientes",
        period: "2024 - 2025",
        description: "Desarrollo de landing pages, aplicaciones web interactivas y sistemas personalizados. Gestión completa del ciclo de vida del software enfocado en resolver necesidades de clientes.",
    },
    {
        type: "education",
        title: "Ingeniería en Desarrollo y Gestión de Software",
        organization: "Formación Universitaria",
        period: "2022 - 2026",
        description: "Especialización integral en ingeniería de software, abarcando desarrollo frontend y backend, arquitectura de sistemas, bases de datos y metodologías ágiles SDLC.",
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-secondary/20 relative overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Trayectoria</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Mi experiencia profesional y de aprendizaje continuo a lo largo de los años.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative cursor-default">
                    {/* Línea vertical centrada (se oculta en móviles pequeños, se muestra en md) */}
                    <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2"></div>

                    <div className="space-y-12 md:space-y-20">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 50 }}
                                className="relative flex flex-col md:flex-row items-start md:items-center justify-between group"
                            >
                                {/* Contenido Izquierda/Derecha Alternado (en móvil todo va a la derecha de la línea) */}
                                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-3 md:text-left md:pl-12"}`}>
                                    <div className="glass p-8 rounded-3xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative bg-background/50 border border-border/50 hover:border-primary/30">

                                        {/* Triángulo apunte a la línea (solo visible en md+) */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 border-[10px] border-transparent transition-colors duration-300 ${index % 2 === 0 ? "left-full border-l-border/50 group-hover:border-l-primary/30" : "right-full border-r-border/50 group-hover:border-r-primary/30"}`}></div>
                                        {/* Triángulo interno para fondo */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 border-[9px] border-transparent ${index % 2 === 0 ? "left-full border-l-background/95 -ml-px" : "right-full border-r-background/95 -mr-px"}`}></div>

                                        <div className={`inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                                            {exp.period}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{exp.title}</h3>
                                        <h4 className="text-muted-foreground/80 font-medium mb-4 text-base">{exp.organization}</h4>
                                        <p className="text-muted-foreground text-[15px] leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Punto central con Ícono */}
                                <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-background bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 flex items-center justify-center z-10 md:order-2 shadow-lg">
                                    {exp.type === "work" ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                                </div>

                                {/* Espaciador invisible para mantener balance (solo en desktop) */}
                                <div className={`hidden md:block w-[45%] ${index % 2 === 0 ? "order-3" : "order-1"}`}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
