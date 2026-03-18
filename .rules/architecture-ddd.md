# Architecture — Domain-Driven Design

## Folder Structure

Every bounded context lives under `src/app/domains/[domain-name]/` and follows this layout:

```
src/app/domains/[domain-name]/
├── model/            # Interfaces, Enums, and InjectionTokens (the "What")
├── data-access/      # Mock and real service implementations (the "How")
├── features/         # Smart components — inject domain tokens, orchestrate state
└── ui/               # Pure, presentational "Dumb" components — @Input / @Output only
```

### Layer Responsibilities

| Layer            | Contains                                                                 | May depend on                                |
| ---------------- | ------------------------------------------------------------------------ | -------------------------------------------- |
| **model/**       | Interfaces, Enums, `InjectionToken` declarations, type aliases           | Nothing — this is the innermost layer        |
| **data-access/** | Service implementations (mock and real), data mappers                    | `model/`                                     |
| **features/**    | Smart (container) components, route components, page-level orchestration | `model/`, `data-access/` (via tokens), `ui/` |
| **ui/**          | Presentational components, pipes, directives                             | `model/` (types only)                        |

### Current Domains

| Domain       | Folder                          | Description                            |
| ------------ | ------------------------------- | -------------------------------------- |
| Home         | `src/app/domains/home/`         | Landing page, hero banner, latest news |
| Championship | `src/app/domains/championship/` | Championship ranking results, tables   |

## Provisioning Rule

Every domain **must** have a `[domain].provider.ts` file at its root that exports a
`provide[Domain]()` function. This function returns the array of providers required
by the domain (services bound to their `InjectionToken`).

```typescript
// src/app/domains/clubs/clubs.provider.ts
import { Provider } from '@angular/core';
import { CLUB_SERVICE } from './model/club.token';
import { MockClubService } from './data-access/mock-club.service';

export function provideClubs(): Provider[] {
  return [{ provide: CLUB_SERVICE, useClass: MockClubService }];
}
```

The returned providers are consumed either in **route providers** or in `app.config.ts`:

```typescript
// app.config.ts
import { provideClubs } from './domains/clubs/clubs.provider';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ...provideClubs()],
};
```

## Rules

1. **No cross-domain imports** — Domains must not import from each other directly. Use shared models or a `shared/` directory for truly cross-cutting concerns.
2. **Barrel exports** — Each layer may have an `index.ts` for convenient re-exports, but barrel files must not create circular dependencies.
3. **One domain, one provider** — Never register domain services at the root level; always go through the domain's `provide*()` function.
