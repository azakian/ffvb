import { Provider } from '@angular/core';
import { HOME_SERVICE } from './model/home.token';
import { MockHomeService } from './data-access/mock-home.service';

export function provideHome(): Provider[] {
  return [{ provide: HOME_SERVICE, useClass: MockHomeService }];
}
