# How to Customize This Skill

This skill writes direct-sales emails using a proven structure (angles, sequence, subject-line
formats). Everything about the *strategy* is already built in. The one thing it doesn't know yet is
you: your voice, your past emails, your banned words. This file explains how to fill that in, and
walks through what a personalized email looks like versus a generic one.

## 1. Fill in `references/voice-and-examples.md`

This is the only file you need to touch to make the skill sound like you.

- **Tone & style rules**: a short bullet list. What does your writing sound like? Casual or formal?
  Short sentences or longer ones? Any hard rules (e.g. "no em dashes", "always first person")?
- **Banned words/phrases**: anything you never want to see, whether that's corporate jargon, hype
  words, or phrases that just don't sound like you.
- **Sign-off style**: how you close an email. "Best, {name}"? A signature block? Something looser
  like "Talk soon"?
- **Past email examples**: this is the part that matters most. Paste in 10-20 of your own past
  emails, ideally ones that already sold something. Include the subject line and the full body for
  each. More real examples means a closer match; fewer than 5 or 6 and the skill will lean more on
  the generic defaults to fill the gaps.

If you leave the file empty, the skill uses a sensible generic default (plain, direct, first-person,
short paragraphs, no em dashes). You'll get one chance to paste past emails in on the same form the
first time you run it; skip it and it just uses the generic default until you fill the file in yourself.

## 2. How the intake works

Every time you ask this skill to write an email or sequence, it shows you one rich interactive form,
with proper clickable options, a date picker, and text fields, not a plain typed-out list:

1. **What type of email or sequence are you writing?** (a single email, a short 3-email promo, a
   full 6-9 email launch sequence, or something custom, shown as clickable pills)
2. **What are you selling?** (your product, course, plugin, bootcamp, cohort, whatever the offer is)
3. **Who is the audience?** (who's on the list, what they already know about you or the offer)
4. **Got a URL for the offer?** (optional; if given, the skill fetches it and pulls whatever offer
   facts it states instead of asking you to retype them)
5. **Price** (whichever of this and the next the URL didn't already answer)
6. **Deadline / cart-close date** (a real date picker; leave it blank for an evergreen offer)
7. **Any other important details?** (special price, bonuses, guarantees, limited availability, payment
   plan, start date, anything else worth including, all in one flexible field)
8. **Any personal or business stories that could support this?** (optional; paste a link to Notion,
   Google Docs, or anywhere else reachable, or paste the story text directly in the field right below
   it if you'd rather not share a link)

Then, separately, once the form is submitted: if your voice file is still empty, you'll get one chance
to paste 5+ of your past sales emails so the skill can learn your voice. Skip it and future runs use a
generic voice until you fill in `references/voice-and-examples.md` yourself.

It never invents a price, date, discount, or guarantee it wasn't given; if something's still missing
after you submit the form (and after checking a URL, if you gave one), it'll ask for just that one
thing in plain text rather than showing you the whole form again.

## 3. Before / after example

**Generic template email (before voice is filled in):**

> {name},
>
> Quick question. Can I {do the painful task} for you {before deadline}?
>
> {1-2 lines: what the product does FOR them, framed as a service/outcome, not features.}
>
> {Soft proof line.}
>
> [ {CTA} ]
> {light deadline}
> Best, {sender}

**Same template, after voice/offer/audience are plugged in** (illustrative, using a fictional
freelance-writing course as the offer):

> Sam,
>
> Quick question. Can I help you land your first paid writing client before Friday?
>
> Inside Client Launch, you get the exact cold-pitch template that's booked me three new clients
> this month, plus the 10-minute portfolio fix that gets people to actually reply.
>
> One student used it to land a $600 gig in her first week.
>
> **[ JOIN CLIENT LAUNCH -> ]**
> Doors close Friday at midnight.
> Best, Alex

Same skeleton, same job, but now it has a real name, a real offer, a real number, and a voice that
sounds like an actual person instead of a placeholder.
