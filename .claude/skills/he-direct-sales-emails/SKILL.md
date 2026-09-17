---
name: he-direct-sales-emails
description: >-
  Plan and write high-converting DIRECT-SALES emails and sequences that sell a specific product,
  course, plugin, bootcamp, cohort, or offer. Use for sales emails, promo emails, launch sequences,
  cart-open / cart-close emails, discount or holiday campaigns, a "last call" / deadline email, a
  re-run promo, or any email blast pushing an offer. Trigger even without the words "sales email":
  phrases like "write the promo", "we're launching X", "emails for the sale", "cart closes Friday",
  "30% off campaign", "rerun the launch", "subject line for the offer", or the command
  "/he-direct-sales-emails start" all apply. Built on a proven direct-response methodology,
  personalized via a short intake and a voice reference file. Default skill for any email whose JOB
  is to make a sale. Do NOT use for nurture newsletters, value emails, webinar logistics, or
  post-purchase delivery emails.
---

# Direct-Sales Emails

This skill turns an offer into emails that sell. It encodes a proven direct-response structure: which
angles open, which prove, which close, and which subject-line formats earn opens, so you are not
guessing. You are reusing structure that is known to work, then writing it in the user's own voice for
their own offer and audience.

The core finding behind everything here: **personal + teaching emails do the selling; urgency emails
harvest the people those earlier emails already convinced.** A deadline email with no story in front of
it has nothing to harvest. Lead with story and outcome, close with urgency.

## When you are invoked, do this

