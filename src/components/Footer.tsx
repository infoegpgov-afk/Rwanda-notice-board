'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Rwanda Notice Board</h3>
            <p className="text-sm">
              Your trusted source for news, announcements, jobs, and opportunities in Rwanda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-white transition">
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/news" className="hover:text-white transition">
                  News
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-white transition">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {currentYear} Rwanda Notice Board. All rights reserved.
            </p>
            <p className="text-sm mt-4 md:mt-0">
              Made with ❤️ for Rwanda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
