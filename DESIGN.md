---
name: patientone
description: A quiet dark portfolio for personal Linux, homelab and web tools.
colors:
  background: "#141819"
  text: "#f3f0ed"
  secondary: "#d4dcde"
  muted: "#a5abae"
  accent: "#8bd0aa"
  accent-hover: "#b0e7c5"
  border: "#2c3435"
  tag-background: "#242c2e"
  divider: "#657071"
  scrollbar: "#4f6560"
typography:
  display:
    fontFamily: '"Geist", system-ui, sans-serif'
    fontSize: "clamp(1.75rem, 2.7vw, 2.625rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  intro-description:
    fontFamily: '"Geist", system-ui, sans-serif'
    fontSize: "clamp(1.75rem, 2.7vw, 2.625rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  headline:
    fontSize: "clamp(1.4rem, 1.85vw, 1.75rem)"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontSize: "1.625rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Geist", system-ui, sans-serif'
    fontSize: "1.125rem"
    lineHeight: 1.5
  label:
    fontSize: "0.875rem"
    lineHeight: 1.5
  action:
    fontSize: "1rem"
    lineHeight: 1.5
  navigation:
    fontSize: "1.125rem"
    lineHeight: 1.5
  legal-body:
    fontSize: "1.0625rem"
    lineHeight: 1.7
  code:
    fontFamily: "ui-monospace, monospace"
    fontSize: "0.85em"
rounded:
  tag: "5px"
  code: "3px"
  focus: "2px"
spacing:
  inline-sm: "0.5rem"
  block-sm: "0.75rem"
  base: "1rem"
  section: "1.5rem"
  block-lg: "2rem"
components:
  language-button:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.navigation}"
    padding: "0.2rem 0"
  language-button-selected:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.navigation}"
  language-button-hover:
    textColor: "{colors.accent-hover}"
  repository-link:
    textColor: "{colors.accent}"
    typography: "{typography.action}"
  repository-link-hover:
    textColor: "{colors.accent-hover}"
  technology-tag:
    backgroundColor: "{colors.tag-background}"
    textColor: "{colors.secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "0.12rem 0.6rem"
  project-row:
    backgroundColor: "{colors.background}"
    padding: "0.75rem 0"
  header-navigation:
    textColor: "{colors.text}"
    typography: "{typography.navigation}"
  contact-link:
    textColor: "{colors.accent}"
    typography: "{typography.body}"
  legal-link:
    textColor: "{colors.accent}"
    typography: "{typography.legal-body}"
---

# Design System: patientone

## Overview

**Creative North Star: "Personal Tool Collection"**

A continuous graphite ground, warm white humanist type and mineral mint links give this personal collection a calm, direct presence. Large introductory type establishes the voice; compact project rows make the work easy to scan.

The same typography, header and footer continue into narrower legal documents. Hierarchy comes from type, spacing and thin separators. Interaction stays quiet: a selected-language underline, visible keyboard focus and a small repository-arrow response.

**Key Characteristics:**

- One continuous dark ground with a single mint accent.
- Large humanist introduction and compact, separated project rows.
- Shared typography and navigation across portfolio and legal pages.
- Responsive text flow and direct repository and contact links.

## Colors

The palette combines a cool graphite ground, warm white foreground and one mineral mint accent. The frontmatter preserves the source CSS values; its keys match the custom properties except for the two literal utility colors, divider and scrollbar.

### Primary

- **Mineral Mint** (`accent`): repository actions, contact links, selected language, project icons, keyboard outline and caret. Selection reverses mint and graphite.
- **Light Mineral Mint** (`accent-hover`): links and language controls on hover.

### Neutral

- **Graphite** (`background`): the continuous page ground, including header, project rows and legal documents.
- **Warm White** (`text`): primary headings, wordmark, contact icon and strong emphasis.
- **Soft Silver** (`secondary`): descriptions, technology tags, legal body and inactive language labels.
- **Slate Grey** (`muted`): the large introductory closing sentence and legal update metadata.
- **Charcoal Line** (`border`): project separators, footer boundary and legal title divider.
- **Dark Slate** (`tag-background`): technology-tag and inline-code fill.
- **Steel Divider** (`divider`): language-group and footer-link vertical separators.
- **Grey Green** (`scrollbar`): scrollbar thumb.

**The Continuous Ground Rule.** Keep the page and project rows on the background color; use separators and spacing to distinguish rows.

## Typography

**Display and body font:** Geist, with system-ui and sans-serif fallbacks. The locally hosted WOFF2 includes Polish and other Latin characters in a normal-style variable face spanning weights (100-900), loaded with swap. Synthetic styles are disabled. **Code font:** ui-monospace, monospace.

A single sans-serif family carries both a personal voice and practical project information. Weight, scale and color distinguish roles without adding a second display face. The scale is role-specific rather than a fixed modular ratio.

### Hierarchy

- **Display:** the fluid display token is used for the introduction. The muted closing sentence shares its size and tracking at a lighter weight.
- **Headline:** selected-project heading, semibold and fluid. It becomes (1.375rem) at the phone breakpoint.
- **Title:** project names use the title token, reducing to (1.375rem) at the first breakpoint and on phones.
- **Body:** project descriptions use the body token. They reduce to (1.0625rem) at the first breakpoint and (1rem) on phones. The repository action caption uses (1rem) throughout.
- **Label:** technology tags use the label token; phones reduce them to (.8125rem).
- **Navigation:** header links and language buttons use the navigation token; phones use (1rem). The wordmark is (1.625rem), weight (600), tracking (-.025em), and reduces to (1.375rem) on phones.
- **Legal:** legal headings use a fluid title (clamp(2rem, 4vw, 3rem)); section headings are (1.35rem), weight (650). Body uses the legal-body token, while update metadata is (.875rem).

