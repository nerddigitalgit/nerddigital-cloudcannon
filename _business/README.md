# NerdDigital Business Brain

This is the knowledge base that powers NerdDigital. It's designed to:
1. Give AI assistants (like Claude) deep context about the business
2. Store and organize business intelligence
3. Enable faster decision-making and content creation
4. Reduce you as the bottleneck

## Structure

```
_business/
├── _identity/          # Who you are, voice, positioning
├── _offers/            # Products, services, pricing
├── _systems/           # SOPs, workflows, processes
├── _content/           # Pillars, formats, calendar, assets
├── _legal/             # Contracts, terms, templates
├── _metrics/           # KPIs, goals, tracking
├── _agents/            # AI agent instructions
├── _intel/             # Customer insights, objections, wins
└── _learning/          # Sales and delivery lessons
```

## How to Use

### With Claude Code / CLI
Navigate to this folder and Claude will have access to all context:
```bash
cd /mnt/c/Users/marci/Git/nerddigital/_business
claude
```

### Loading Agent Context
Tell Claude which agent mode to use:
- "Act as my chief of staff" → reads `_agents/chief-of-staff.md`
- "Help me write content" → reads `_agents/content-creator.md`
- "Help with this proposal" → reads `_agents/sales-assistant.md`

### Keeping It Updated
The system is only as good as its data. Update regularly:
- After client calls → add meeting notes to `_intel/meeting-notes/`
- After wins → add to `_intel/wins.md`
- After learning something → add to `_learning/`
- After objections → add to `_intel/objections.md`

## Quick Start
1. Fill in `_identity/` files first (voice, positioning, ideal client)
2. Complete `_offers/offer-stack.md` with your current offers
3. Set goals in `_metrics/goals.md`
4. Start using it with Claude

## Skills Integration
See `SKILLS.md` for slash commands that accelerate common workflows.

