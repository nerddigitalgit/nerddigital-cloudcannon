# Session Log

Track progress across working sessions so we can pick up where we left off.

---

## 2025-01-24 - Second Brain Build

**Project:** Slack + Notion + Zapier + AI Second Brain System

**Guide Reference:** `C:\Users\marci\Downloads\Copy of Second Brain Build Guide.pdf`

**Status:** Starting fresh / resuming from previous session

### Progress Checklist

#### Part 1: Slack Setup
- [x] 1.1 Create `sb-inbox` channel
- [x] 1.2 Pin instructions message
- [x] 1.3 Note Channel ID

#### Part 2: Notion Database Setup
- [x] 2.1 Create "Second Brain" page
- [x] 2.2 Create People database
- [x] 2.3 Create Projects database
- [x] 2.4 Create Ideas database
- [x] 2.5 Create Admin database
- [x] 2.6 Create Inbox Log database
- [x] 2.7 Get all 5 Database IDs

#### Part 3: Connect n8n to Tools (adapted from Zapier guide)
- [x] 3.1 Connect Slack
- [x] 3.2 Connect Notion
- [x] 3.3 Connect OpenAI/Claude

#### Part 4: Main Capture Automation (DONE in n8n)
- [x] 4.1 Create capture workflow
- [x] 4.2 Set up Slack trigger (HTTP Request to Slack API)
- [x] 4.3 Add AI classification step
- [x] 4.4 Add Code step to parse JSON
- [x] 4.5 Add Switch for routing (5 paths)
- [x] 4.6 Set up each path → Notion
- [x] 4.7 Set up Needs Review path
- [x] 4.8 Test and turn on

#### Part 5: Fix Button Automation
- [ ] 5.1 Create "Second Brain - Fix Button" Zap
- [ ] 5.2 Set up trigger (threaded replies)
- [ ] 5.3 Add filter for "fix:"
- [ ] 5.4 Add Code step to parse correction
- [ ] 5.5 Add filter for valid corrections
- [ ] 5.6 Find original Inbox Log entry
- [ ] 5.7 Add paths for each destination
- [ ] 5.8 Handle invalid fix commands

#### Part 6: Daily Digest Automation
- [ ] 6.1 Create "Second Brain - Daily Digest" Zap
- [ ] 6.2 Set up scheduled trigger
- [ ] 6.3 Query Active Projects
- [ ] 6.4 Query People with follow-ups
- [ ] 6.5 Query Today's Admin Tasks
- [ ] 6.6 Format data for AI
- [ ] 6.7 Generate digest with AI
- [ ] 6.8 Send via Slack DM

#### Part 7: Weekly Review Automation
- [ ] 7.1 Create "Second Brain - Weekly Review" Zap
- [ ] 7.2 Set up weekly trigger
- [ ] 7.3 Query this week's Inbox Log
- [ ] 7.4 Query all active projects
- [ ] 7.5 Format the data
- [ ] 7.6 Generate weekly review
- [ ] 7.7 Send via Slack DM

### Notes
- Using n8n instead of Zapier (lower cost, more flexible)
- Considered adding vector DB for future semantic search - decided to keep simple for now, revisit after 30-60 days of use
- Defined 4 content pillars: FOCUS, STORY & CATEGORY, SIMPLE SYSTEMS, TEST EVERYTHING
- Primary goal: 5x/week LinkedIn content (currently at ~1x/week)
- YouTube is secondary - not until LinkedIn is consistent
- Tesla brand philosophy defined (not Ferrari, not Ford - quality + accessibility)
- Week 1 posts written and ready in `_content/drafts/week-1-linkedin-ready.md`
- VA handling images

### Where We Left Off
**Last step completed:** Week 1 LinkedIn posts written, LinkedIn-ready file created
**Next step:**
- Add pillar auto-tagging to n8n classification prompt (instructions provided)
- VA creates images for Week 1
- Schedule/post Monday-Friday
- Build Parts 5-7 of second brain (Fix Button, Daily Digest, Weekly Review) when ready

---
