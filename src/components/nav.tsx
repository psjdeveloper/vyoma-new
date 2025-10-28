"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-[#0a0f24]/80 backdrop-blur-md border-b border-blue-500/20 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">Vyoma</h1>

        <div className="flex space-x-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
