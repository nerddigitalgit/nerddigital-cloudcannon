# Session Log: January 29, 2026

## Topic: Website Rebuild

---

## What We Accomplished

- Found and reviewed the CloudCannon migration plan (`_business/_projects/cloudcannon-migration-plan.md`)
- Started the Vite dev server for local preview of the new site (http://localhost:3000/)
- Reduced expert photo cards by 20% (280x360 → 224x288)
- Worked through hero credibility copy options - identified that named clients are stronger than revenue claims

---

## Key Decisions Made

- **Hero copy direction**: Current hero is too course-focused. Needs to establish NerdDigital positioning first, with course as secondary CTA (popup + footer)
- **Credibility approach**: Use named clients (Khe Hy, Ted Seides, Robbie Crabtree) rather than unverifiable revenue claims
- **No overclaiming**: Ruled out "$3M" and "helped 30+ entrepreneurs hit $20K months" because no receipts to back it up

---

## Credibility Options to Consider

| Option | Copy |
|--------|------|
| **Name-drop** | "Trusted by Khe Hy, Ted Seides, and Robbie Crabtree" |
| **Outcome + name** | "Helped Robbie Crabtree double his monthly revenue" |
| **Behind the scenes** | "The funnel strategist behind Radreads, Capital Allocators, and Performative Speaking" |

Robbie's "doubled monthly revenue" quote is the strongest verifiable outcome.

---

## TODO for Next Session

- [ ] Finalize hero headline copy (positioning-first, not course-first)
- [ ] Add credibility line to hero using one of the options above
- [ ] Move course signup to popup + footer
- [ ] Continue converting remaining React components to Nunjucks (ExpertMarquee, LogoMarquee, Testimonials, Nav, Footer)
- [ ] Follow up on SEO proposal if no response (from previous session)

---

## Notes

- Dev server running at http://localhost:3000/ (Vite + React)
- Testimonials are in `websitebygemini/ndwebsite-gemini/constants.ts`
- Migration plan has full week-by-week execution breakdown
- Vite config already has WSL polling fix in place
