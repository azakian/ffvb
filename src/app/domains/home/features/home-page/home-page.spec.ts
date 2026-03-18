import { TestBed } from '@angular/core/testing';
import { HomePage } from './home-page';
import { HOME_SERVICE } from '../../model/home.token';
import { HomeService } from '../../model/home.interface';

const mockHomeService: HomeService = {
  getHero: () => ({
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    imageUrl: '/test.jpg',
  }),
  getLatestNews: () => [
    {
      id: '1',
      title: 'Test News',
      summary: 'Test Summary',
      date: '2026-01-01',
      imageUrl: '/news.jpg',
    },
  ],
};

describe('HomePage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [{ provide: HOME_SERVICE, useValue: mockHomeService }],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomePage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display the hero banner', async () => {
    const fixture = TestBed.createComponent(HomePage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-banner__title')?.textContent).toContain('Test Title');
  });

  it('should display news items', async () => {
    const fixture = TestBed.createComponent(HomePage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.home-page__news-card');
    expect(cards.length).toBe(1);
    expect(cards[0].querySelector('.home-page__news-card-title')?.textContent).toContain(
      'Test News',
    );
  });
});
