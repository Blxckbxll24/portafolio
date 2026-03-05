"use client";

import { motion } from "framer-motion";
import { Code, Database, Wrench } from "lucide-react";

const skills = [
    {
        category: "Frontend",
        icon: <Code className="w-6 h-6" />,
        color: "from-blue-500/20 to-cyan-500/20",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "Vue.js"]
    },
    {
        category: "Backend",
        icon: <Database className="w-6 h-6" />,
        color: "from-green-500/20 to-emerald-500/20",
        items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs", "Python", ".NET"]
    },
    {
        category: "Herramientas",
        icon: <Wrench className="w-6 h-6" />,
        color: "from-purple-500/20 to-pink-500/20",
        items: ["Git", "GitHub", "VS Code", "Vercel", "Docker", "Figma", "Postman"]
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Habilidades Técnicas</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Tecnologías y herramientas que domino para construir soluciones digitales de alta calidad.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl hover:shadow-primary/5 p-8"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skillGroup.color} rounded-bl-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-secondary text-primary group-hover:scale-110 transition-transform duration-300">
                                    {skillGroup.icon}
                                </div>
                                <h3 className="text-2xl font-semibold">
                                    {skillGroup.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * i + (index * 0.1) }}
                                        className="px-4 py-2 bg-secondary/50 text-foreground rounded-xl text-sm font-medium border border-transparent hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
