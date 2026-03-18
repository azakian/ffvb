import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./domains/home/features/home-page/home-page').then((m) => m.HomePage),
  },
  {
    path: 'classements',
    loadComponent: () =>
      import('./domains/championship/features/ranking-page/ranking-page').then(
        (m) => m.RankingPage,
      ),
  },
];
