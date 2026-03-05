import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joseephdev.com"),
  title: {
    default: "José Emmanuel Pech Herrera | Desarrollador Web & Software",
    template: "%s | José Emmanuel Pech Herrera",
  },
  description: "Portafolio profesional de José Emmanuel Pech Herrera. Especialista en React, Next.js, Tailwind CSS y Node.js. Descubre mis proyectos, trayectoria y habilidades técnicas.",
  keywords: ["Desarrollador Web", "Software Engineer", "Frontend Developer", "Backend Developer", "React", "Next.js", "Vue.js", "Tailwind CSS", "Programador Web México", "Freelance Developer"],
  authors: [{ name: "José Emmanuel Pech Herrera" }],
  creator: "José Emmanuel Pech Herrera",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.joseephdev.com",
    title: "José Emmanuel Pech Herrera | Desarrollador Web & Software",
    description: "Creación de interfaces web modernas y aplicaciones escalables. Descubre mis proyectos y servicios.",
    siteName: "Portafolio de José Emmanuel Pech Herrera",
    images: [
      {
        url: "/Emmanuel.jpg",
        width: 1200,
        height: 630,
        alt: "José Emmanuel Pech Herrera - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "José Emmanuel Pech Herrera | Desarrollador Web & Software",
    description: "Creación de interfaces web modernas y aplicaciones escalables. Descubre mis proyectos y servicios.",
    images: ["/Emmanuel.jpg"],
    creator: "@blxckbxll",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
