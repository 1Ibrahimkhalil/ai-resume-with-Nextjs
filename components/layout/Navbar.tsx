"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { usePuterStore } from "@/lib/puter";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { auth, isLoading } = usePuterStore();
  const router = useRouter();
  const pathname = usePathname();

  const navLinkClass = (href: string) =>
    `block rounded-lg px-3 py-2 transition-colors duration-200 ${
      pathname === href
        ? "bg-blue-50 font-semibold text-blue-600"
        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
    }`;

  const closeMenu = () => setIsMenuOpen(false);

  const handleAuthClick = async () => {
    closeMenu();

    if (auth.isAuthenticated) {
      await auth.signOut();
    } else {
      router.push("/auth");
    }
  };

  return (
    <nav className="navbar relative z-50 flex flex-wrap items-center justify-between gap-4">
      <Link href="/" className="shrink-0" onClick={closeMenu}>
        <span className="text-2xl font-bold text-gradient">ResuAI</span>
      </Link>

      {/* Desktop navigation */}
      <div className="hidden items-center gap-2 md:flex">
        <Link href="/" className={navLinkClass("/")}>
          Home
        </Link>

        {!isLoading && auth.isAuthenticated && (
          <>
            <Link href="/upload" className={navLinkClass("/upload")}>
              Upload Resume
            </Link>

            <Link href="/wipe" className={navLinkClass("/wipe")}>
              Wipe Files
            </Link>
          </>
        )}

        <button
          type="button"
          className="primary-button w-fit"
          onClick={handleAuthClick}
          disabled={isLoading}
        >
          {isLoading
            ? "Loading..."
            : auth.isAuthenticated
              ? "Log Out"
              : "Sign In"}
        </button>
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow-lg md:hidden">
          <Link
            href="/"
            className={navLinkClass("/")}
            onClick={closeMenu}
          >
            Home
          </Link>

          {!isLoading && auth.isAuthenticated && (
            <>
              <Link
                href="/upload"
                className={navLinkClass("/upload")}
                onClick={closeMenu}
              >
                Upload Resume
              </Link>

              <Link
                href="/wipe"
                className={navLinkClass("/wipe")}
                onClick={closeMenu}
              >
                Wipe Files
              </Link>
            </>
          )}

          <button
            type="button"
            className="primary-button w-full"
            onClick={handleAuthClick}
            disabled={isLoading}
          >
            {isLoading
              ? "Loading..."
              : auth.isAuthenticated
                ? "Log Out"
                : "Sign In"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
