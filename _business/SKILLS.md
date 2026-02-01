# Claude Code Skills for NerdDigital

Skills are slash commands that accelerate your workflow. They combine your business brain context with specific tasks.

## How Skills Work

Skills are defined in `.claude/commands/` and can:
1. Auto-load relevant context files
2. Run specific workflows
3. Act as shortcuts for common tasks

## Recommended Skills to Create

### `/chief` - Chief of Staff Mode
Loads chief-of-staff agent context and starts a strategic thinking session.

```markdown
# /chief

Load context from:
- _business/_identity/*
- _business/_offers/offer-stack.md
- _business/_metrics/goals.md

Then ask: "What do you need help thinking through?"
```

### `/content` - Content Creation Mode
Loads content agent context for writing.

```markdown
# /content

Load context from:
- _business/_identity/voice.md
- _business/_identity/ideal-client.md
- _business/_content/pillars.md

Then ask: "What content do you want to create?"
```

### `/proposal` - Proposal Drafting
Loads sales context for writing proposals.

```markdown
# /proposal [client-name]

Load context from:
- _business/_offers/offer-stack.md
- _business/_legal/scope-template.md
- _business/_intel/meeting-notes/[client-name].md (if exists)

Then draft proposal structure.
```

### `/meeting` - Post-Meeting Processing
Processes a meeting transcript into structured notes.

```markdown
# /meeting [client-name]

1. Create new file: _business/_intel/meeting-notes/[date]-[client-name].md
2. Use template from _business/_intel/meeting-notes/_template.md
3. Extract: pain points, objections, quotes, action items
4. Prompt: Paste the transcript or summary
```

### `/objection` - Log New Objection
Quick-add a new objection and response.

```markdown
# /objection

1. Ask: What was the objection?
2. Ask: What context were you selling in?
3. Ask: How did you respond?
4. Append to _business/_intel/objections.md
```

### `/win` - Log Client Win
Quick-add a client success.

```markdown
# /win

1. Ask: Client name?
2. Ask: What offer?
3. Ask: What result?
4. Ask: Any quote from them?
5. Append to _business/_intel/wins.md
```

## Setting Up Skills

In your project, create `.claude/commands/` folder:

```
nerddigital/
├── .claude/
│   └── commands/
│       ├── chief.md
│       ├── content.md
│       ├── proposal.md
│       ├── meeting.md
│       ├── objection.md
│       └── win.md
└── _business/
    └── ...
```

Each `.md` file in `commands/` becomes a slash command.

## Example Skill File

`.claude/commands/chief.md`:
```markdown
---
description: Start a Chief of Staff thinking session
---

Read the following files for context:
- _business/_identity/about.md
- _business/_identity/positioning.md
- _business/_identity/ideal-client.md
- _business/_offers/offer-stack.md
- _business/_metrics/goals.md

You are now acting as my Chief of Staff. Reference the context above.

Ask me: "What do you need help thinking through today?"

Help me:
- Prioritize decisions
- Think through problems
- Draft communications
- Push back if something doesn't align with my goals or values
```

## Daily Workflow with Skills

1. **Morning:** `/chief` → Review priorities, plan the day
2. **After calls:** `/meeting [name]` → Process notes
3. **Content time:** `/content` → Draft posts/emails
4. **Sales:** `/proposal [name]` → Draft proposals
5. **Anytime:** `/objection` or `/win` → Capture intel

