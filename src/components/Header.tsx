"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Me" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full p-4 sm:p-6 lg:p-8 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-16 sm:gap-20 lg:gap-24 px-0 sm:px-4 lg:px-6">
        {/* Left Side: Logo/Name */}
        <Link
          href="/"
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-white"
        >
          Kianna
        </Link>

        {/* Right Side: Navigation */}
        <nav>
          <ul className="flex space-x-4 sm:space-x-8 lg:space-x-14 text-sm sm:text-base lg:text-xl font-normal">
            {NavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors ${
                      isActive
                        ? "text-sky-300"
                        : "text-gray-300 hover:text-sky-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
