# n8n Update: Add Pillar Auto-Tagging to Ideas

## What This Does
When you capture an idea in Slack, the AI will automatically tag it with the relevant content pillar (FOCUS, STORY, SYSTEMS, TESTING) so you can filter your Ideas database by pillar when it's time to create content.

---

## Step 1: Update the AI Classification Prompt

In your n8n workflow, find the "Message a model" node (the AI classification step).

### Find this section in your prompt:

```json
For IDEAS:
{
  "destination": "ideas",
  "confidence": 0.85,
  "data": {
    "name": "Idea Title",
    "one_liner": "Core insight in one sentence",
    "notes": "Elaboration if provided",
    "tags": []
  }
}
```

### Replace with:

```json
For IDEAS:
{
  "destination": "ideas",
  "confidence": 0.85,
  "data": {
    "name": "Idea Title",
    "one_liner": "Core insight in one sentence",
    "notes": "Elaboration if provided",
    "pillar": "FOCUS or STORY or SYSTEMS or TESTING or null",
    "tags": []
  }
}
```

---

## Step 2: Add Pillar Rules to the Prompt

Add this to the RULES section of your classification prompt:

```
- For IDEAS, assign a "pillar" based on the content:
  - "FOCUS" = about finishing, avoiding shiny objects, fundamentals before volume, simplicity, not chasing
  - "STORY" = about positioning, narrative, explaining what you do, category design, standing out, being different
  - "SYSTEMS" = about funnels, email courses, lead gen, newsletters, the basic marketing stack, automation
  - "TESTING" = about validation, rapid testing, data over assumptions, testing before building, Meta ads testing
  - null = if it doesn't clearly fit any pillar (general idea)
```

---

## Step 3: Update Notion Ideas Database

Add a new property to your Ideas database in Notion:

- **Property name:** Pillar
- **Property type:** Select
- **Options:** FOCUS, STORY, SYSTEMS, TESTING

---

## Step 4: Update n8n Notion Node

In the "Create a database page" node for Ideas, map the `pillar` field from the parsed JSON to the new Pillar property in Notion.

---

## Done

Now when you capture something like:
> "idea: most experts skip the basics and wonder why advanced tactics don't work"

It will automatically tag as pillar: SYSTEMS
