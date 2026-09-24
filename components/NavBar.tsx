"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 px-6 py-4 border-b border-sky-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <Link href="/" className="mr-4 flex items-center gap-2">
        <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          📚 CourseCatalog
        </span>
      </Link>

      {/* Nav links */}
      <div className="flex gap-1">
        {navLinks.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-sky-100 text-sky-700 font-semibold"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-600"
              )}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
