# Mocking & Dependency Injection Strategy

> We have **no backend**. All data is served by mock services using a simulated delay.

## Step-by-Step Pattern

### 1. Define the Domain Interface — `model/`

```typescript
// src/app/domains/clubs/model/club.interface.ts
export interface Club {
  id: string;
  name: string;
  city: string;
  logoUrl: string;
}

export interface ClubService {
  getAll(): Club[];
  getById(id: string): Club | undefined;
}
```

### 2. Create the InjectionToken — `model/`

```typescript
// src/app/domains/clubs/model/club.token.ts
import { InjectionToken } from '@angular/core';
import { ClubService } from './club.interface';

export const CLUB_SERVICE = new InjectionToken<ClubService>('ClubService');
```

### 3. Implement the Mock Service — `data-access/`

```typescript
// src/app/domains/clubs/data-access/mock-club.service.ts
import { Injectable } from '@angular/core';
import { Club, ClubService } from '../model/club.interface';

const MOCK_CLUBS: Club[] = [
  { id: '1', name: 'Paris Volley', city: 'Paris', logoUrl: '/assets/clubs/paris.png' },
  {
    id: '2',
    name: 'Montpellier Castelnau',
    city: 'Montpellier',
    logoUrl: '/assets/clubs/montpellier.png',
  },
];

@Injectable()
export class MockClubService implements ClubService {
  getAll(): Club[] {
    return MOCK_CLUBS;
  }

  getById(id: string): Club | undefined {
    return MOCK_CLUBS.find((c) => c.id === id);
  }
}
```

> **Note:** For async mock data, use `resource()` or `httpResource()` with an interceptor
> that returns static JSON. Add a simulated delay with `delay()` from RxJS in the
> interceptor when needed.

### 4. Wire Up via the Domain Provider

```typescript
// src/app/domains/clubs/clubs.provider.ts
import { Provider } from '@angular/core';
import { CLUB_SERVICE } from './model/club.token';
import { MockClubService } from './data-access/mock-club.service';

export function provideClubs(): Provider[] {
  return [{ provide: CLUB_SERVICE, useClass: MockClubService }];
}
```

### 5. Inject in a Feature Component

```typescript
// src/app/domains/clubs/features/club-list/club-list.component.ts
import { Component, inject } from '@angular/core';
import { CLUB_SERVICE } from '../../model/club.token';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrl: './club-list.component.scss',
})
export class ClubListComponent {
  private readonly clubService = inject(CLUB_SERVICE);
  readonly clubs = this.clubService.getAll();
}
```

## Rules

1. **Never instantiate services directly** — Always go through an `InjectionToken`.
2. **No `providedIn: 'root'`** — Services are registered exclusively via `provide*()` functions.
3. **Simulated delay** — Mock services should use a short delay (`200–500 ms`) to mimic real network latency. Use `resource()` or an HTTP interceptor for this.
4. **Swappable** — When a real backend is available, create a `Real[Name]Service` in `data-access/` and change the provider binding. No feature component code should need to change.