At the phone breakpoint, both introductory lines use (clamp(1.625rem, 5.6vw, 2.125rem)) with line height (1.2). Keep the longer translated text free to wrap.

**The Shared Voice Rule.** Use Geist for display, body and controls; reserve the system monospace stack for inline code.

## Layout

The shared centered shell is (min(calc(100% - 6rem), 86.75rem)). Header content balances the wordmark against GitHub and language controls, with a minimum height (4.75rem). Main content grows to fill the viewport; the footer follows it in normal flow.

The homepage introduction has block padding (1.75rem 3rem). Project rows are a three-column grid: icon (5rem), flexible copy (minmax(0, 1fr)), repository action (auto), with gap (3.2rem). Rows have minimum height (7.25rem), block padding (.75rem), and a thin separator between successive rows. Tags wrap with gap (.5rem). The footer balances contact with legal navigation, using block padding (1.5rem) and minimum height (6.6875rem).

Responsive behavior uses inclusive max-width queries:

- **At (1200px):** shell width becomes (calc(100% - 4rem)); project icon column becomes (4rem), row gap (1.75rem); the repeated GitHub icon beside repository actions is hidden, retaining the text and arrow.
- **At (900px):** projects use two columns (3.5rem minmax(0, 1fr)), gap (.6rem 1.5rem), block padding (1.5rem). The repository action moves below the copy in the second column. Project icons become (3rem). Forced desktop introduction breaks disappear and the main heading has maximum width (27ch).
- **At (600px):** shell width becomes (calc(100% - 2.5rem)); header wraps with minimum height (5rem). The header GitHub icon is hidden, keeping its text. The project icon column and icon become (2.25rem), column gap (1rem). Repository actions may wrap, tags become more compact, and the footer stacks contact above legal links. Intro padding becomes (2rem 2.5rem).

Legal documents retain the same shell, capped at (48rem), with block padding (2rem 5rem); phone top padding is (1.25rem). A back link precedes the title area. Title metadata is separated from the sections by a bottom border and space. Sections have (2rem) separation, paragraphs (1rem), and list items (.6rem).

Spacing tokens in the frontmatter record repeated values, not a replacement for these observed contextual dimensions.

## Elevation & Depth

There are no shadows or gradients. The layout is flat, with tonal layering limited to tags and inline code. Thin dividers, generous introductory scale and consistent alignment provide depth and grouping; hovering a link does not lift its container.

**The Flat Surface Rule.** Use no shadows or gradients; hierarchy comes from type, spacing, dividers and the darker tag surface.

## Shapes

Project rows remain open on the page ground. Technology tags use small corners from the tag radius token; inline code has the smaller code radius. Focus outlines use the focus radius. Dividers are (1px). Inline SVG icons use simple geometry, rounded stroke ends and joins, and a shared stroke width (1.7) in their (24 × 24) viewBox. Project glyphs scale within the icon column rather than becoming boxed illustrations.

## Components

### Language buttons

Transparent text controls, separated from GitHub by a vertical line. Inactive labels use secondary text; selection uses mint plus a thin underline. Desktop minimum targets are (32px × 44px); phone minimum width is (28px), preserving height. The control is revealed after script initialization. The chosen language controls visible bilingual text and is reflected in aria-pressed; it is not indicated by color alone.

### Repository and text actions

Mint text with a compact diagonal SVG arrow. Repository actions have a minimum height (44px), gap (.8rem), and start aligned near the project title. Hover or keyboard focus underlines the project title; hover lightens the action caption and moves the arrow (2px, -2px) over (.18s ease-out). Reduced motion removes the transition; page smooth scrolling also becomes automatic. Contact and back links use underline feedback without arrow movement. Keyboard links and buttons use a mint outline (2px), offset (5px). The skip link appears when focused.

### Technology tags

Passive labels with dark slate fill, secondary text, compact padding and small corners. Tags wrap as a group. They have no hover, selected or action state.

### Project rows

Each row joins a compact mint project glyph, project name, short description, wrapped technology list and a repository action. Each semantic article contains one native anchor wrapping its entire row. The project heading names the link via aria-labelledby; the right-hand caption is a visual destination hint. Clicking the title, description, icon, tags or caption reaches the same repository, with one keyboard stop per project. The grid changes described in Layout preserve the association between the copy and its action at smaller widths.

### Shared navigation and contact close

The header pairs the circular avatar (36px on desktop, 32px on phones) with the wordmark, GitHub link and PL/EN control. At widths up to 400px the GitHub link uses its labeled icon to preserve a compact header. The avatar has empty alt text because the adjacent wordmark already names the home link. All three pages share this treatment. The contact close pairs a warm white envelope with a small heading and mint email address; the legal links sit opposite on wide screens and beneath on phones. Footer and header links retain (44px) minimum heights where specified in the implementation.

### Legal reading content

Use the narrow reading column with muted metadata, semibold section headings, silver body copy, warm white emphasis and visibly underlined mint inline links. Inline code uses the dark tag surface and the code radius.

## Do's and Don'ts

### Do:

- **Do** keep the shared dark palette and Geist typography on legal pages.
- **Do** keep project descriptions, technology tags and repository actions visually associated as the layout narrows.
- **Do** preserve the mint selected-language underline and visible keyboard focus.
- **Do** let Polish and English copy wrap without clipping or fixed text heights.
- **Do** use compact inline SVG geometry with currentColor for project and action icons.

### Don't:

- **Don't** turn the flat project rows into raised cards or introduce shadows.
- **Don't** style passive technology tags as buttons or filters.
- **Don't** rely on the arrow movement alone to identify a repository action.
- **Don't** replace the shared legal reading column with the portfolio's wide row layout.
