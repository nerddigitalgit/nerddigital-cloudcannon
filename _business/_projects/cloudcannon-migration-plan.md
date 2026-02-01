# NerdDigital WordPress → CloudCannon Migration Plan

## Overview

**Goal:** Migrate nerddigital.com from WordPress to CloudCannon using the Industrial Editorial design system, with all content previewable locally before deployment.

**Timeline:** 3 phases

---

## Phase 1: Project Setup & Content Export

### 1.1 Fix Dev Server Hot Reload Issue
The Vite dev server sometimes doesn't detect WSL file changes. Fix:

```bash
# Add to vite.config.ts
export default {
  server: {
    watch: {
      usePolling: true,
      interval: 100
    }
  }
}
```

### 1.2 Export WordPress Content
**Tools needed:**
- WordPress export (Tools → Export → All content)
- WP REST API for images/media
- Manual page audit

**Content to export:**
| Content Type | Action |
|--------------|--------|
| Pages | Export HTML/text, convert to Nunjucks |
| Blog Posts | Export to markdown files |
| Images | Download from wp-content/uploads |
| Videos | Note embed URLs (YouTube, Vimeo) |
| Forms | Recreate with new form handler |
| SEO data | Export titles, meta descriptions |

### 1.3 Create Eleventy Project Structure
```
nerddigital-cloudcannon/
├── .eleventy.js
├── cloudcannon.config.json
├── package.json
├── index.njk                    # Homepage (from React conversion)
├── _layouts/
│   └── base.njk
├── _includes/
│   ├── nav.njk
│   ├── footer.njk
│   ├── hero.njk
│   ├── lead-magnet.njk
│   ├── testimonials.njk
│   └── expert-marquee.njk
├── _data/
│   ├── site.json
│   ├── navigation.json
│   └── footer.json
├── assets/
│   ├── css/
│   │   └── styles.css           # Industrial Editorial styles
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   └── [all images]
│   └── uploads/                  # CloudCannon media folder
├── landing/
│   └── expert-conversion-code.njk  # Standalone course page
├── blog/
│   └── [markdown posts]
└── pages/
    ├── about.njk
    ├── services.njk
    └── contact.njk
```

---

## Phase 2: Content Conversion

### 2.1 Convert Homepage (React → Nunjucks)

**Source:** `websitebygemini/ndwebsite-gemini/` (React components)
**Target:** `index.njk` with flat front matter

Components to convert:
- [x] Hero.tsx → hero section with email form
- [x] LeadMagnet.tsx → lead magnet section (Expert Conversion Code)
- [ ] ExpertMarquee.tsx → expert photos marquee
- [ ] LogoMarquee.tsx → client logos
- [ ] Testimonials.tsx → testimonials grid
- [ ] Navbar.tsx → nav include
- [ ] Footer.tsx → footer include

### 2.2 Convert Expert Conversion Code Landing Page

**Source:** `expert-conversion-code.html` (static HTML)
**Target:** `landing/expert-conversion-code.njk`

This is already close to final. Convert to:
- Nunjucks template with flat front matter
- Add data-editable attributes for CloudCannon
- Connect form to email service (ConvertKit/Mailchimp)

### 2.3 Convert WordPress Pages

For each WordPress page:
1. Export content
2. Create `.njk` file with front matter
3. Add data-editable attributes
4. Match Industrial Editorial styling

**Pages to migrate:**
| WordPress Page | New Location | Priority |
|----------------|--------------|----------|
| Home | index.njk | HIGH |
| About | pages/about.njk | MEDIUM |
| Services | pages/services.njk | MEDIUM |
| Contact | pages/contact.njk | MEDIUM |
| Blog | blog/index.njk | LOW |
| Blog Posts | blog/[slug].md | LOW |

### 2.4 Convert Blog Posts to Markdown

```yaml
---
layout: blog-post.njk
title: "Post Title"
date: 2025-01-15
author: "Marcio Santos"
excerpt: "Short description..."
featured_image: "/assets/uploads/post-image.jpg"
tags: ["marketing", "funnels"]
---

Post content in markdown...
```

