# Plugin Specs Framework — The 5 Things to Confirm Before Building

> **Read this before Step 1.** Before the Product Creator writes any code, it
> confirms **five Plugin Specs** with the Plugin Developer. Each spec is a small,
> friendly checkpoint: the Product Creator proposes, the developer confirms or
> edits. This file defines each spec, how to propose it, and the rules that keep
> the experience effortless.

The five specs, in order:

1. **Confirm the Personalized Output** — what the plugin produces.
2. **Confirm the User Inputs** — what the buyer must provide to get it.
3. **Confirm the Plugin Name** — how the plugin is named.
4. **Provide additional Knowledge** — optional reference material to bundle.
5. **Confirm the Voice** — how the output should sound.

---

## The rules that override everything

1. **Never overwhelm the developer.** Every proposal is a short **executive
   summary** — scannable, labeled, a few tight lines, never a wall of text. The
   developer should be able to confirm in seconds. One decision at a time.
2. **Always propose first, then ask.** Never hand the developer a blank page. Use
   the Offer DNA (or whatever they provided) to generate a strong default
   proposal, then ask them only to confirm or tweak it. Smart defaults > open
   questions.
3. **One question at a time — never all five at once.** Never present the five
   specs together or as a single block. Ask them strictly in sequence: ask
   Question 1 → wait for the developer's answer → ask Question 2 → wait → ask
   Question 3 → … Never advance to the next spec until the current one is answered.
4. **Always show your proposed value.** Whenever you propose the best value for a
   spec (Personalized Output, User Inputs, Plugin Name, etc.), you must always
   **display it to the developer** so they can see it — never confirm a value you
   haven't shown.
5. **Always show a live example of the Personalized Output.** When you propose the
   Personalized Output (structure, layout, length, etc.), always **display a
   concrete example** of the buyer's deliverable, rendered with the **native Claude
   UI feature that renders fastest** — prefer a text/markdown preview using simple
   markup (it renders far faster) over the heavier **Visualize** feature; use
   Visualize only when a text preview genuinely can't convey the layout.

---

## Use the Claude desktop app's native UI

These specs are confirmed inside the Claude desktop app, where interactive UI is
available. For **every** proposal:

- **Present the proposal** as a clean executive summary (short labels, bullets, a
  small table where it helps). Where it makes the output tangible, render a
  **Visualize / artifact mock** — e.g. a one-screen preview of what the buyer's
  deliverable will look like — so the developer *sees* it, not just reads about it.
- **Collect the decision** with an interactive selection (a form / clickable
  option card), not a fill-in-the-blank essay. Give the developer simple choices:
  - **✅ Looks good — confirm**
  - **✏️ I'd like to edit** (then capture what to change)
  - For the Plugin Name, present the 5 names as selectable options.
- **Always keep a plain fallback.** If interactive UI isn't available, present the
  same proposal as a short numbered list and ask the developer to reply with a
  number or "confirm." The experience must work either way.

Keep each interaction to **one screen, one decision**. Confirm, then move on.

---

## The progress tracker (show after every step)

Every time the developer completes a step, show progress using this exact simple
text + emoji format, so they always know where they are:

```
Confirm the Personalized Output: ✅ Completed
Confirm the User Inputs: ⏳ Pending
Confirm the Plugin Name: ⏳ Pending
Provide additional Knowledge: ⏳ Pending
Confirm the Voice: ⏳ Pending
```

- `✅ Completed` for done steps, `⏳ Pending` for the rest.
- Show the whole tracker each time, updated, so progress is always visible.
- Keep it to these five lines — no extra commentary stacked on top.

---

## Spec 1.1 — Confirm the Personalized Output

**What it is:** What the plugin generates for the buyer — the content, structure,
layout, and organization of the deliverable they receive. This is the product. Get
it right first; everything else serves it.

**How to propose:**
- Pull from the Offer DNA attributes **"How It Works"**, **"What Your Personalized
  {Creation} Includes"**, and **"Features"** if available.
- Propose: the **deliverable name** (e.g. "your tailored resume"), its **format**
  (document, plan, set, report…), and its **structure** — the 5–7 sections/
  components it contains, each as a **label + one line**.
- Show a **mock/preview** of the layout (a Visualize artifact or a tight outline)
  so the developer can see the shape of what buyers get.

**Executive-summary shape:**
> **Deliverable:** {what the buyer receives, named concretely}
> **Format:** {document / plan / set / report / kit…}
> **Includes:**
> 1. **{Section}** — {one line}
> 2. **{Section}** — {one line}
> … (5–7 total)

**Then ask:** Confirm, or edit (add/remove/reorder sections, change format).

---

## Spec 1.2 — Confirm the User Inputs

**What it is:** The **minimum** info the buyer must provide for the plugin to
generate their personalized output. Minimum is the watchword — every extra field is
friction. Ask for the least that still yields a specialist-grade, personalized
result.

