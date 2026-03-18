import { TestBed } from '@angular/core/testing';
import { RankingPage } from './ranking-page';
import { CHAMPIONSHIP_SERVICE } from '../../model/championship.token';
import { ChampionshipService } from '../../model/championship.interface';

const mockChampionshipService: ChampionshipService = {
  getChampionships: () => [
    {
      id: 'test',
      name: 'Test Championship',
      season: '2025-2026',
      rankings: [
        {
          rank: 1,
          teamName: 'Team A',
          played: 10,
          won: 8,
          lost: 2,
          setsWon: 26,
          setsLost: 10,
          pointsFor: 800,
          pointsAgainst: 600,
          points: 24,
        },
        {
          rank: 2,
          teamName: 'Team B',
          played: 10,
          won: 6,
          lost: 4,
          setsWon: 22,
          setsLost: 16,
          pointsFor: 750,
          pointsAgainst: 700,
          points: 18,
        },
      ],
    },
  ],
  getChampionshipById: (id: string) =>
    mockChampionshipService.getChampionships().find((c) => c.id === id),
};

describe('RankingPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingPage],
      providers: [{ provide: CHAMPIONSHIP_SERVICE, useValue: mockChampionshipService }],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RankingPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display championship title', async () => {
    const fixture = TestBed.createComponent(RankingPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.ranking-page__title')?.textContent).toContain('Classements');
  });

  it('should display championship tabs', async () => {
    const fixture = TestBed.createComponent(RankingPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const tabs = compiled.querySelectorAll('.ranking-page__tab');
    expect(tabs.length).toBe(1);
    expect(tabs[0].textContent).toContain('Test Championship');
  });

  it('should display ranking table with teams', async () => {
    const fixture = TestBed.createComponent(RankingPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('.ranking-table__row');
    expect(rows.length).toBe(2);
  });
});
