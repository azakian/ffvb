import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { HOME_SERVICE } from '../../model/home.token';
import { HeroBanner } from '../../ui/hero-banner/hero-banner';

@Component({
  selector: 'app-home-page',
  imports: [HeroBanner],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly homeService = inject(HOME_SERVICE);
  readonly hero = this.homeService.getHero();
  readonly news = this.homeService.getLatestNews();
}
