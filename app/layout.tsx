import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Advanced Web Technologies — Lab 2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <NavBar />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-sky-100 mt-16 py-6 text-center text-sm text-sky-400 bg-white">
          © 2026 Course Catalog · Advanced Web Technologies Lab 2
        </footer>
      </body>
    </html>
  );
}
