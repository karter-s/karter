# Karter Product System (KPS)

Status: Draft foundation  
Source inspiration: RatingScope production design system  
Purpose: Reusable UX/UI grammar for Karter Steinle projects without cloning any single product brand.

## Principle

Projects should feel like they were designed by the same person, not like copies of the same website.

KPS standardizes the underlying product grammar:

- typography
- spacing
- component proportions
- interaction behavior
- accessibility
- semantic color roles
- hierarchy
- motion restraint

Each project supplies its own brand palette, imagery, logo, and product-specific components.

## Typography

Primary family: Inter.

Recommended roles:

| Role | Mobile | Desktop | Weight |
| --- | ---: | ---: | ---: |
| H1 | 36px | 48px | 600 |
| H2 | 30px | 36px | 600 |
| H3 | 16px | 18px | 600 |
| Body | 14px | 16px | 400 |
| Small body | 14px | 14px | 400 |
| Caption | 12px | 12px | 400 |
| Label | 14px | 14px | 600 |

Use sentence case for normal interface language. Use uppercase sparingly for short eyebrows or metadata. Monospace is reserved for actual code or technical data, not general page identity.

## Layout

- Default content width: max-width 5xl for portfolio-scale sites.
- Horizontal gutters: 20px mobile, 24px small screens, 32px large screens.
- Section spacing: approximately 56px mobile and 80px desktop.
- Favor one clear content hierarchy per section.
- Prefer progressive disclosure over dense nested cards.

## Shape

- Standard radius: 8px.
- Elevated/card radius: 12px.
- Pills/full radius only when the component is actually pill-like.
- Avoid ornamental radius variation.

## Controls

- Minimum interactive target: 44px.
- Large CTA target: 48px.
- Buttons use 14px / 600 text.
- Every interactive control requires a visible keyboard focus state.
- Hover states should clarify interactivity rather than create spectacle.

## Icons

Use one consistent icon family when a project needs icons. RatingScope uses Lucide; future projects should default to Lucide unless there is a functional reason not to.

## Elevation

Use subtle shadows. Elevation communicates hierarchy, not visual novelty.

Recommended levels:

- flat: borders only
- card: restrained soft shadow
- modal/high-focus: stronger shadow only when the component truly floats above the page

## Semantic color architecture

Every project should define roles rather than scatter literal colors through components:

```css
--canvas
--surface
--surface-raised
--surface-quiet
--text-primary
--text-secondary
--text-tertiary
--border-subtle
--action
--action-hover
--focus
--selection
```

The values change by project. The roles do not.

### Portfolio mapping

```text
canvas          near-black graphite
surface         dark cool slate
surface-raised  elevated slate
text-primary    near-white
text-secondary  cool gray
action          restrained blue
focus           accessible blue
```

### RatingScope mapping

RatingScope keeps its own warm cream, mineral, graphite, and bronze palette. Those brand colors are not KPS defaults.

## Motion

- Prefer 150–250ms transitions.
- Motion should explain state, hierarchy, or interaction.
- Avoid decorative looping effects unless they have a real product purpose.
- Respect `prefers-reduced-motion`.

## Content rules

- State what is true now.
- Do not use future projects as proof of current skill.
- Do not inflate technical terminology to manufacture expertise.
- Headings should be literal and concise.
- Supporting copy should explain evidence, scope, and limitations.

## Reuse rule

Do not create a new design system for every project.

Start with KPS, then define:

1. project color palette
2. project brand assets
3. project-specific components
4. justified deviations from KPS

The goal is recognizable authorship without template repetition.
