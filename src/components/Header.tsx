'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-rwanda-700">
              🇷🇼 Notice Board
            </div>
            <div className="text-xs text-rwanda-600">Amakuru • Amatangazo • Amahirwe</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-rwanda-700 transition">
              Home
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-rwanda-700 transition">
              News
            </Link>
            <Link href="/announcements" className="text-gray-700 hover:text-rwanda-700 transition">
              Announcements
            </Link>
            <Link href="/jobs" className="text-gray-700 hover:text-rwanda-700 transition">
              Jobs
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-rwanda-700 transition">
              Search
            </Link>
          </nav>

          {/* Auth Links */}
          <div className="hidden md:flex gap-4 items-center">
            <Link href="/login" className="text-gray-700 hover:text-rwanda-700 transition">
              Login
            </Link>
            <Link href="/register" className="bg-rwanda-600 text-white px-4 py-2 rounded-lg hover:bg-rwanda-700 transition">
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-rwanda-700">
              Home
            </Link>
            <Link href="/news" className="block py-2 text-gray-700 hover:text-rwanda-700">
              News
            </Link>
            <Link href="/announcements" className="block py-2 text-gray-700 hover:text-rwanda-700">
              Announcements
            </Link>
            <Link href="/jobs" className="block py-2 text-gray-700 hover:text-rwanda-700">
              Jobs
            </Link>
            <Link href="/search" className="block py-2 text-gray-700 hover:text-rwanda-700">
              Search
            </Link>
            <div className="flex gap-2 pt-4">
              <Link href="/login" className="flex-1 text-center text-gray-700 py-2 border border-rwanda-600">
                Login
              </Link>
              <Link href="/register" className="flex-1 text-center bg-rwanda-600 text-white py-2 rounded">
                Register
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