---

## Phase 3: CloudCannon Configuration

### 3.1 cloudcannon.config.json

```json
{
  "source": "",
  "output": "_site",
  "timezone": "America/Toronto",
  "_generator": {
    "name": "eleventy",
    "version": "2.0"
  },
  "paths": {
    "data": "_data",
    "layouts": "_layouts",
    "includes": "_includes",
    "static": "assets",
    "uploads": "assets/uploads"
  },
  "collections_config": {
    "pages": {
      "path": "",
      "output": true,
      "icon": "wysiwyg",
      "name": "Pages",
      "_enabled_editors": ["visual", "data"]
    },
    "landing_pages": {
      "path": "landing",
      "output": true,
      "icon": "rocket_launch",
      "name": "Landing Pages",
      "_enabled_editors": ["visual", "data"]
    },
    "blog": {
      "path": "blog",
      "output": true,
      "icon": "article",
      "name": "Blog Posts",
      "_enabled_editors": ["content", "data"]
    }
  },
  "_inputs": {
    "hero_title": { "type": "text", "label": "Hero Title" },
    "hero_subtitle": { "type": "textarea", "label": "Hero Subtitle" },
    "hero_image": { "type": "image", "label": "Hero Image" },
    "show_testimonials": { "type": "switch", "label": "Show Testimonials" }
  }
}
```

### 3.2 Visual Editing Setup

Every editable element needs:
```html
<h1 data-editable="text" data-prop="hero_title">{{ hero_title }}</h1>
<img src="{{ hero_image }}" data-editable="image" data-prop-src="hero_image">
```

**CRITICAL:** Use flat keys (hero_title) not nested (hero.title)

---

## Local Preview Setup

### Run Locally
```bash
cd nerddigital-cloudcannon
npm install
npm start
# Opens http://localhost:8080
```

### Test Checklist
- [ ] All pages render correctly
- [ ] Images load from /assets/images/
- [ ] Forms submit (or show placeholder)
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Industrial Editorial styling matches

---

## Migration Execution Order

### Week 1: Foundation
1. [ ] Create Eleventy project structure
2. [ ] Convert Industrial Editorial CSS to standalone stylesheet
3. [ ] Convert homepage React → Nunjucks
4. [ ] Set up nav/footer includes
5. [ ] Test locally

### Week 2: Content Migration
1. [ ] Export WordPress content
2. [ ] Download all images
3. [ ] Convert Expert Conversion Code landing page
4. [ ] Convert About, Services, Contact pages
5. [ ] Test locally

### Week 3: Blog & Polish
1. [ ] Convert blog posts to markdown
2. [ ] Set up blog listing page
3. [ ] Add CloudCannon configuration
4. [ ] Test visual editing locally
5. [ ] Connect to CloudCannon

### Week 4: Launch
1. [ ] DNS cutover to CloudCannon
2. [ ] Set up form handlers
3. [ ] Test all forms
4. [ ] Monitor for issues

---

## Files Reference

| Current Location | Purpose |
|------------------|---------|
| `websitebygemini/ndwebsite-gemini/` | React homepage (source) |
| `websitebygemini/ndwebsite-gemini/expert-conversion-code.html` | Landing page (ready) |
| `_business/_identity/brand-visual-2.0.md` | Design system |
| `_business/_identity/brand-guidelines.md` | Full brand reference |
| `/mnt/c/Users/marci/Git/CLOUDCANNON_CONVERSION_PROMPT.md` | CloudCannon instructions |

---

## Open Questions

1. **Email service:** Which provider for the course signup form? (ConvertKit, Mailchimp, other)
2. **Blog priority:** How important is migrating blog posts? Can this wait?
3. **Domain:** Is nerddigital.com on Cloudflare or another DNS provider?
4. **Analytics:** Keep Google Analytics or switch to something else?

---

## Next Steps

1. **Approve this plan** or request changes
2. **Export WordPress content** (I can help structure the export)
3. **Create Eleventy project** with first converted page
4. **Review locally** before CloudCannon connection
