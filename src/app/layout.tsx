import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "organizatuexito",
  description: "Ayudamos a estudiantes a organizar sus estudios y maximizar su productividad con Notion transforma tu vida estudiantil ahora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="md:px-8 w-screen max-w-screen-2xl mx-auto">
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
