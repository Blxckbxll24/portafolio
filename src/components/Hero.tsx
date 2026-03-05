"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Background Dynamic Gradients */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] opacity-60 animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-60 animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] opacity-50 animate-pulse" style={{ animationDelay: '4s' }} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, type: "spring" }}
                        className="space-y-6 max-w-4xl"
                    >
                        <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-background shadow-2xl ring-4 ring-primary/20 bg-muted flex items-center justify-center group">
                            <Image
                                src="/Emmanuel.jpg"
                                alt="José Emmanuel Pech Herrera"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority
                            />
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mt-4">
                            José Emmanuel <br className="hidden md:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-600">
                                Pech Herrera
                            </span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-2">
                            Software Engineer
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mt-6">
                            Transformo ideas en soluciones digitales excepcionales. Especializado en crear experiencias web interactivas, escalables y orientadas al usuario.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mt-8"
                    >
                        <Button size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                            <Link href="#projects" className="flex items-center">
                                Ver Proyectos
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="rounded-full px-8 text-lg h-14 border-2 hover:bg-secondary hover:-translate-y-1 transition-all duration-300">
                            <Link href="#contact">Contáctame</Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-center gap-8 pt-10 text-muted-foreground"
                    >
                        <Link href="https://github.com/Blxckbxll24" target="_blank" className="p-3 bg-secondary/50 rounded-full hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/jos%C3%A9-emmanuel-pech-herrera-a296b12b4/" target="_blank" className="p-3 bg-secondary/50 rounded-full hover:bg-[#0A66C2] hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="mailto:contact@example.com" className="p-3 bg-secondary/50 rounded-full hover:bg-red-500 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Descubrir</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[50%] bg-primary"
                        animate={{ top: ['-50%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
