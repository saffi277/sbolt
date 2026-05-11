export type ContentType = 'movie' | 'series' | 'live';
export type Genre = 'action' | 'drama' | 'comedy' | 'horror' | 'romance' | 'documentary' | 'animation' | 'sport';

export interface Movie {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  year: number;
  rating: number;
  duration?: string;
  genres: Genre[];
  type: ContentType;
  episodes?: number;
  seasons?: number;
  quality: 'HD' | '4K' | 'FHD';
  language: string;
  trailerUrl?: string;
  featured?: boolean;
}

export interface LiveMatch {
  id: string;
  title: string;
  league: string;
  teamHome: string;
  teamAway: string;
  scoreHome?: number;
  scoreAway?: number;
  time: string;
  status: 'live' | 'upcoming' | 'finished';
  posterUrl: string;
  sport: 'football' | 'basketball' | 'tennis';
}

export const FEATURED_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'مملكة الكوكب من كوكب القردة',
    titleEn: 'Kingdom of the Planet of the Apes',
    description: 'في عالم ما بعد الإنسان، تتشكل حضارات جديدة من القردة. شاب صغير يجد نفسه في رحلة لاكتشاف الحقيقة عن ماضيه وتاريخ عالمه، بينما تتصادم مصالح القردة والبشر من جديد.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/fqv8v6AycXKsivp1T5yKtLbGXce.jpg',
    year: 2024,
    rating: 7.2,
    duration: '2س 25د',
    genres: ['action'],
    type: 'movie',
    quality: '4K',
    language: 'مدبلج عربي',
    featured: true,
  },
  {
    id: '2',
    title: 'دون',
    titleEn: 'Dune: Part Two',
    description: 'بول أتريدس يتحد مع الفريمن في رحلة انتقام ضد المتآمرين الذين دمروا عائلته. بينما يواجه مصيره كمسيح أو محرر لشعب الصحراء.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
    year: 2024,
    rating: 8.5,
    duration: '2س 46د',
    genres: ['action', 'drama'],
    type: 'movie',
    quality: '4K',
    language: 'مترجم عربي',
    featured: true,
  },
  {
    id: '3',
    title: 'غلادياتور 2',
    titleEn: 'Gladiator II',
    description: 'بعد سنوات من معركة ماكسيموس الأسطورية، يظهر محارب جديد في الكولوسيوم يحمل سر مقاومة الإمبراطورية الرومانية.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg',
    year: 2024,
    rating: 7.8,
    duration: '2س 28د',
    genres: ['action', 'drama'],
    type: 'movie',
    quality: '4K',
    language: 'مترجم عربي',
    featured: true,
  },
];

