import { InjectionToken } from '@angular/core';
import { HomeService } from './home.interface';

export const HOME_SERVICE = new InjectionToken<HomeService>('HomeService');
