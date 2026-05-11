'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Tv, Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-[#0a0a0f] to-purple-950/20" />
      </div>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
              <Tv className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-black text-2xl">سبولت</span>
          </Link>
          <h1 className="text-white font-bold text-xl">
            {mode === 'login' ? 'أهلاً بعودتك!' : 'انضم إلى سبولت'}
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            {mode === 'login' ? 'سجّل دخولك لمواصلة المشاهدة' : 'ابدأ رحلتك مجاناً اليوم'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-2xl">
          {/* Mode Toggle */}
          <div className="flex bg-gray-800 rounded-xl p-1 mb-6">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${mode === 'login' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              تسجيل الدخول
            </button>
            <button
              onClick={() => setMode('register')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${mode === 'register' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              حساب جديد
            </button>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            {/* Name (register only) */}
            {mode === 'register' && (
              <div className="relative">
                <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-xl pr-10 pl-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-xl pr-10 pl-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="كلمة المرور"
                className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-xl pr-10 pl-10 py-3 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {mode === 'login' && (
              <div className="text-left">
                <button type="button" className="text-red-400 hover:text-red-300 text-sm">
                  نسيت كلمة المرور؟
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors mt-2"
            >
              {mode === 'login' ? 'دخول' : 'إنشاء حساب'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-gray-500 text-xs">أو</span>
            <div className="flex-1 h-px bg-gray-800" />
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <button className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl transition-colors border border-gray-700">
              <span className="text-xl">G</span>
              <span className="font-medium text-sm">تسجيل الدخول بـ Google</span>
            </button>
          </div>

          {/* Plans */}
          {mode === 'register' && (
            <div className="mt-6 p-4 bg-gradient-to-r from-red-950/40 to-purple-950/30 border border-red-900/30 rounded-xl">
              <p className="text-white font-bold text-sm mb-2">🎉 جرّب مجاناً 7 أيام</p>
              <p className="text-gray-400 text-xs">وصول كامل لجميع الأفلام والمسلسلات والمباريات. لا بطاقة ائتمانية مطلوبة.</p>
            </div>
          )}
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          بتسجيل دخولك، أنت توافق على{' '}
          <button className="text-gray-400 hover:text-white">شروط الاستخدام</button>{' '}
          و{' '}
          <button className="text-gray-400 hover:text-white">سياسة الخصوصية</button>
        </p>
      </div>
    </div>
  );
}
