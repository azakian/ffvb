import { Injectable } from '@angular/core';
import { Championship, ChampionshipService, TeamRanking } from '../model/championship.interface';

const LAM_RANKINGS: TeamRanking[] = [
  {
    rank: 1,
    teamName: 'Paris Volley',
    played: 20,
    won: 17,
    lost: 3,
    setsWon: 54,
    setsLost: 18,
    pointsFor: 1620,
    pointsAgainst: 1380,
    points: 51,
  },
  {
    rank: 2,
    teamName: 'Montpellier Castelnau UC',
    played: 20,
    won: 16,
    lost: 4,
    setsWon: 51,
    setsLost: 21,
    pointsFor: 1590,
    pointsAgainst: 1410,
    points: 48,
  },
  {
    rank: 3,
    teamName: 'Tours VB',
    played: 20,
    won: 15,
    lost: 5,
    setsWon: 49,
    setsLost: 24,
    pointsFor: 1560,
    pointsAgainst: 1430,
    points: 45,
  },
  {
    rank: 4,
    teamName: 'AS Cannes',
    played: 20,
    won: 13,
    lost: 7,
    setsWon: 44,
    setsLost: 29,
    pointsFor: 1510,
    pointsAgainst: 1460,
    points: 39,
  },
  {
    rank: 5,
    teamName: 'Chaumont VB 52',
    played: 20,
    won: 12,
    lost: 8,
    setsWon: 42,
    setsLost: 32,
    pointsFor: 1480,
    pointsAgainst: 1470,
    points: 36,
  },
  {
    rank: 6,
    teamName: 'Stade Poitevin VC',
    played: 20,
    won: 10,
    lost: 10,
    setsWon: 37,
    setsLost: 36,
    pointsFor: 1440,
    pointsAgainst: 1490,
    points: 30,
  },
];

const MOCK_CHAMPIONSHIPS: Championship[] = [
  {
    id: 'lam',
    name: 'Ligue A Masculine',
    season: '2025-2026',
    rankings: LAM_RANKINGS,
  },
];

@Injectable()
export class MockChampionshipService implements ChampionshipService {
  getChampionships(): Championship[] {
    return MOCK_CHAMPIONSHIPS;
  }

  getChampionshipById(id: string): Championship | undefined {
    return MOCK_CHAMPIONSHIPS.find((c) => c.id === id);
  }
}
