# Payments Strategy Lab design system

## Direction

An executive decision model rather than a generic dashboard. The interface should feel like a concise operating memo: clear assumptions, visible tradeoffs and evidence that can be challenged.

## Foundations

- **Typography:** Public Sans for all interface and narrative copy. Use weight and spacing before adding decorative color.
- **Canvas:** cool accounting-paper gray (`#edf1f5`) with white analytical surfaces.
- **Structure:** navy (`#102139`) for primary hierarchy, teal (`#08786b`) for positive signals, muted red only for cost or downside.
- **Geometry:** square-edged panels with small control radii. Avoid floating cards, glow and ornamental gradients.
- **Spacing:** use the existing compact 4/8/12/18/24/32 rhythm. Related model inputs stay close; separate analytical sections generously.

## Components and interaction

- The introduction explains the decision and its business stakes before exposing controls.
- Scenario cards are selectable assumptions, not decorative feature cards.
- Tables, bars and details carry the analytical evidence. Never replace exact values with decoration.
- Interactive targets are at least 44px high, with a visible blue focus ring.
- Motion is limited to useful control feedback and removed when reduced motion is requested.

## Responsive behavior

Controls become a full-width workbench before cards stack. On small screens, preserve readable figures and horizontal access to dense tables rather than shrinking evidence.
