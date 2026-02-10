# Specification

## Summary
**Goal:** Build the full multi-page “Rainbowz Mind Studio” marketing website frontend in React + TypeScript + Tailwind, applying the provided calm-scientific style guide and required page layouts.

**Planned changes:**
- Implement client-side routing and create 7 pages: Home, About, Our Method, Programs, Results & Outcomes, Parents’ Guide, and Contact / Book Demo.
- Build shared layout/UI components for consistency (Navbar, Footer, section/container primitives, headings, buttons, cards, grids, reusable CTA blocks).
- Apply the provided design system site-wide (colors, typography, spacing rhythm) and ensure all user-facing text is in English.
- Implement “Our Method” page sections including required abstract diagrams/visual metaphors and the 2-column comparison table.
- Implement “Programs” page with age-group selector (5–7, 8–10, 11–14), per-group details, per-group “Book Demo” CTA, and a concise FAQ strip.
- Implement “Contact / Book Demo” page form (parent name, child age, phone, preferred time) with basic client-side validation, a local success state, a map-like visual block, and alternate contact UI elements (call/WhatsApp placeholders).
- Add and reference local static visual assets for hero/diagrams/icons under `frontend/public/assets/generated`, ensuring responsive sizing and alt text.

**User-visible outcome:** Visitors can navigate a responsive, visually consistent 7-page marketing site with the specified sections, interact with the Programs age selector, and submit a demo request form that confirms submission on-screen.
