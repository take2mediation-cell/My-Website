---
name: he-product-launch-specialists
description: "Master router and single entry point for the AI Product Launch Specialists plugin. Invoke THIS skill to research, build, sell, or promote a Claude Plugin as a low-ticket AI product — it figures out what you need and hands you to the right specialist (Product Researcher, Product Creator, Sales Funnel Specialist, or Meta Ads Specialist). The one skill to remember. Trigger when the user says: \"product launch specialists\", \"I want to launch a Claude Plugin\", \"help me build and sell an AI product\", \"where do I start\", \"AI product launch\", \"launch specialists\", or any broad request to start/continue the launch journey without naming a specific specialist. Also the default skill to reach for when the user mentions this plugin by name. When the user's intent is clear, route straight to the single most relevant specialist. When it's missing or unclear, show the 4-option menu and ask what they want to do next."
---

# AI Product Launch Specialists — Router

This is the **master router** and **single entry point** for the plugin. The user
only has to remember **one** skill — `he-product-launch-specialists` — and this
skill guides them to the right specialist for what they want to do.

Its whole job: **read the user's intent and invoke the single most relevant
specialist skill** — or, if intent is unclear, **ask the user which of the 4
things they want to do**, then route. It does no specialist work itself.

---

## Foundation — AI Product = Claude Plugin (read first)

**In this plugin, an "AI Product" always means a Claude Plugin.** A Claude Plugin
is a collection of one or more skills that take the user's input and generate
something **personalized and custom-made** for that user — drawing on their input
plus other sources (knowledge base, websites, databases, MCP connections, API
integrations, online research).

> User provides input → plugin invokes the relevant skill(s) → plugin generates
> and delivers a highly personalized output.

In marketing & sales, a Claude Plugin is positioned as a **Specialist/Expert**
who delivers a **personalized done-for-you service**, not "a tool."

**Full definition + the 4-step launch workflow:**
[`shared/what-is-a-claude-plugin.md`](shared/what-is-a-claude-plugin.md) ·
[`shared/the-4-step-launch-workflow.md`](shared/the-4-step-launch-workflow.md).

---

## The 4 destinations

The plugin takes a Claude Plugin from idea to live low-ticket AI product in four
steps — one specialist each:

1. **Product Research** — *Research and identify ideas for top-selling Claude
   Plugins.* → `he-product-researcher` *(active)*
2. **Product Creation** — *Turn your Offer DNA into an installable Claude Plugin
   that people can install and run in the Claude desktop app.* →
   `he-product-creator` *(active)*
3. **Sales Funnel Creation** — *Create and build the sales funnel with a sales
   page, checkout page, and emails.* → `he-sales-funnel-specialist` *(active)*
4. **Meta Ads Launch** — *Write the Meta ad copy required to launch — campaign
   structure, Text Hooks for your image/video ads, and Primary Text — to start
   driving traffic to your sales page.* → `he-meta-ads-specialist` *(active)*

---

## How to route

### Step 1 — Read intent
Map the user's request to exactly one destination using this table:

| If the user wants to… | Route to |
|------------------------|----------|
| Find/validate ideas, research a market, score ideas, create an **Offer DNA** | `he-product-researcher` |
| **Build / code / create / package** the plugin, make the installable **ZIP** | `he-product-creator` |
| Write the **sales page / checkout / emails**, build the **funnel** | `he-sales-funnel-specialist` |
| Write **ad copy / Meta ads / image-ad creatives / hooks** | `he-meta-ads-specialist` |

If the request clearly matches one destination, **route there immediately** — do
not show the menu.

### Step 2 — If intent is missing or unclear, ask
If the user gave no prompt, a vague prompt, or one that could match more than one
destination, present this menu and ask them to pick **one number**:

> **What would you like to do next?**
>
> **1) Product Research** — Research and identify ideas for top-selling Claude
> Plugins.
> **2) Product Creation** — Turn your Offer DNA into an installable Claude Plugin
> that people can install and run in the Claude desktop app.
> **3) Sales Funnel Creation** — Create and build the sales funnel with a sales
> page, checkout page, and emails.
> **4) Meta Ads Launch** — Create all assets required to launch Meta Ads and
> start driving traffic to your sales page.
>
> *Reply with a number (1–4), or just tell me what you're working on.*

Keep it short and friendly. Don't over-explain. Wait for their choice.

### Step 3 — Hand off to the chosen specialist
Once the destination is known, **invoke that one specialist skill** and follow its
`SKILL.md` workflow to completion (read `skills/<that-skill>/SKILL.md` and execute
it). Pass along everything the user already said so they don't repeat themselves.

- Routing to **Product Research**, **Product Creation**, **Sales Funnel
  Creation**, or **Meta Ads Launch** runs the live skill end to end. All four
  specialists are active.

---

## Rules

- **Invoke exactly one specialist.** Never trigger multiple specialists, and never
  fire a specialist that doesn't match the user's intent. One request → one route.
- **Don't do the specialist's work yourself.** This skill only routes; the chosen
  specialist does the work.
- **Bias toward routing, not interrogating.** If intent is clear, route silently.
  Only show the menu when you genuinely can't tell what they want.
- **Always offer a path forward.** All four steps are live — after finishing one
  step, point the user to the natural next one (Research → Create → Sell → Promote)
  rather than dead-ending.
- **Explain the journey when it helps.** If the user asks how the whole process
  works, give the 4-step overview from
  [`shared/the-4-step-launch-workflow.md`](shared/the-4-step-launch-workflow.md)
  before routing.
