"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Sobre mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="glass mt-4 rounded-2xl px-4 py-3 flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 z-50 group">
                        <div className="p-2 bg-primary rounded-lg group-hover:scale-105 transition-transform">
                            <Code2 className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">Portafolio</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="ml-2 pl-2 border-l border-border">
                            <Button asChild size="sm">
                                <Link href="#contact">Contratar</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none"
                        >
                            <span className="sr-only">Abrir menú</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 inset-x-0 mx-4 md:hidden"
                    >
                        <div className="glass rounded-xl p-4 shadow-xl">
                            <div className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-3 text-base font-medium text-foreground hover:bg-accent rounded-lg transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-2">
                                    <Button className="w-full" asChild>
                                        <Link href="#contact" onClick={() => setIsOpen(false)}>
                                            Contratar
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
