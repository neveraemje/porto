# Design QA

- Source visual truth: `/var/folders/_l/lyz80jpj57s7zsgl102k25lw0000gp/T/codex-clipboard-824844ab-0781-4030-8437-c150baff6c3c.png`
- Implementation screenshot: `/Users/mochamad.arifin/Documents/CODE/mj-web/qa-home-hover.png`
- Combined comparison: `/Users/mochamad.arifin/Documents/CODE/mj-web/qa-comparison.png`
- Viewport: 1444 x 854 CSS px
- Source pixels: 1444 x 886
- Implementation pixels: 1444 x 854
- Device scale factor: 1
- Normalization: implementation was extended by 32 px with a neutral background for the side-by-side comparison; no scaling was applied.
- State: first selected case focused, exercising the same cover-reveal state as hover plus the expected keyboard focus outline.

## Full-view Comparison

The reference was used as an interaction and composition reference rather than a full-page clone. The implementation preserves the portfolio's established typography, dark theme, navigation, year column, and content widths. The active case displays a real repository cover as a floating thumbnail above its title without changing list geometry. Non-active cases remain visible but use blur and reduced opacity.

## Focused-region Comparison

The selected-work region was reviewed at full resolution. The active Asphalt cover is fully visible at 418 x 227 px, matching its native 2606 x 1414 ratio, remains inside the 1444 x 854 viewport, has a subtle border and elevation, and sits 16 px above the title. The active item remains sharp while the Home intro and sibling items compute to `blur(3px)` and `opacity: 0.3`. No horizontal overflow is present.

## Fidelity Surfaces

- Fonts and typography: existing Inter hierarchy, weights, wrapping, and line heights are preserved.
- Spacing and layout rhythm: resting-state list geometry is unchanged; the floating cover does not push titles or sibling cases.
- Colors and visual tokens: existing light/dark tokens are preserved; blur and opacity provide the requested depth treatment.
- Image quality and asset fidelity: original case-study cover assets render through `next/image` at their individual native aspect ratios with no cropping or placeholder artwork.
- Copy and content: existing case-study titles, dates, and impact statements are unchanged.

## Findings

- No actionable P0, P1, or P2 differences remain for the requested interaction.
- P3: keyboard focus includes the browser's visible outline, which is intentionally retained for accessibility and does not appear during pointer hover.

## Comparison History

1. Initial implementation expanded the image in document flow, causing the list to move. Replaced it with an absolute floating overlay.
2. The first floating cover was too large and clipped above the viewport. Constrained it to 420 px maximum width and verified the resulting 418 x 227 px cover remains visible at its native ratio.
3. React-managed focus timing did not consistently apply sibling blur. Replaced visual state management with CSS hover and focus-within selectors; computed styles now confirm the active item is sharp and all siblings are blurred to 30% opacity.

## Implementation Checklist

- [x] Text-only selected cases at rest
- [x] Floating cover above active title
- [x] Native aspect ratio preserved for every cover
- [x] No list reflow when the cover appears
- [x] Sibling blur and opacity treatment
- [x] Home intro joins the blur and opacity treatment
- [x] Keyboard-equivalent focus state
- [x] No horizontal overflow

final result: passed

## Persistent Guest Card

- Reference URL: `https://muhraufan.com/`
- Local implementation: `http://localhost:3000/`
- Desktop screenshot: `/Users/mochamad.arifin/Documents/CODE/mj-web/qa-guest-collapsed.png`
- Mobile open-state screenshot: `/Users/mochamad.arifin/Documents/CODE/mj-web/qa-guest-mobile.png`
- Mobile viewport: 390 x 844 CSS px

The reference was used for the persistent bottom placement and expanding-card interaction. The implementation keeps this portfolio's existing typography and guestbook data model, with only the name and message fields retained.

### Guest Card Checklist

- [x] Collapsed card remains fixed and centered at the bottom on every route
- [x] Expanded card opens above a blurred page backdrop
- [x] Desktop and mobile layouts stay within the viewport
- [x] Existing guestbook submission endpoint remains connected
- [x] Escape, close button, and backdrop dismiss the card
- [x] Collapsed dialog is excluded from the accessibility tree
- [x] No browser console errors
- [x] Lint passes with pre-existing warnings only

final result: passed
