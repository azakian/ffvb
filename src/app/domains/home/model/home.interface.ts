export interface HeroContent {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
}

export interface HomeService {
  getHero(): HeroContent;
  getLatestNews(): NewsItem[];
}
