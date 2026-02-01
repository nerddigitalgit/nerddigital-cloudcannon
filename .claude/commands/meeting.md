---
description: Process meeting notes into structured intel (uses Haiku for cost efficiency)
args: client_name
---

This command processes meeting transcripts efficiently.

**Step 1:** Ask the user to paste the transcript or summary.

**Step 2:** Once you have the transcript, use the Task tool with `model: "haiku"` to process it:

```
Task tool parameters:
- subagent_type: "general-purpose"
- model: "haiku"
- prompt: Include the transcript and these instructions:

  Extract from this meeting transcript:
  1. Key takeaways (3-5 bullets)
  2. Customer pain points (use their exact words)
  3. Objections or hesitations they expressed
  4. Quotes worth saving (verbatim)
  5. Action items mentioned
  6. Recording/transcript links: [user will provide]

  Format using this template:
  [Read _business/_intel/meeting-notes/_template.md for structure]
```

**Step 3:** Take the Haiku output and save it to:
`_business/_intel/meeting-notes/[today's date]-$ARGUMENTS.md`

**Step 4:** Remind user to update:
- `customer-insights.md` with new pain points
- `objections.md` with any new objections
- `testimonials.md` with good quotes
