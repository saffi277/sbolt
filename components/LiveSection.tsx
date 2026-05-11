'use client';

import Link from 'next/link';
import { Radio, Clock } from 'lucide-react';
import { LIVE_MATCHES } from '@/lib/data';

export default function LiveSection() {
  const liveNow = LIVE_MATCHES.filter((m) => m.status === 'live');
  const upcoming = LIVE_MATCHES.filter((m) => m.status === 'upcoming');

  return (
    <section className="mb-10 px-4 sm:px-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Radio className="w-5 h-5 text-red-500" />
          <h2 className="text-white font-bold text-lg sm:text-xl">بث مباشر</h2>
          {liveNow.length > 0 && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
              {liveNow.length} مباشر
            </span>
          )}
        </div>
        <Link href="/live" className="text-red-400 hover:text-red-300 text-sm transition-colors">
          عرض الكل
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {LIVE_MATCHES.map((match) => (
          <Link key={match.id} href={`/live/${match.id}`}>
            <div className={`relative rounded-xl overflow-hidden border transition-all hover:scale-102 hover:shadow-xl ${
              match.status === 'live'
                ? 'border-red-600/50 bg-gradient-to-br from-gray-900 to-red-950/30'
                : 'border-gray-800 bg-gray-900/50'
            }`}>
              {/* Live Badge */}
              {match.status === 'live' && (
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  مباشر
                </div>
              )}
              {match.status === 'upcoming' && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  قريباً
                </div>
              )}

              <div className="p-4 pt-10">
                {/* League */}
                <p className="text-gray-400 text-xs mb-3">{match.league}</p>

                {/* Teams */}
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="w-10 h-10 bg-gray-700 rounded-full mx-auto mb-1 flex items-center justify-center text-lg">
                      ⚽
                    </div>
                    <p className="text-white text-xs font-medium">{match.teamHome}</p>
                  </div>

                  <div className="text-center px-3">
                    {match.status === 'live' ? (
                      <div>
                        <div className="text-white font-black text-2xl">
                          {match.scoreHome} - {match.scoreAway}
                        </div>
                        <div className="text-red-400 text-xs font-medium">{match.time}</div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-gray-500 font-bold text-lg">VS</div>
                        <div className="text-gray-400 text-xs">{match.time}</div>
                      </div>
                    )}
                  </div>

                  <div className="text-center flex-1">
                    <div className="w-10 h-10 bg-gray-700 rounded-full mx-auto mb-1 flex items-center justify-center text-lg">
                      ⚽
                    </div>
                    <p className="text-white text-xs font-medium">{match.teamAway}</p>
                  </div>
                </div>

                {/* Watch Button */}
                <div className={`mt-3 text-center text-xs font-medium py-1.5 rounded-lg ${
                  match.status === 'live'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-400'
                }`}>
                  {match.status === 'live' ? 'شاهد الآن' : 'تذكير'}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