**How to propose:**
- Derive from what the Personalized Output actually needs, plus the Offer DNA
  **"How It Works"** step 1 ("Submit your info").
- Propose a short list of inputs, each = **label + why it's needed + required/
  optional**. Favor 2–4 required inputs. Note which can be a paste, a link, or a
  file upload.

**Executive-summary shape:**
> **The buyer provides:**
> 1. **{Input}** — {why it's needed} · *required*
> 2. **{Input}** — {why} · *required*
> 3. **{Input}** — {why} · *optional*

**Then ask:** Confirm, or edit (add/remove inputs, change required/optional).

**Design rule:** The generated skill must **ask for any missing input in a few
simple questions** at runtime — never assume, never fabricate. Bake that behavior
into the product skill.

---

## Spec 1.3 — Confirm the Plugin Name

**What it is:** How the plugin is named — both the pretty **display name** (e.g.
*Resume Rocket*) and its kebab-case **slug** (`resume-rocket`) used in the codebase.

**How to propose:**
- Propose the **top 5 name ideas**. Lead with the Offer DNA Product Name if one
  exists, then 4 strong, genuinely different alternates.
- Each name: 3–5 words, catchy, hints at the outcome or the "magic," avoids generic
  /literal ("AI Resume Tool"). For each, show the **display name** and its derived
  **slug** so the developer sees both.

**Executive-summary shape (selectable options):**
> 1. **Resume Rocket** — `resume-rocket` · {one-line angle}
> 2. **Interview Magnet** — `interview-magnet` · {angle}
> 3. **{Name}** — `{slug}` · {angle}
> 4. **{Name}** — `{slug}` · {angle}
> 5. **{Name}** — `{slug}` · {angle}

**Then ask:** Pick one (1–5), or propose their own name (you derive the slug and
confirm it's valid kebab-case). This chosen slug is used **everywhere** per
[`plugin-anatomy.md`](plugin-anatomy.md).

---

## Spec 1.4 — Provide additional Knowledge

**What it is:** Optional reference material the plugin should draw on to make its
output better than a generic prompt — the Plugin Developer's proprietary
frameworks, methods, examples, templates, brand rules, do's & don'ts, sample
outputs, or domain facts. This becomes the plugin's bundled `knowledge/` library.

**How to propose:**
- Explain, in one or two lines, **why** this matters: bundled knowledge is what
  makes the product feel like *their* specialist, not a generic AI.
- Offer concrete examples of what they could add (a framework, a checklist, 1–2
  great sample outputs, brand/voice rules, terminology).
- Make clear it's **optional** — the plugin works without it, but it's where a lot
  of the "wow" comes from. Accept pasted text, links, or uploaded files.

**Then ask:**
> **Want to add any knowledge for the plugin to use?**
> - **➕ Yes — I'll provide it** (paste / link / upload)
> - **⏭️ Skip — build from the offer as-is**

If provided, plan to bundle it as `knowledge/{file}.md` files referenced by the
product skill (see [`plugin-anatomy.md`](plugin-anatomy.md)). **Only bundle what
they actually give you** — never invent knowledge.

---

## Spec 1.5 — Confirm the Voice

**What it is:** How the plugin's output should **sound** — the tone and register of
every deliverable it produces for the buyer. Voice makes the output feel on-brand
and human.

**How to propose:**
- Propose a sensible **default voice** inferred from the offer and audience (e.g.
  *"Warm, encouraging, and plain-spoken — like a supportive expert coach"*).
- Describe it as **3–4 tone attributes** + one **"sounds like / never sounds like"**
  contrast so it's concrete.

**Executive-summary shape:**
> **Proposed voice:** {2–4 word descriptor}
> **Tone:** {attribute} · {attribute} · {attribute}
> **Sounds like:** {one line} · **Never:** {hype / jargon / etc.}

**Then ask:** Confirm, pick from a couple of alternates (e.g. *Professional* /
*Friendly* / *Bold*), or describe their own. Bake the confirmed voice into the
product skill's "Voice & Tone" section.

---

## After all five are confirmed

Show the final tracker with all five `✅ Completed`, then move to Step 2 — but
**first notify the developer** that all plugin files will be created on their
Desktop (see [`packaging-and-delivery.md`](packaging-and-delivery.md)) before you
start writing code.

---

## Quality bar for Step 1

- **Five clean checkpoints**, each an executive summary, each one decision.
- **Proposals first** — never a blank page; every proposal is grounded in the
  developer's Offer DNA / provided info.
- **Native UI used** for presenting and collecting, with a plain-text fallback.
- **Tracker shown** after every step, always the five-line format.
- **No fabrication** — knowledge and proof come only from the developer.
- **Nothing overwhelming** — short, friendly, fast. The developer should feel
  guided, never quizzed.
