export interface TeamRanking {
  rank: number;
  teamName: string;
  played: number;
  won: number;
  lost: number;
  setsWon: number;
  setsLost: number;
  pointsFor: number;
  pointsAgainst: number;
  points: number;
}

export interface Championship {
  id: string;
  name: string;
  season: string;
  rankings: TeamRanking[];
}

export interface ChampionshipService {
  getChampionships(): Championship[];
  getChampionshipById(id: string): Championship | undefined;
}
