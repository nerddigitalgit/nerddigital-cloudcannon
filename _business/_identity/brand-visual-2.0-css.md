# NerdDigital 2.0 - CSS Implementation

> **Status:** Implemented on `theme/industrial-editorial` branch
> **Repo:** https://github.com/nerddigitalgit/ndwebsite-gemini
> **Preview:** Check Vercel dashboard for branch preview URL

---

## Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700;800&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## Tailwind Config (Color Tokens)

```javascript
colors: {
  nerd: {
    green: '#00C853',    // Signal Green - status/success
    pink: '#FF0080',     // Laser Pink - primary action
    dark: '#111111',     // Engineering Black - text
    light: '#F9F9F7',    // Paper White - background
    border: '#E5E5E5',   // Soft Grey - borders
    muted: '#555555',    // Muted text
  }
}
```

---

## Full CSS (paste into your stylesheet)

```css
/* === INDUSTRIAL EDITORIAL SYSTEM === */

/* The "Paper" Background with Engineering Grid */
body {
  background-color: #F9F9F7;
  color: #111111;
  overflow-x: hidden;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23E5E5E5' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}

/* Serif Headlines - Bold */
h1, h2, h3, h4 {
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-weight: 600;
  letter-spacing: -0.02em;
}
h1 {
  font-weight: 700;
}

/* The "Laser" Primary Button */
.btn-primary {
  background-color: #FF0080;
  color: white;
  border-radius: 2px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  box-shadow: 4px 4px 0px rgba(0,0,0,1);
  transition: all 0.2s ease;
}
.btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px rgba(0,0,0,1);
}
.btn-primary:active {
  box-shadow: 0px 0px 0px rgba(0,0,0,1);
  transform: translate(4px, 4px);
}

/* Secondary Button */
.btn-secondary {
  background-color: transparent;
  color: #111111;
  border: 1px solid #111111;
  border-radius: 2px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  background-color: #111111;
  color: white;
}

/* Cards - Flat Print Style */
.card-editorial {
  background: white;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  box-shadow: none;
}

/* Logo styling */
.logo-dark {
  filter: brightness(0) saturate(100%) invert(5%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%);
  opacity: 0.7;
  transition: all 0.3s ease;
}
.logo-dark:hover {
  opacity: 1;
}

/* Expert cards - sketch to color on hover */
.expert-card img {
  filter: url(#sketch-filter);
  transition: filter 0.4s ease;
}
.expert-card:hover img {
  filter: none;
}
```

---

## SVG Sketch Filter (add to body)

```html
<!-- SVG Filters for sketch/hand-drawn effect -->
<svg style="position: absolute; width: 0; height: 0;">
  <defs>
    <!-- Sketch filter - creates a hand-drawn/pencil effect -->
    <filter id="sketch-filter" x="-10%" y="-10%" width="120%" height="120%">
      <!-- Desaturate and boost contrast for sketch look -->
      <feColorMatrix type="saturate" values="0.15" result="desaturated"/>
      <feComponentTransfer in="desaturated" result="contrast">
        <feFuncR type="linear" slope="1.2" intercept="-0.1"/>
        <feFuncG type="linear" slope="1.2" intercept="-0.1"/>
        <feFuncB type="linear" slope="1.2" intercept="-0.1"/>
      </feComponentTransfer>
      <!-- Subtle edge roughness -->
      <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise"/>
      <feDisplacementMap in="contrast" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
</svg>
```

---

## Key Design Decisions

| Element | Choice | Why |
|---------|--------|-----|
| Background | `#F9F9F7` with grid | Warm paper feel, not sterile white |
| Headlines | Playfair Display 600-700 | Editorial authority, bold enough to read |
| Body | Inter | Clean, technical, readable |
| Primary CTA | Laser Pink `#FF0080` + hard shadow | "Look here" energy, sharp not rounded |
| Buttons | 2px radius (sharp corners) | Technical/functional, not friendly |
| Expert images | Sketch filter + pink circle | Markup/annotation look, reveals color on hover |
| Testimonial images | Simple rounded + shadow | Clean, not over-designed |

---

## To Apply to Another Project

1. Add Google Fonts link to `<head>`
2. Add Tailwind color tokens to config
3. Paste CSS into your global stylesheet
4. Add SVG filter to `<body>`
5. Use classes: `btn-primary`, `btn-secondary`, `card-editorial`, `expert-card`

---

## Git Info

- **Branch:** `theme/industrial-editorial`
- **Repo:** `ndwebsite-gemini`
- **Last commit:** Centered text, bold headers, simplified testimonials
