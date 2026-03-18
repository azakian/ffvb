import { Provider } from '@angular/core';
import { CHAMPIONSHIP_SERVICE } from './model/championship.token';
import { MockChampionshipService } from './data-access/mock-championship.service';

export function provideChampionship(): Provider[] {
  return [{ provide: CHAMPIONSHIP_SERVICE, useClass: MockChampionshipService }];
}
