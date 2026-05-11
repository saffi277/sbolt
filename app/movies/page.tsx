'use client';

import { useState } from 'react';
import { Film, SlidersHorizontal } from 'lucide-react';
import MovieCard from '@/components/MovieCard';
import { ALL_MOVIES, CATEGORIES } from '@/lib/data';

export default function MoviesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'rating' | 'year'>('rating');

  const filtered = ALL_MOVIES.filter((m) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'movie') return m.type === 'movie';
    if (activeCategory === 'series') return m.type === 'series';
    return m.genres.includes(activeCategory as never);
  }).sort((a, b) => sortBy === 'rating' ? b.rating - a.rating : b.year - a.year);

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Film className="w-6 h-6 text-red-500" />
          <h1 className="text-white font-black text-2xl sm:text-3xl">المكتبة</h1>
          <span className="text-gray-500 text-sm">({filtered.length} عنوان)</span>
        </div>
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'rating' | 'year')}
            className="bg-gray-800 text-gray-300 text-sm px-3 py-1.5 rounded-lg border border-gray-700 focus:outline-none focus:border-red-500"
          >
            <option value="rating">الأعلى تقييماً</option>
            <option value="year">الأحدث</option>
          </select>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <Film className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p>لا يوجد محتوى في هذا التصنيف</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} size="sm" />
          ))}
        </div>
      )}
    </div>
  );
}
