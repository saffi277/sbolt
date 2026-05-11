import HeroSection from '@/components/HeroSection';
import MovieRow from '@/components/MovieRow';
import LiveSection from '@/components/LiveSection';
import { ALL_MOVIES } from '@/lib/data';

export default function Home() {
  const movies = ALL_MOVIES.filter((m) => m.type === 'movie');
  const series = ALL_MOVIES.filter((m) => m.type === 'series');
  const action = ALL_MOVIES.filter((m) => m.genres.includes('action'));
  const animation = ALL_MOVIES.filter((m) => m.genres.includes('animation'));

  return (
    <div className="min-h-screen">
      <HeroSection />

      <div className="mt-6">
        <LiveSection />
        <MovieRow title="🔥 الأكثر مشاهدة" movies={ALL_MOVIES} cardSize="md" />
        <MovieRow title="🎬 أحدث الأفلام" movies={movies} cardSize="md" />
        <MovieRow title="📺 مسلسلات مميزة" movies={series} cardSize="md" />
        <MovieRow title="💥 أفلام الأكشن" movies={action} cardSize="md" />
        {animation.length > 0 && (
          <MovieRow title="🎨 أنيميشن وكرتون" movies={animation} cardSize="md" />
        )}
      </div>
    </div>
  );
}
