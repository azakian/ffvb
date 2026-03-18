import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { TeamRanking } from '../../model/championship.interface';

@Component({
  selector: 'app-ranking-table',
  templateUrl: './ranking-table.html',
  styleUrl: './ranking-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RankingTable {
  readonly rankings = input.required<TeamRanking[]>();
}
