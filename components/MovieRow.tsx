'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import type { Movie } from '@/lib/data';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  cardSize?: 'sm' | 'md' | 'lg';
}

export default function MovieRow({ title, movies, cardSize = 'md' }: MovieRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4 px-4 sm:px-6">
        <h2 className="text-white font-bold text-lg sm:text-xl">{title}</h2>
        <button className="text-red-400 hover:text-red-300 text-sm transition-colors">عرض الكل</button>
      </div>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-full bg-gradient-to-l from-black/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>

        {/* Movies List */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 pb-2"
          style={{ direction: 'rtl' }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} size={cardSize} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-full bg-gradient-to-r from-black/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
      </div>
    </section>
  );
}
