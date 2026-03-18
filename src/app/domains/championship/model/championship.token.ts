import { InjectionToken } from '@angular/core';
import { ChampionshipService } from './championship.interface';

export const CHAMPIONSHIP_SERVICE = new InjectionToken<ChampionshipService>('ChampionshipService');
