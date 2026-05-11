'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Info, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { FEATURED_MOVIES } from '@/lib/data';

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const movie = FEATURED_MOVIES[current];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % FEATURED_MOVIES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[70vh] min-h-[500px] max-h-[750px] w-full overflow-hidden">
      {/* Backdrop */}
      <Image
        src={movie.backdropUrl}
        alt={movie.title}
        fill
        className="object-cover transition-all duration-700"
        priority
        sizes="100vw"
      />

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0f]/60" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end pb-16 px-6 sm:px-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              {movie.type === 'movie' ? 'فيلم' : 'مسلسل'}
            </span>
            <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
              {movie.quality}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 font-bold text-sm">{movie.rating}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-white font-black text-3xl sm:text-5xl leading-tight mb-2">
            {movie.title}
          </h1>
          {movie.titleEn && (
            <p className="text-gray-400 text-sm mb-3" style={{ direction: 'ltr', textAlign: 'right' }}>
              {movie.titleEn}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-3 mb-4 text-sm text-gray-300">
            <span>{movie.year}</span>
            {movie.duration && <span>• {movie.duration}</span>}
            <span>• {movie.language}</span>
          </div>

          {/* Description */}
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6 max-w-xl">
            {movie.description}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href={`/watch/${movie.id}`}
              className="flex items-center gap-2 bg-white hover:bg-gray-200 text-black font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <Play className="w-5 h-5 fill-current" />
              شاهد الآن
            </Link>
            <Link
              href={`/movie/${movie.id}`}
              className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-xl transition-colors backdrop-blur-sm"
            >
              <Info className="w-5 h-5" />
              التفاصيل
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Dots + Arrows */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <button onClick={() => setCurrent((current - 1 + FEATURED_MOVIES.length) % FEATURED_MOVIES.length)}
          className="text-white/70 hover:text-white">
          <ChevronRight className="w-5 h-5" />
        </button>
        {FEATURED_MOVIES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${i === current ? 'w-6 bg-red-500' : 'w-1.5 bg-gray-500'}`}
          />
        ))}
        <button onClick={() => setCurrent((current + 1) % FEATURED_MOVIES.length)}
          className="text-white/70 hover:text-white">
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
