# Angular 21 — Modern Standards

## Reactivity

| Primitive        | When to use                                               |
| ---------------- | --------------------------------------------------------- |
| `signal()`       | Local mutable state                                       |
| `computed()`     | Derived / read-only state                                 |
| `linkedSignal()` | Two-way-bound or synchronised signals (e.g. form ↔ model) |

- **Never** use `BehaviorSubject` or `ReplaySubject` for component state. Use signals.
- RxJS is acceptable **only** for event streams that genuinely require operators (e.g. `debounceTime`, `switchMap` on user input).

## Data Fetching

| API              | When to use                                              |
| ---------------- | -------------------------------------------------------- |
| `httpResource()` | GET requests to a remote API (declarative, signal-based) |
| `resource()`     | Local async state simulation or non-HTTP async work      |

- Avoid raw `HttpClient.get()` in feature code. Prefer `httpResource` for its automatic signal integration.

## Forms

- Use **Signal-based Forms** exclusively (`FormSignal`, signal inputs for form state).
- Do not use the legacy `ReactiveFormsModule` or `FormsModule` template-driven approach for new forms.

## Templates — New Control Flow

Use the built-in control-flow blocks. Do **not** use the legacy structural directives.

```html
<!-- Conditional -->
@if (items().length) {
<app-list [items]="items()" />
} @else {
<p>No items found.</p>
}

<!-- Iteration -->
@for (item of items(); track item.id) {
<app-card [item]="item" />
} @empty {
<p>The list is empty.</p>
}

<!-- Switch -->
@switch (status()) { @case ('loading') { <app-spinner /> } @case ('error') { <app-error /> }
@default { <app-content /> } }
```

## Dependency Injection

- Use the **`inject()` function** at the class field level. No constructor injection.
- **No `providedIn: 'root'`** on any service. Services are scoped through domain `provide*()` functions.

```typescript
// ✅ Correct
export class ClubListComponent {
  private readonly clubService = inject(CLUB_SERVICE);
}

// ❌ Wrong — constructor injection
export class ClubListComponent {
  constructor(private clubService: ClubService) {}
}
```

## Components

- All components must be **standalone** (`standalone: true` is the default in Angular 21).
- Prefer **OnPush** change detection (`changeDetection: ChangeDetectionStrategy.OnPush`).
- Keep component files co-located: `*.ts`, `*.html`, `*.scss`, `*.spec.ts`.