0. **Show one elicitation form, using Claude's Visualize component.** This is the same mechanism used
   by other plugins in this family (e.g. `he-ai-video-shorts`'s intake form): a single rich form with a
   proper text input, date picker, and pill/card selectors, not a plain numbered list. If the Visualize
   component isn't available in the current environment, fall back to presenting the same fields as one
   numbered list in a single message (never as separate one-at-a-time questions).

   Form title: **Email details**

   | # | Field | Type | Required | Notes |
   |---|---|---|---|---|
   | 1 | What type of email or sequence are you writing? | Pills (single-select): Single email / Short promo (3 emails) / Full launch sequence (6-9 emails) / Other | Yes | If "Other", ask how many emails as a quick follow-up. Maps to the arc in `references/sequence-and-rules.md` |
   | 2 | What are you selling? | Text input | Yes | Product, course, plugin, bootcamp, cohort: whatever the offer is |
   | 3 | Who is the audience? | Textarea | Yes | Who's on the list, what they already know |
   | 4 | Got a URL for the offer? | Text input | No | Sales page, checkout page, or webinar registration page |
   | 5 | Price | Text input | No | |
   | 6 | Deadline / cart-close date | Date input | No | Leave blank for an evergreen offer with no deadline |
   | 7 | Any other important details? | Textarea | No | Special price, bonuses, guarantees, limited availability, payment plan, start date, anything else worth including, all in one field |
   | 8 | Do you have any personal or business stories that could support this? | Text input (link) + textarea fallback | No | A link to Notion, Google Docs, or any other reachable page; the textarea lets them paste story text directly if they'd rather not share a link, or if the link can't be fetched later. See "Story bank" below. |

   Infer first: if the user's opening message already answered any of these, skip that field entirely
   rather than showing it in the form. If everything needed is already in their message, skip the form
   completely and proceed straight to drafting.

   After submission: if row 4 gave a URL, fetch it now and fill in any of rows 5-7 the page actually
   states, don't make the user retype something already on the page. If anything is still missing after
   that (no URL, or the page didn't cover it), ask for just that in plain text, one tight batch. Never
   invent a price, date, discount, or guarantee that wasn't given or stated on the page; if it's
   genuinely not there, ask.

   After the form is submitted (and any URL-fetch follow-ups resolved), separately ask the voice question
   below as its own turn, not bundled into the form itself. Never ask the voice question in the same
   message as any unresolved clarifying question (a price contradiction, a missing deadline, anything
   still genuinely open). Resolve every other open item completely first; the voice question comes last,
   once nothing else is pending.

   **Handling a short or ambiguous reply when more than one question is open:** if you have asked more
   than one thing (for example, a price/deadline clarification and, separately, the voice question) and
   the user replies with something brief like "skip" or "none," do not treat that one reply as resolving
   every open item. A brief reply resolves only the single question it was actually sent in response to,
   normally whichever question was asked most recently. Any other question still has no answer. For each
   of those still-unresolved items, apply whatever fallback you already stated for it when you first
   asked (e.g. "if there isn't a real deadline, I'll treat it as evergreen," "I'll use the price as
   stated on the page") rather than inventing a new number, date, or term that was never given anywhere.
   If you didn't already state a fallback for something still unresolved, ask again in plain text; never
   fill the gap with a fabricated value. This applies with equal force to the whole rest of this skill:
   an unresolved contradiction is never license to invent a resolution.

   **Voice question** (only ask if `references/voice-and-examples.md` is currently empty): "Paste 5+ of
   your past sales emails, subject + body each, plus any tone or banned-word notes (optional). Your voice
   file is still empty, so this is the one chance this run to save it; skip it and I'll use a plain
   generic voice until you fill it in." If answered, save it to `references/voice-and-examples.md` before
   drafting anything, so this run and every future run read from it instead of asking again. If skipped,
   use the generic default voice for this run only (see "Voice" below).

   ## Story bank

   If field 8 gave a link, attempt to fetch it (Notion, Google Doc, or any other reachable URL). If the
   fetch succeeds, read it for concrete personal/business stories and use one where a template calls for
   a personal scene or proof (Templates A, D, F in `references/email-templates.md`), the same way you'd
   use anything else the user gave you: never invent a detail the source didn't actually contain. If the
   fetch fails (private page, login wall, broken link), or if the user filled the field 8 textarea
   instead of a link, or left both blank, proceed on whatever's actually available: use pasted text if
   given, otherwise continue without a story bank rather than blocking the rest of the intake on it.

1. **Decide the shape.** One email, or a sequence? For a launch/cart window, use the full arc in
   `references/sequence-and-rules.md`. For a single send, pick the one email type that fits where the
   reader is in the funnel (opener vs. closer) from `references/email-templates.md`.
2. **Pick the angle(s).** Choose from the ranked formats in `references/angle-playbook.md`. Match
   the angle to the slot: story/personal/question to open, mechanism + proof in the middle, urgency to
   close.
3. **Write subject = hook, preview = offer.** This is non-negotiable and it is the single most consistent
   pattern in the winners. The subject earns the open; the preview text carries the price/discount/
   deadline. Pull formats from `references/subject-lines.md` and write 5 subject candidates per email,
   then flag the recommended A and B pair.
4. **Write the body** to the annotated template for that email type in `references/email-templates.md`,
   targeting the middle of that template's word range (not the floor). Precede it with the header block
   that file shows (send slot/type, subject A/B, preview, other preview candidates). Before
   moving to the next email or presenting anything: count this email's actual words. The target number is
   an aim point, not the gate, an email at or above the floor is complete even if it's under the target.
   Only being under the FLOOR stated in `email-templates.md` means it's not finished: revise by adding a
   concrete line before continuing. If you can't add real content because a specific (a curriculum
   detail, a proof number) genuinely wasn't given, say so plainly rather than either inventing it or
   silently delivering short copy. Do not present a sequence where any email is under its stated floor
   without flagging why.

   **Also check, per email, before moving on:** if this email mentions the guarantee at all and it is
   NOT one of the final 1-2 emails in the sequence, count its guarantee sentence(s). More than one short
   clause, or over ~15 words, means it has become the full paragraph, which only belongs in the final
   1-2 emails. If that's what happened, cut it down to a single short mention before continuing, don't
   carry it forward and fix it later.
5. **Apply the send + segmentation rules** in `references/sequence-and-rules.md` (map to the user's
   platform first, who gets it, in what order, the discount ladder only if the user has one, clicker-safe
   rules).
6. **Apply the voice rules** from `references/voice-and-examples.md`. See "Voice" below.
7. **Run the anti-AI writing pass.** Before presenting the final copy, run the drafted emails through the
   `he-anti-ai-writing` skill (rewrite mode) to catch overused words, repetitive sentence structures,
   reflexive triptychs, generic transitions, and other AI tells. Apply its fixes silently: do not
   narrate what it caught or summarize the pass, and do not use that skill's own output sections. Just
   deliver the cleaned copy using the format below, same as every other QA step in this workflow.

**Always present the output as:** a schedule table first (columns: #, Day/Time, Email type, Subject A,
Subject B), then the emails in order, each with its header block (send slot, type, Subject A/B, preview,
other preview candidates) followed by the body. Keep one CTA per email. Never output an example line
from the reference files verbatim, derive the equivalent in the user's own voice instead.

Segmentation, exclusions, and clicker-safe rules in `references/sequence-and-rules.md` still inform
send order and what a given email's copy should or shouldn't say (e.g. hiding the discount number on a
clicker-touching send). None of that gets printed anywhere in the output, not as a per-email line and
not as a closing note explaining segmentation logic either. Apply the rules silently and move on; don't
add a trailing paragraph walking the user through how to split their list.

## The non-negotiable principles (each earned from the data)

- **Subject = hook, preview = offer.** Every top earner did this. e.g. a curiosity/outcome subject that
  promises to eliminate a costly, painful task, with a preview carrying the price and deadline. The
  subject is curiosity/outcome; the money details live in the preview. Never burn the subject line on
  the price.
- **Open with a person, not a deadline.** The highest-revenue and highest-open formats are the plain
  personal question (e.g. "Hey {name}, can I automate your social media for you before Wednesday?") and
  the founder story (a concrete personal scene with a real stake in it). Deadlines convert people who are
  already warm; they do not create warmth.
- **Teach one reframe per launch.** The persuasion engine in the best emails is a worldview shift, e.g.
  "stop selling things people consume, start selling things people install" / "a course asks you to
  watch-learn-apply; a plugin asks you to install-run-get-the-result." Find the one reframe for this
  offer and repeat it.
- **Proof is concrete or it is nothing.** Real numbers, screenshots, a named authority (e.g. a named
  expert with a verifiable credential). No vague "transform your life."
- **One CTA per email.** Bold it, repeat it once. Never compete links against each other.
- **Action emails are short; teaching emails are long.** Match length to job (see the exact ranges in
  `references/email-templates.md`). A final-call email is "short one, we go live tomorrow"-length. A
  story email earns its length.
- **Escalate, don't front-load.** Introduce the VIP/upsell late (final 1-2 emails), no exceptions. A
  one-line guarantee mention is fine anywhere; the full risk-reversal paragraph is still a closer,
  introduced late.
- **Cap the broadcasts.** Clicks drop off significantly by the third broadcast to the same engaged
  segment. Three to four sends to the engaged list, then move to opener/clicker re-targets. Do not keep
  blasting the whole list.
- **Discount ladder rises in price.** When running phases, go 50% then 40% then 30% off (the price goes
  UP each phase) so buying early is rewarded. Make the "price goes up" mechanic explicit.
- **Close tight.** The strongest closers use a short clock: "[3 hours!] then GONE", "act in the next 60
  minutes", "final chance: 60 mins till the code expires." Tighter clock, better harvest.

## Voice

Read `references/voice-and-examples.md` for this user's tone, banned words, sign-off style, and past
email examples, and write to match it. Never output an example line from the reference files verbatim,
derive the equivalent in this user's own voice instead.

**If that file is empty:** it's collected via the separate voice question at the end of Step 0, asked
in its own turn after the other fields, not bundled into any of them. If the user filled it in, it's
already saved by the time you reach this step. If they skipped it, use a generic default voice for this
run only (plain, direct, first-person, short paragraphs, no em dashes) without asking again; they can
fill it in on any future run whenever they're ready.

## Reference files (read the one you need)

- `references/angle-playbook.md`: the ranked email FORMATS and ANGLES, with the reasoning behind each.
  Read this to choose what kind of email to write and why it works. **Start here when picking angles.**
- `references/subject-lines.md`: swipe-ready subject + preview templates by format. Read this when
  writing subject lines.
- `references/email-templates.md`: annotated body templates for each email type (story, question,
  product-launch, mechanism, social-proof, disqualifier, urgency, final-call, PM-reopen, persona). Read
  this when writing the body.
- `references/sequence-and-rules.md`: the full launch sequence skeleton, segmentation, send cadence,
  the discount ladder, and clicker-safe rules. Read this when planning a multi-email campaign.
- `references/voice-and-examples.md`: this user's tone, banned words, sign-off style, and past email
  examples, collected via the separate voice question in Step 0. Read this before writing anything; see
  "Voice" above if it's empty.
- `he-anti-ai-writing` skill (this plugin): run as a final QA pass on drafted copy before delivering,
  see step 7 above.

## Quick-start checklist (use before you hand anything back)

- [ ] Offer facts confirmed (name, outcome, price, deadline, and whatever else came through the "other
      details" field: discount, payment plan, bonuses/VIP, guarantee, start date)
- [ ] Schedule table output before email 1 (no Segment column)
- [ ] Each email's word count checked against its floor and ceiling in `references/email-templates.md`,
      not just kept short on instinct
- [ ] Each email has a single job and a single CTA
- [ ] Subject = hook, preview = offer/price/deadline (for every email)
- [ ] 5 subject candidates per email, recommended A/B pair flagged, labeled "Other preview candidates"
- [ ] Sequence opens personal/story, closes urgency; disqualifier sits in the middle
- [ ] Offer block stated identically across the sequence
- [ ] Full guarantee paragraph + VIP appear only in the final 1-2 emails (a one-line guarantee mention is
      fine anywhere)
- [ ] Clicker-touching sends drop the discount number and current price (this still applies internally
      even though it's no longer printed as a labeled "Rule:" line)
- [ ] No "Segment:", "Exclusions:", or "Rule:" line anywhere in the output
- [ ] Voice matches `references/voice-and-examples.md`, or sensible defaults if empty
- [ ] Discount-ladder rules applied only if the user has a real ladder, never invented
- [ ] A story-bank story used where relevant, only if genuinely supplied (link or paste), never invented
- [ ] No example line from the reference files appears verbatim
- [ ] Every price, date, discount, and guarantee in the final copy traces back to something the user
      actually said or the offer page actually stated, never filled in from an unresolved question a
      short reply like "skip" didn't actually answer
- [ ] Passed the `he-anti-ai-writing` QA pass (no banned words, no reflexive triptychs, no repetitive
      sentence structures, no generic transitions/filler, no paragraph stutter/wall)