export const ALL_MOVIES: Movie[] = [
  ...FEATURED_MOVIES,
  {
    id: '4',
    title: 'الرجل الحديدي: الفجر الجديد',
    description: 'روبرت داوني جونيور يعود في دور جديد مذهل في عالم مارفل المتوسع.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/A9bZxOmEBhw8BLuFVcYXS2b0a9A.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/A9bZxOmEBhw8BLuFVcYXS2b0a9A.jpg',
    year: 2025,
    rating: 8.1,
    duration: '2س 15د',
    genres: ['action'],
    type: 'movie',
    quality: 'FHD',
    language: 'مدبلج عربي',
  },
  {
    id: '5',
    title: 'السيد والسيدة سميث',
    description: 'زوجان يعيشان حياة مزدوجة كعميلين سريين لا يعلم أحدهما بهوية الآخر الحقيقية.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/ukqBFihFNKe7h3UYMRd5F0LyS1Z.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/ukqBFihFNKe7h3UYMRd5F0LyS1Z.jpg',
    year: 2024,
    rating: 7.5,
    genres: ['action', 'comedy'],
    type: 'series',
    episodes: 8,
    seasons: 1,
    quality: 'HD',
    language: 'مترجم عربي',
  },
  {
    id: '6',
    title: 'بيت التنين',
    description: 'قصة تاريخ آل تارغاريان وحرب الطموحات على عرش الحديد قبل مئة وخمسين عاماً من أحداث صراع العروش.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/t9XkeegN9roOfKClKxFm7eDHnGo.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg',
    year: 2024,
    rating: 8.4,
    genres: ['drama', 'action'],
    type: 'series',
    episodes: 8,
    seasons: 2,
    quality: '4K',
    language: 'مترجم عربي',
  },
  {
    id: '7',
    title: 'الدب',
    description: 'طاهٍ موهوب يعود لإدارة مطعم عائلته في شيكاغو بعد وفاة أخيه، وسط فوضى المطبخ والذكريات الأليمة.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg',
    year: 2024,
    rating: 9.0,
    genres: ['drama', 'comedy'],
    type: 'series',
    episodes: 10,
    seasons: 3,
    quality: 'FHD',
    language: 'مترجم عربي',
  },
  {
    id: '8',
    title: 'شوغن',
    description: 'في القرن السابع عشر، يجد ملاح إنجليزي نفسه في اليابان وسط صراعات السلطة بين اللوردات الإقطاعيين.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/yTvIHKMSMxfQiOJDEJEvJx0h9mC.jpg',
    year: 2024,
    rating: 8.9,
    genres: ['drama', 'action'],
    type: 'series',
    episodes: 10,
    seasons: 1,
    quality: '4K',
    language: 'مترجم عربي',
  },
  {
    id: '9',
    title: 'إنسايد آوت 2',
    description: 'رايلي تدخل المراهقة وتظهر مشاعر جديدة ومعقدة تتحدى المشاعر الأصلية في مغامرة داخل العقل.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg',
    year: 2024,
    rating: 7.9,
    duration: '1س 40د',
    genres: ['animation', 'comedy'],
    type: 'movie',
    quality: '4K',
    language: 'مدبلج عربي',
  },
  {
    id: '10',
    title: 'ديدبول وولفرين',
    description: 'أكثر الثنائيات غير المتوقعة في تاريخ الكوميكس - ديدبول يجر ولفرين إلى مغامرة عبر الأبعاد.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
    year: 2024,
    rating: 8.0,
    duration: '2س 8د',
    genres: ['action', 'comedy'],
    type: 'movie',
    quality: '4K',
    language: 'مدبلج عربي',
  },
  {
    id: '11',
    title: 'التمساح روكو',
    description: 'تمساح يعيش في شقة عائلة نيوف في نيويورك، في مغامرة موسيقية ممتعة للعائلة.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/1Jed1MgIieBGXHRnmLMcIPPXxOd.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/1Jed1MgIieBGXHRnmLMcIPPXxOd.jpg',
    year: 2024,
    rating: 7.1,
    duration: '1س 40د',
    genres: ['animation', 'comedy'],
    type: 'movie',
    quality: 'FHD',
    language: 'مدبلج عربي',
  },
  {
    id: '12',
    title: 'ألطو مار',
    description: 'مسلسل إسباني يتابع مجموعة من الأشخاص على متن رحلة بحرية تتكشف فيها ألغاز وأسرار مثيرة.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/dM0qPRFMiXKIazDgkqzLBEOKy5A.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/dM0qPRFMiXKIazDgkqzLBEOKy5A.jpg',
    year: 2024,
    rating: 7.3,
    genres: ['drama', 'romance'],
    type: 'series',
    episodes: 8,
    seasons: 3,
    quality: 'FHD',
    language: 'مترجم عربي',
  },
];

export const LIVE_MATCHES: LiveMatch[] = [
  {
    id: 'l1',
    title: 'الكلاسيكو',
    league: 'الدوري الإسباني',
    teamHome: 'ريال مدريد',
    teamAway: 'برشلونة',
    scoreHome: 2,
    scoreAway: 1,
    time: '67\'',
    status: 'live',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    sport: 'football',
  },
  {
    id: 'l2',
    title: 'قمة البريميرليغ',
    league: 'الدوري الإنجليزي',
    teamHome: 'مانشستر سيتي',
    teamAway: 'أرسنال',
    time: 'اليوم 22:00',
    status: 'upcoming',
    posterUrl: '',
    sport: 'football',
  },
  {
    id: 'l3',
    title: 'نهائي دوري الأبطال',
    league: 'دوري أبطال أوروبا',
    teamHome: 'ريال مدريد',
    teamAway: 'بايرن ميونخ',
    time: 'غداً 21:00',
    status: 'upcoming',
    posterUrl: '',
    sport: 'football',
  },
  {
    id: 'l4',
    title: 'ديربي السعودية',
    league: 'دوري روشن',
    teamHome: 'الهلال',
    teamAway: 'النصر',
    scoreHome: 0,
    scoreAway: 0,
    time: '12\'',
    status: 'live',
    posterUrl: '',
    sport: 'football',
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'الكل' },
  { id: 'movie', label: 'أفلام' },
  { id: 'series', label: 'مسلسلات' },
  { id: 'action', label: 'أكشن' },
  { id: 'drama', label: 'دراما' },
  { id: 'comedy', label: 'كوميديا' },
  { id: 'animation', label: 'أنيميشن' },
  { id: 'documentary', label: 'وثائقي' },
];
