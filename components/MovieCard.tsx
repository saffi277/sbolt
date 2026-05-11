'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Star, Plus, Info } from 'lucide-react';
import type { Movie } from '@/lib/data';

interface MovieCardProps {
  movie: Movie;
  size?: 'sm' | 'md' | 'lg';
}

const qualityColors = {
  '4K': 'bg-yellow-500 text-black',
  'FHD': 'bg-blue-500 text-white',
  'HD': 'bg-green-500 text-white',
};

export default function MovieCard({ movie, size = 'md' }: MovieCardProps) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'w-36',
    md: 'w-44',
    lg: 'w-56',
  };

  return (
    <Link href={`/watch/${movie.id}`}>
      <div
        className={`${sizeClasses[size]} flex-shrink-0 cursor-pointer group`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Poster */}
        <div className={`relative aspect-[2/3] rounded-xl overflow-hidden bg-gray-800 transition-transform duration-300 ${hovered ? 'scale-105 shadow-2xl shadow-black/80' : ''}`}>
          {!imgError ? (
            <Image
              src={movie.posterUrl}
              alt={movie.title}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              sizes="(max-width: 768px) 144px, 176px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
              <span className="text-gray-400 text-xs text-center px-2">{movie.title}</span>
            </div>
          )}

          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors group/play">
              <Play className="w-5 h-5 text-black group-hover/play:text-white fill-current mr-[-2px]" />
            </button>
            <div className="flex gap-2">
              <button
                onClick={(e) => { e.preventDefault(); }}
                className="w-8 h-8 bg-gray-800/80 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={(e) => { e.preventDefault(); }}
                className="w-8 h-8 bg-gray-800/80 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Info className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${qualityColors[movie.quality]}`}>
              {movie.quality}
            </span>
            {movie.type === 'series' && (
              <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-purple-600 text-white">
                مسلسل
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 rounded-full px-2 py-0.5">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-white font-medium">{movie.rating}</span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-2 px-1">
          <h3 className="text-white text-sm font-medium truncate">{movie.title}</h3>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-gray-400 text-xs">{movie.year}</span>
            {movie.duration && <span className="text-gray-500 text-xs">{movie.duration}</span>}
            {movie.seasons && <span className="text-gray-500 text-xs">{movie.seasons} مواسم</span>}
          </div>
          <span className="text-gray-500 text-xs">{movie.language}</span>
        </div>
      </div>
    </Link>
  );
}
