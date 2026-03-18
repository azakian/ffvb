# FFVB — Agent Intelligence Layer

> **Primary Mandate:** Consult the specialized rules below before any code generation.
> Prioritize **Signals** over RxJS. Follow **Domain-Driven Design (DDD)**.

## Source of Truth

| Rule file                                                          | Purpose                                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| [`.rules/architecture-ddd.md`](.rules/architecture-ddd.md)         | Domain-Driven Design folder structure and provisioning rules                               |
| [`.rules/angular-21-standards.md`](.rules/angular-21-standards.md) | Modern Angular 21 coding standards (Signals, httpResource, Signal Forms, new Control Flow) |
| [`.rules/styling-coherence.md`](.rules/styling-coherence.md)       | SCSS design tokens, BEM naming, and styling constraints                                    |
| [`.rules/mocking-di-strategy.md`](.rules/mocking-di-strategy.md)   | Mock-first Dependency Injection strategy with `InjectionToken`                             |

## Strict Constraints

1. **No `providedIn: 'root'`** — Services must be scoped to their domain via a dedicated `provide*()` function.
2. **No RxJS for state** — Use `signal()`, `computed()`, and `linkedSignal()` for all reactive state.
3. **No Tailwind** — Use pure SCSS with design tokens (`src/styles/_tokens.scss`).
4. **No constructor injection** — Use the `inject()` function at the class field level.
5. **No hardcoded colors or pixel values** — All values must reference design tokens.
