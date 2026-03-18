# Styling Coherence — SCSS &amp; Design Tokens

## Design Tokens

All visual styles must stem from the central token file:

```
src/styles/_tokens.scss
```

### Token Categories

| Category        | Examples                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Colors**      | `$color-primary` (FFVB Blue `#003DA5`), `$color-secondary` (FFVB Red `#E4002B`), `$color-neutral-white` (`#FFFFFF`) |
| **Spacing**     | `$space-xs`, `$space-sm`, `$space-md`, `$space-lg`, `$space-xl`                                                     |
| **Typography**  | `$font-family-base`, `$font-size-base`, `$font-weight-bold`, `$line-height-base`                                    |
| **Borders**     | `$border-radius-sm`, `$border-radius-md`                                                                            |
| **Breakpoints** | `$breakpoint-sm`, `$breakpoint-md`, `$breakpoint-lg`                                                                |

## Component Styling Rules

1. Every component **must** have its own `.scss` file.
2. Each `.scss` file **must** import the token file:
   ```scss
   @use 'tokens' as *;
   ```
3. **No Tailwind** — Use pure SCSS only.
4. **No hardcoded values** — Hex codes, pixel values, and font stacks must never appear directly in component styles. Always reference a token variable.

### Example

```scss
// club-card.component.scss
@use 'tokens' as *;

.club-card {
  padding: $space-md;
  border-radius: $border-radius-sm;
  font-family: $font-family-base;

  &__title {
    color: $color-primary;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
  }

  &__badge {
    background-color: $color-secondary;
    color: $color-neutral-white;
    padding: $space-xs $space-sm;
  }

  &--highlighted {
    border: 2px solid $color-primary;
  }
}
```

## BEM Naming Convention

All class names follow the **Block Element Modifier** pattern:

| Part     | Syntax             | Example                   |
| -------- | ------------------ | ------------------------- |
| Block    | `.block`           | `.club-card`              |
| Element  | `.block__element`  | `.club-card__title`       |
| Modifier | `.block--modifier` | `.club-card--highlighted` |

- Blocks map 1-to-1 with Angular components.
- Elements are children of a block.
- Modifiers represent state or variation.

## Global Styles

- Reset / normalise styles live in `src/styles.scss`.
- Shared mixins and functions go in `src/styles/` alongside `_tokens.scss`.
- The `stylePreprocessorOptions.includePaths` in `angular.json` must include `src/styles` so that `@use 'tokens'` works without a relative path.
