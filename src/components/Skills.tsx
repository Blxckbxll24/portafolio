"use client";

import { motion } from "framer-motion";

const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs"],
    Tools: ["Git", "GitHub", "VS Code", "Vercel", "Docker", "Figma"],
};

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Habilidades Técnicas</h2>
                    <p className="text-muted-foreground">Tecnologías y herramientas que utilizo para dar vida a mis ideas.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold text-center md:text-left border-b border-border pb-2">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
