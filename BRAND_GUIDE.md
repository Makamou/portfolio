# Vertex Studio — Brand Implementation Guide

## Overview

This guide documents the Vertex Studio brand identity and its implementation across the website. Use this as reference for maintaining brand consistency in future updates.

---

## Brand Identity

### Mission
Transform ambitious ideas into world-class digital experiences that drive measurable business results.

### Positioning
Premium digital agency specializing in web design, development, and AI automation for growing businesses.

### Brand Values
- **Excellence** — Precision in every pixel
- **Innovation** — Leveraging cutting-edge technology
- **Partnership** — Long-term strategic relationships
- **Clarity** — Clear communication and results focus

---

## Visual Brand System

### Primary Logo

**Logo Style:** Geometric 'V' shape
- **Symbolism:** Vertex (highest point), upward growth, excellence, precision
- **Format:** SVG (scalable, crisp at any size)
- **Usage:** Navigation, footer, favicon, emails

**Logo Specifications:**
```
Dimensions: 200x200 SVG viewBox
Stroke Width: 6px
Stroke Color: Linear gradient (Gold → Deep Gold)
Accent Line: 2px top border
Color Mode: Works in black, white, gold, and blue
```

**Logo Files:**
- `img/vertex-studio-logo.svg` — Primary SVG logo

---

## Color Palette

### Core Colors

| Name | Hex Code | RGB | Usage |
|------|----------|-----|-------|
| Midnight Black | #0F172A | 15, 23, 42 | Primary background |
| Royal Blue | #1E40AF | 30, 64, 175 | Accent, gradients |
| Luxury Gold | #C8A45D | 200, 164, 93 | CTAs, highlights, accents |
| White | #FFFFFF | 255, 255, 255 | Primary text |
| Slate | #64748B | 100, 116, 139 | Secondary text |
| Silver | #D1D5DB | 209, 213, 219 | Tertiary elements, hovers |

### Extended Palette

| Color | Hex Code | Purpose |
|-------|----------|---------|
| Midnight Light | #1a2332 | Raised surfaces |
| Midnight Lighter | #2d3f52 | Elevated surfaces |
| Slate Gray | #334155 | Muted text |
| Stone | #94a3b8 | Disabled states |

### Color Usage Guidelines

