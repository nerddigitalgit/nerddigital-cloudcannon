# Session Log: January 30, 2026

## Topic: Marketing Ops Setup (LinkedIn Prospecting, Dashboard, Claude Settings)

---

## What We Accomplished

- **LinkedIn Prospecting Plan**: Created full strategy for connecting with target audience (coaches/consultants building Tesla brands)
- **VA Prospecting SOP**: User created process for VA to search, visit profiles, like 2 posts, follow/connect if 2+ mutual connections
- **Marketing Dashboard**: Built Excel file with brand styling (`_business/_metrics/NerdDigital-Marketing-Dashboard.xlsx`)
  - Tab 1: Weekly Inputs (ads, prospecting, content, email)
  - Tab 2: Weekly Outputs (leads, calls, growth %, open rates) with auto-calculated formulas
  - Tab 3: VA Daily Log
  - Tab 4: Weekly Checklist
- **Claude Code Permissions**: Set up `.claude/settings.local.json` with sensible defaults for autonomous operation (Read/Edit/Write, git, npm, python all auto-allowed)
- **Weekly recurring task added**: Follow up with VA on prospecting numbers

---

## Key Decisions Made

- **Prospecting sequence**: Search → Engage 1-2x → Connect → Keep engaging (not follow-first)
- **Dashboard tool**: Google Sheets (import the Excel file) - simple, shareable with VA
- **No LinkedIn automation**: Manual engagement preserves Trust Funnel philosophy and avoids account risk
- **Permission philosophy**: Allow routine operations, deny destructive commands and sensitive file reads

---

## TODO for Next Session

- [ ] Import `NerdDigital-Marketing-Dashboard.xlsx` to Google Sheets
- [ ] Share dashboard with VA
- [ ] VA sets up her tracking sheet for daily prospecting log
- [ ] Continue website migration (see notes below)

---

## Notes

**Website rebuild context** (from Jan 29 session):
- Hero needs to be positioning-first, not course-first
- Credibility line: Use named clients (Khe Hy, Ted Seides, Robbie Crabtree)
- Robbie's "doubled monthly revenue" is strongest verifiable proof
- Course signup moves to popup + footer
- Dev server: Vite + React at localhost:3000
- Still need to convert React components to Nunjucks (ExpertMarquee, LogoMarquee, Testimonials, Nav, Footer)
- Migration plan at `_business/_projects/cloudcannon-migration-plan.md`

**Files created this session:**
- `_business/_metrics/marketing-dashboard.md` (markdown reference)
- `_business/_metrics/NerdDigital-Marketing-Dashboard.xlsx` (the actual spreadsheet)
- `.claude/settings.local.json` (updated with comprehensive permissions)
