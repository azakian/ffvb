import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { HeroContent } from '../../model/home.interface';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBanner {
  readonly hero = input.required<HeroContent>();
}
