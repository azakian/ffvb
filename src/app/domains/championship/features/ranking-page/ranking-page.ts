import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CHAMPIONSHIP_SERVICE } from '../../model/championship.token';
import { Championship } from '../../model/championship.interface';
import { RankingTable } from '../../ui/ranking-table/ranking-table';

@Component({
  selector: 'app-ranking-page',
  imports: [RankingTable],
  templateUrl: './ranking-page.html',
  styleUrl: './ranking-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RankingPage {
  private readonly championshipService = inject(CHAMPIONSHIP_SERVICE);
  readonly championships = this.championshipService.getChampionships();
  readonly selected = signal<Championship | undefined>(this.championships[0]);

  selectChampionship(championship: Championship): void {
    this.selected.set(championship);
  }
}