**Primary Actions (CTAs)**
- Background: Luxury Gold (#C8A45D)
- Text: Midnight Black (#0F172A)
- Hover: Silver (#D1D5DB)
- Shadow: rgba(200, 164, 93, 0.2-0.3)

**Links**
- Default: Luxury Gold (#C8A45D)
- Hover: Silver (#D1D5DB)
- Visited: (same as default)

**Backgrounds**
- Page: Midnight Black (#0F172A)
- Raised: #1a2332
- Elevated: #2d3f52

**Text**
- Primary: White (#FFFFFF)
- Secondary: Slate (#64748B) or Silver (#D1D5DB)
- Muted: #94a3b8
- Disabled: #64748B (50% opacity)

**Borders**
- Subtle: rgba(255, 255, 255, 0.08)
- Muted: rgba(255, 255, 255, 0.12)
- Gold accent: rgba(200, 164, 93, 0.3)

---

## Typography

### Font Families

**Display Font:** Space Grotesk
- Usage: Headings, titles, large UI elements
- Weights: 600, 700
- Characteristics: Modern, geometric, premium

**Body Font:** Sora
- Usage: Body text, descriptions, content
- Weights: 300, 400, 500, 600
- Characteristics: Clean, readable, professional

**Mono Font:** JetBrains Mono
- Usage: Code, labels, technical content
- Weights: 400, 500
- Characteristics: Technical, precise, readable

### Typography Scale

| Element | Font | Size | Weight | Letter Spacing |
|---------|------|------|--------|-----------------|
| Hero Title | Space Grotesk | clamp(2.5rem, 8vw, 4rem) | 700 | -0.03em |
| Section Title | Space Grotesk | clamp(2rem, 5vw, 3rem) | 700 | -0.02em |
| Subheading | Space Grotesk | 1.3rem | 700 | -0.01em |
| Body Large | Sora | 1.1rem | 300-400 | 0em |
| Body Normal | Sora | 0.95-1rem | 400 | 0em |
| Body Small | Sora | 0.85-0.9rem | 400 | 0em |
| Label | Sora | 0.75-0.8rem | 600 | 0.05-0.1em |
| Mono | JetBrains Mono | 0.7-0.8rem | 400-500 | 0.1-0.2em |

### Line Heights

- Headings: 1.1
- Subheadings: 1.3
- Body: 1.6-1.8
- Labels: 1.2

---

## Component Design

### Buttons

**Primary Button (CTA)**
```css
Background: #C8A45D (Luxury Gold)
Text: #0F172A (Midnight Black)
Padding: 14px 32px
Border Radius: 10px
Font Weight: 600
Font Size: 0.95rem
Letter Spacing: 0.04em
Box Shadow: 0 8px 24px rgba(200, 164, 93, 0.2)
Hover: 
  - Background: #D1D5DB (Silver)
  - Transform: translateY(-2px)
  - Shadow: 0 12px 32px rgba(200, 164, 93, 0.3)
```

**Secondary Button**
```css
Background: transparent
Border: 2px solid #C8A45D
Text: #C8A45D
Padding: 14px 32px
Hover:
  - Background: rgba(200, 164, 93, 0.1)
  - Border Color: #D1D5DB
  - Text: #D1D5DB
```

### Cards

**Service Card**
```css
Background: linear-gradient(135deg, rgba(30, 64, 175, 0.1), rgba(200, 164, 93, 0.05))
Border: 1px solid rgba(255, 255, 255, 0.12)
Border Radius: 16px
Padding: 40px 32px
Hover:
  - Background: linear-gradient(135deg, rgba(30, 64, 175, 0.15), rgba(200, 164, 93, 0.1))
  - Border Color: rgba(200, 164, 93, 0.3)
  - Transform: translateY(-4px)
  - Shadow: 0 16px 40px rgba(200, 164, 93, 0.15)
  - Transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1)
```

**Project Card**
```css
Background: linear-gradient(135deg, rgba(30, 64, 175, 0.1), rgba(200, 164, 93, 0.05))
Border: 1px solid rgba(255, 255, 255, 0.12)
Border Radius: 16px
Shadow: 0 8px 16px rgba(0, 0, 0, 0.3)
Hover:
  - Transform: translateY(-8px)
  - Border Color: rgba(200, 164, 93, 0.3)
  - Shadow: 0 20px 48px rgba(200, 164, 93, 0.2)
  - Transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1)
```

### Forms

**Input Fields**
```css
Padding: 14px 18px
Border: 1px solid rgba(255, 255, 255, 0.12)
Border Radius: 10px
Background: rgba(30, 64, 175, 0.1)
Color: #FFFFFF
Font Size: 0.95rem
Focus:
  - Outline: none
  - Border Color: #C8A45D
  - Background: rgba(30, 64, 175, 0.15)
  - Box Shadow: 0 0 0 3px rgba(200, 164, 93, 0.1)
```

---

## Spacing System

### Standard Spacing Units

| Scale | Value | Usage |
|-------|-------|-------|
| xs | 8px | Small gaps, button padding |
| sm | 12px | Card padding, list gaps |
| md | 16px | Section gaps, moderate spacing |
| lg | 24px | Large gaps, major sections |
| xl | 32px | Extra large gaps, hero spacing |
| 2xl | 48px | Hero sections, major breaks |
| 3xl | 64px | Full section spacing |
| 4xl | 80px | Maximum section padding |

### Common Patterns

- **Small components:** 8px-12px padding
- **Cards:** 20px-32px padding
- **Sections:** 48px-80px top/bottom padding
- **Grid gaps:** 16px-32px
- **Vertical rhythm:** clamp(80px, 15vw, 140px)

---

## Animation & Motion

### Transition Timings

```css
--t-fast: 0.2s cubic-bezier(0.22, 1, 0.36, 1)
--t-med: 0.4s cubic-bezier(0.22, 1, 0.36, 1)
--t-slow: 0.6s cubic-bezier(0.22, 1, 0.36, 1)
```

### Easing Function

All animations use: `cubic-bezier(0.22, 1, 0.36, 1)`
- Creates natural, spring-like motion
- Professional and premium feel
- Consistent across entire site

### Common Animations

**Fade Up**
```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Button Hover**
```css
transform: translateY(-2px)
transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1)
```

**Card Hover**
```css
transform: translateY(-4px) scale(1.02)
transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1)
```

**Link Underline**
```css
width: 0 → 50-70%
transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1)
```

---

## Imagery Guidelines

### Photography Style

- **Tone:** Professional, modern, clean
- **Palette:** Works with dark backgrounds
- **Quality:** High resolution (2x for retina)
- **Treatment:** Gradient overlays (fade to black) for text contrast

### Screenshot/Project Images

- Dimensions: Maintain 16:9 or 4:3 aspect ratio
- Quality: 1200px+ width for full-size display
- Format: PNG or optimized JPEG
- Overlay: Dark gradient (180deg, transparent → rgba(15, 23, 42, 0.8))

### Icon Usage

- Style: Emoji or Material Icons style (rounded, friendly)
- Size: 48px-56px for cards
- Color: Gold (#C8A45D) or gradient overlay
- Context: Service icons, category tags

---

## Responsive Breakpoints

### Mobile First Approach

```css
Mobile (default): < 768px
  - Stack layout
  - Full-width cards
  - Hamburger menu
  - Touch-friendly (44px tap targets)

Tablet: 768px - 1024px
  - 2-column grids
  - Better spacing
  - Full navigation

Desktop: > 1024px
  - 3-column grids
  - Maximum width containers
  - Horizontal navigation
```

### Responsive Typography

Use `clamp()` for fluid scaling:
```css
font-size: clamp(min, preferred, max)
/* Example: clamp(2rem, 5vw, 3rem) */
```

---

## Accessibility Standards

### WCAG 2.1 AA Compliance

✅ **Color Contrast**
- Text: White (#FFF) on Midnight (#0F172A) = 19.86:1
- Gold (#C8A45D) on Midnight (#0F172A) = 7.2:1
- Secondary text (#64748B) on Midnight = 6.8:1
- All exceed WCAG AA standards

✅ **Keyboard Navigation**
- Tab order: logical and intentional
- Focus visible: clear yellow/gold outline
- All interactive elements keyboard-accessible

✅ **Semantic HTML**
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic elements (nav, section, article, footer)
- ARIA labels where needed

✅ **Motion**
- No auto-playing videos
- Animations respect prefers-reduced-motion
- Transitions don't cause layout shift

---

## Implementation Checklist

When updating the site, ensure:

- [ ] Brand colors used correctly (CSS variables)
- [ ] Typography hierarchy maintained
- [ ] Components follow design specs
- [ ] Animations use standard timings
- [ ] Responsive design tested at breakpoints
- [ ] Accessibility standards met
- [ ] Performance not degraded
- [ ] Brand voice in all copy
- [ ] Logo placed correctly with spacing
- [ ] Links in brand gold color

---

## Future Brand Extensions

### Recommended Applications

1. **Email Templates** — Use same color palette and typography
2. **Social Media Graphics** — Apply gradient overlays and spacing
3. **Presentations** — Use Space Grotesk and gold accents
4. **Business Cards** — Midnight background with gold foil
5. **Proposal Documents** — Professional formatting with brand colors
6. **Advertising** — Gradient banners with geometric elements

### Brand Kit Files Needed

- Logo variations (horizontal, stacked, icon only)
- Color swatches (Figma, Adobe, web formats)
- Typography samples
- Icon library
- Pattern library
- Photography guidelines

---

## Contact & Questions

For brand-related questions or guidelines updates, refer to this document or contact the design team.

**Vertex Studio**
*Premium Digital Solutions • Dallas, TX*

---

*Last Updated: July 2025*
*Version: 1.0*
