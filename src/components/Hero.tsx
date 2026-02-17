"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-50 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] opacity-50 animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 max-w-3xl"
                    >
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-muted flex items-center justify-center">
                            <Image
                                src="/Emmanuel.jpg"
                                alt="José Emmanuel Pech Herrera"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <span className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full border border-border/50">
                            Disponible para trabajar
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            José Emmanuel <br className="hidden md:block" />
                            <span className="text-primary">Pech Herrera</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                            Software Engineer
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Creo soluciones digitales excepcionales, desde webs interactivas hasta aplicaciones robustas, con un enfoque en diseño y rendimiento.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Button size="lg" className="rounded-full px-8 text-base h-12">
                            <Link href="#projects">Ver Proyectos</Link>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-12">
                            <Link href="#contact">Contáctame</Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center gap-6 pt-8 text-muted-foreground"
                    >
                        <Link href="https://github.com/Blxckbxll24" target="_blank" className="hover:text-foreground transition-colors">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/jos%C3%A9-emmanuel-pech-herrera-a296b12b4/" target="_blank" className="hover:text-foreground transition-colors">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="mailto:contact@example.com" className="hover:text-foreground transition-colors">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
