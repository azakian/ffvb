import { Injectable } from '@angular/core';
import { HeroContent, HomeService, NewsItem } from '../model/home.interface';

const MOCK_HERO: HeroContent = {
  title: 'Fédération Française de Volleyball',
  subtitle: 'Suivez les championnats, clubs et équipes de France de volleyball',
  imageUrl: '/assets/home/hero.jpg',
};

const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Ligue A Masculine — Résultats de la 20e journée',
    summary: 'Découvrez tous les résultats et classements de la vingtième journée de Ligue A.',
    date: '2026-03-15',
    imageUrl: '/assets/news/lam-j20.jpg',
  },
  {
    id: '2',
    title: 'Equipe de France — Préparation pour la Ligue des Nations',
    summary:
      'Les Bleus entament leur stage de préparation en vue de la prochaine Ligue des Nations.',
    date: '2026-03-12',
    imageUrl: '/assets/news/edf-vln.jpg',
  },
  {
    id: '3',
    title: 'Coupe de France — Les demi-finales sont connues',
    summary:
      'Retrouvez le tirage au sort des demi-finales de la Coupe de France masculine et féminine.',
    date: '2026-03-10',
    imageUrl: '/assets/news/cdf-draw.jpg',
  },
];

@Injectable()
export class MockHomeService implements HomeService {
  getHero(): HeroContent {
    return MOCK_HERO;
  }

  getLatestNews(): NewsItem[] {
    return MOCK_NEWS;
  }
}
