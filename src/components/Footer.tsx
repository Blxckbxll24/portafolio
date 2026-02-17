export function Footer() {
    return (
        <footer className="py-8 border-t border-border bg-secondary/10">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    &copy; {new Date().getFullYear()} Portafolio Dev. Todos los derechos reservados.
                </p>
                <p className="text-sm text-muted-foreground text-center md:text-right">
                    Creado con <span className="font-medium text-foreground">Next.js 15</span> y <span className="font-medium text-foreground">Tailwind CSS</span>
                </p>
            </div>
        </footer>
    );
}
