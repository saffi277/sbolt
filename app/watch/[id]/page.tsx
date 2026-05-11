'use client';

import { use } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Download, Share2, Heart, Play, SkipBack, SkipForward, Volume2, Maximize, Settings } from 'lucide-react';
import { ALL_MOVIES } from '@/lib/data';

export default function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const movie = ALL_MOVIES.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-xl mb-4">المحتوى غير موجود</p>
          <Link href="/" className="text-red-400 hover:text-red-300">العودة للرئيسية</Link>
        </div>
      </div>
    );
  }

  const related = ALL_MOVIES.filter((m) => m.id !== id && m.genres.some((g) => movie.genres.includes(g))).slice(0, 6);

  return (
    <div className="min-h-screen pt-16">
      {/* Video Player */}
      <div className="w-full bg-black aspect-video max-h-[70vh] relative flex items-center justify-center">
        {/* Fake Player UI */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${movie.backdropUrl})` }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm border border-white/30">
            <Play className="w-10 h-10 text-white fill-white mr-[-3px]" />
          </div>
          <p className="text-white/70 mt-4 text-sm">اضغط للتشغيل</p>
        </div>

        {/* Player Controls Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
          {/* Progress Bar */}
          <div className="w-full bg-gray-600 rounded-full h-1 mb-3 cursor-pointer group">
            <div className="bg-red-500 h-1 rounded-full w-1/3 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="text-white hover:text-gray-300"><SkipBack className="w-5 h-5" /></button>
              <button className="text-white hover:text-gray-300"><Play className="w-6 h-6 fill-current" /></button>
              <button className="text-white hover:text-gray-300"><SkipForward className="w-5 h-5" /></button>
              <button className="text-white hover:text-gray-300"><Volume2 className="w-5 h-5" /></button>
              <span className="text-white text-xs">0:00 / {movie.duration || '2:00:00'}</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-white hover:text-gray-300"><Settings className="w-5 h-5" /></button>
              <button className="text-white hover:text-gray-300"><Maximize className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link href="/" className="absolute top-4 right-4 flex items-center gap-2 text-white/80 hover:text-white bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-sm">
          <ArrowRight className="w-4 h-4" />
          <span className="text-sm">رجوع</span>
        </Link>
      </div>

      {/* Movie Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-white font-black text-2xl sm:text-3xl mb-1">{movie.title}</h1>
                {movie.titleEn && <p className="text-gray-400 text-sm">{movie.titleEn}</p>}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="text-gray-400 hover:text-red-400 transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Share2 className="w-6 h-6" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Download className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Meta Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="flex items-center gap-1 bg-yellow-500/20 border border-yellow-500/30 px-2 py-1 rounded">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm">{movie.rating}/10</span>
              </div>
              <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">{movie.year}</span>
              {movie.duration && <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">{movie.duration}</span>}
              <span className="bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded">{movie.language}</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded font-bold">{movie.quality}</span>
              {movie.seasons && (
                <span className="bg-purple-900/50 text-purple-300 text-xs px-2 py-1 rounded">
                  {movie.seasons} مواسم • {movie.episodes} حلقة
                </span>
              )}
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map((g) => (
                <span key={g} className="border border-gray-700 text-gray-400 text-xs px-3 py-1 rounded-full">
                  {g === 'action' ? 'أكشن' : g === 'drama' ? 'دراما' : g === 'comedy' ? 'كوميديا' : g === 'animation' ? 'أنيميشن' : g}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="bg-gray-900/50 rounded-xl p-4 mb-6">
              <h3 className="text-white font-bold mb-2">القصة</h3>
              <p className="text-gray-300 leading-relaxed">{movie.description}</p>
            </div>
          </div>

          {/* Quality Selector */}
          <div className="lg:w-64">
            <div className="bg-gray-900 rounded-xl p-4 mb-4">
              <h3 className="text-white font-bold mb-3">خيارات المشاهدة</h3>
              <div className="flex flex-col gap-2">
                {['4K Ultra HD', 'Full HD 1080p', 'HD 720p', 'SD 480p'].map((q) => (
                  <button key={q} className={`text-right px-3 py-2 rounded-lg text-sm transition-colors ${q.includes('4K') ? 'bg-red-600 text-white font-medium' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-4">
              <h3 className="text-white font-bold mb-3">اللغة والترجمة</h3>
              <div className="flex flex-col gap-2">
                {['مدبلج عربي', 'مترجم عربي', 'English Original'].map((l) => (
                  <button key={l} className={`text-right px-3 py-2 rounded-lg text-sm transition-colors ${l === movie.language ? 'bg-blue-600 text-white font-medium' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Content */}
        {related.length > 0 && (
          <div className="mt-8">
            <h2 className="text-white font-bold text-xl mb-4">محتوى مشابه</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {related.map((m) => (
                <Link key={m.id} href={`/watch/${m.id}`}>
                  <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                    <div className="aspect-[2/3] bg-gray-800 relative">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${m.posterUrl})` }}
                      />
                    </div>
                    <div className="p-2">
                      <p className="text-white text-xs font-medium truncate">{m.title}</p>
                      <p className="text-gray-500 text-xs">{m.year}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
