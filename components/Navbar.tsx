'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Bell, User, Menu, X, Tv, Film, Radio } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Tv className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-wide">سبولت</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-white hover:text-red-400 transition-colors text-sm font-medium">
              الرئيسية
            </Link>
            <Link href="/movies" className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
              <Film className="w-4 h-4" />
              أفلام
            </Link>
            <Link href="/series" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              مسلسلات
            </Link>
            <Link href="/live" className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
              <Radio className="w-4 h-4" />
              <span className="relative">
                بث مباشر
                <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              </span>
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {searchOpen ? (
              <div className="flex items-center gap-2">
                <input
                  autoFocus
                  type="text"
                  placeholder="ابحث عن فيلم أو مسلسل..."
                  className="bg-gray-900 border border-gray-700 text-white placeholder-gray-400 rounded-lg px-3 py-1.5 text-sm w-48 focus:outline-none focus:border-red-500"
                />
                <button onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)} className="text-gray-300 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
            )}
            <button className="text-gray-300 hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <Link href="/login" className="hidden md:flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors">
              <User className="w-4 h-4" />
              تسجيل الدخول
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-300 hover:text-white">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900/95 rounded-xl mb-4 p-4 flex flex-col gap-3">
            <Link href="/" className="text-white py-2 border-b border-gray-800">الرئيسية</Link>
            <Link href="/movies" className="text-gray-300 py-2 border-b border-gray-800">أفلام</Link>
            <Link href="/series" className="text-gray-300 py-2 border-b border-gray-800">مسلسلات</Link>
            <Link href="/live" className="text-gray-300 py-2 border-b border-gray-800">بث مباشر</Link>
            <Link href="/login" className="text-center bg-red-600 text-white py-2 rounded-lg">تسجيل الدخول</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
