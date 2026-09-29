# Sales Asset Inputs Framework — The 6 Inputs to Collect Before Generating

> **Read this before Input 1.** Before the Sales Funnel Specialist writes any
> copy, it collects **six inputs** from the user, one at a time. This file
> defines each input, the exact prompt to use, and the rules that keep the
> experience effortless.

The six inputs, in order:

1. **Offer DNA** — the offer to turn into sales assets.
2. **Plugin** — the actual product code being sold.
3. **Branding** — colors, fonts, and look for the sales/checkout pages.
4. **Plugin Creator** — the real person behind the product (trust / Creator Info).
5. **Backend Offer Type** — what gets promoted after purchase.
6. **Backend Offer Info** — details about that backend offer.

> **Note on naming:** these six are called **Inputs 1–6** here. They are all
> collected inside the SKILL's **Step 1**. Don't confuse them with the SKILL
> workflow Steps (0–4) or the Lovable build Steps (1–13) — three separate scales.

---

## Before you ask anything — locate what already exists

The Offer DNA usually comes from the Product Researcher and the Plugin from the
Product Creator. **Before asking Input 1 or Input 2, look for them:**

- Scan the **current conversation** for a pasted/attached Offer DNA or plugin.
- Check the **Desktop** and the local `output/` folder for an Offer DNA file
  (e.g. `*-offer-dna.md`) and a plugin folder/ZIP (e.g. `~/Desktop/{slug}/`).
- If a **Notion** or **Google Docs/Drive** connection exists, check there too.

Only surface a "Use the {Product Name} …" pre-selected option when you have
**actually found** the asset. If you found nothing, don't show that option — just
ask the user to provide it. Never claim to have an asset you haven't located.

---

## The rules that override everything

1. **Open with the framing line.** The very first thing the skill says when
   invoked is:
   > Before I create your Sales Assets, I need some info from you.
   Then begin Input 1. Never dump all six questions at once.
2. **One input at a time — never all six at once.** Ask Input 1 → wait for the
   answer → ask Input 2 → wait → … → Input 6. Never advance until the current
   input is provided or confirmed.
3. **Offer what you already have.** When the "locate" pass above actually found
   an Offer DNA and/or the Plugin code, surface it as the pre-selected first
   option ("Use the {Product Name} …") so the user can confirm in one click
   instead of re-providing it.
4. **Propose, don't interrogate.** Keep each prompt short and answerable in a few
   words or one click. No long forms, no jargon.
5. **Native UI, plain fallback.** Use the Claude desktop app's interactive UI
   (selectable option cards, file/link inputs). If interactive UI isn't
   available, present the same options as a short numbered list and ask the user
   to reply with a number or a value. Keep it fast-loading and clean.

---

## The six inputs (exact prompts)

### Input 1 — Offer DNA
> **Step 1 of 6 — Offer DNA**
> Select or provide the Offer DNA that you want to turn into Sales Assets.
> - Use the Offer DNA for your product **{Product Name}**  *(show only if found)*
> - Provide a different Offer DNA
> - Other

Accept: a pasted Offer DNA, a file/doc/link, or a pointer to an existing one.
This is the primary source of truth for all five deliverables. **Derive the
`{slug}`** here: use the plugin folder name if you have it, otherwise kebab-case
the Product Name (e.g. "Resume Rocket" → `resume-rocket`). You'll need it for the
output folder path and the install instructions in the emails.

### Input 2 — Plugin
> **Step 2 of 6 — Plugin**
> Select or provide the Plugin that you want to sell.
> - Use the **{Product Name}** Plugin  *(show only if found)*
> - Provide a different Plugin
> - Other

Accept: a folder name/path, a ZIP file, or any other file. Read what the plugin
actually does (its skill(s), inputs, and output) so the copy describes the real
product, not a guess.

### Input 3 — Branding
> **Step 3 of 6 — Branding**
> Provide any branding elements or info (e.g. logo, color scheme, fonts).
> You can provide a website link, screenshot, file, document, or image.

Extract the **real** core branding elements — **color scheme (hex), typography
(fonts), and overall aesthetic** — to fill the Lovable.dev master prompt's design
system. How to extract:
- **Website link:** fetch the page (WebFetch) and read its CSS/markup for the
  actual fonts and hex colors. If you can only approximate, say so.
- **Screenshot / image:** sample the visible colors and identify the fonts as
  best you can; state that they're approximate.
- **Never invent brand hex codes or fonts.** Always show the extracted palette +
  fonts back to the user in the confirm step so they can correct them before they
  reach the master prompt.
- If nothing is provided, fall back to a clean, ultra-minimalist modern SaaS look
  and say so explicitly.

### Input 4 — Plugin Creator
> **Step 4 of 6 — Plugin Creator**
> Provide the name and the info about the Plugin Creator. Ideally, this should be
> your full name or a real person's full name which builds trust and improve sales
> conversions.

Use this for the sales page's **Creator Info** section (Section 18) and as the
sender/signature voice in the emails. Accept a name plus any bio/credentials, a
link, or a photo. If the user gives only a name, that's fine — use it; never
invent credentials, bio, or achievements they didn't provide.

### Input 5 — Backend Offer Type
> **Step 5 of 6 — Backend Offer Type**
> Select the type of backend offer that will be promoted in the after-purchase
> sequence, once someone has purchased your plugin.
> - **High-Ticket Offer** (e.g. service, coaching) where a sales call is required — goal: get customers to book a free call (Discovery / Consultation / Demo).
> - **Info Product or E-Learning Program** (e.g. course, membership) people can buy on their own — goal: get customers to purchase another program. No sales calls.
> - **Software or App** people can sign up or buy on their own — goal: get customers to sign up for the software or app. No sales calls.
> - **Local Shop or Service** (e.g. wellness center, restaurant) where people visit a physical location — goal: get customers to visit.
> - **Other** (please provide)

This choice sets the **upsell goal and CTA** in the after-purchase emails. Map it
using the table in `templates/after-purchase-email-template.md`.

### Input 6 — Backend Offer Info
> **Step 6 of 6 — Backend Offer Info**
> Provide any info you have about your Backend Offer.
> You can provide a website link, screenshot, file, document, or image.

Use this to write accurate, specific upsell copy (name, outcome, who it's for,
the action to take). Never invent details or proof about the backend offer.

---

## After Input 6 — Summarize & confirm (do not skip)

Once all six inputs are collected, present a short **executive summary** of what
was gathered and what it will be used to generate, then ask the user to review
and confirm (or request edits) **before** generating anything. Include the
extracted branding so the user can correct it here.

```
Here's what I'll use to create your Sales Assets:

1. Offer DNA ........... {Product Name} (source: {pasted / file / existing})
2. Plugin .............. {Product Name} ({folder / ZIP / file})
3. Branding ............ {fonts} · {hex colors} · {aesthetic} (source: {link / image / default})
4. Plugin Creator ...... {Creator name} (source: {name / bio / link})
5. Backend Offer Type .. {selected type}
6. Backend Offer ....... {name + one line} (source: {link / info})

I'll generate 5 files:
- sales-page-copy.md
- master-prompt-sales-page.md
- checkout-page-copy.md
- cart-abandoned-email-copy.md
- after-purchase-email-copy.md

Look good, or want to edit anything?
```

Only proceed to generation after the user confirms.
