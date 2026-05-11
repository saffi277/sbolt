import Link from 'next/link';
import { Radio, Clock, Play } from 'lucide-react';
import { LIVE_MATCHES } from '@/lib/data';

export default function LivePage() {
  const liveNow = LIVE_MATCHES.filter((m) => m.status === 'live');
  const upcoming = LIVE_MATCHES.filter((m) => m.status === 'upcoming');

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Radio className="w-6 h-6 text-red-500" />
        <h1 className="text-white font-black text-3xl">البث المباشر</h1>
        {liveNow.length > 0 && (
          <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse">
            {liveNow.length} مباشر الآن
          </span>
        )}
      </div>

      {/* Live Now */}
      {liveNow.length > 0 && (
        <section className="mb-10">
          <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            يُبث الآن
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveNow.map((match) => (
              <Link key={match.id} href={`/live/${match.id}`}>
                <div className="bg-gradient-to-br from-gray-900 to-red-950/30 border border-red-600/40 rounded-2xl p-6 hover:border-red-500 hover:shadow-xl hover:shadow-red-900/20 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">{match.league}</span>
                    <div className="flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      مباشر
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center flex-1">
                      <div className="w-14 h-14 bg-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl">⚽</div>
                      <p className="text-white font-bold text-sm">{match.teamHome}</p>
                    </div>
                    <div className="text-center px-4">
                      <div className="text-white font-black text-3xl">{match.scoreHome} - {match.scoreAway}</div>
                      <div className="text-red-400 text-sm font-medium">{match.time}</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="w-14 h-14 bg-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl">⚽</div>
                      <p className="text-white font-bold text-sm">{match.teamAway}</p>
                    </div>
                  </div>

                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <Play className="w-4 h-4 fill-current" />
                    شاهد البث
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Upcoming */}
      <section>
        <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-400" />
          المباريات القادمة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcoming.map((match) => (
            <div key={match.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">{match.league}</span>
                <div className="flex items-center gap-1 bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  {match.time}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center text-xl">⚽</div>
                  <p className="text-white font-medium text-sm">{match.teamHome}</p>
                </div>
                <div className="text-gray-500 font-bold text-lg px-4">VS</div>
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center text-xl">⚽</div>
                  <p className="text-white font-medium text-sm">{match.teamAway}</p>
                </div>
              </div>

              <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-sm py-2 rounded-xl transition-colors">
                تذكير بالمباراة
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
