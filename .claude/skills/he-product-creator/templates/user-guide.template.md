# {Display Name} — User Guide

Welcome! This short guide shows you how to install and use **{Display Name}** in the
Claude desktop app. No technical skills needed — you'll be up and running in a few
minutes.

---

## What {Display Name} does for you

{One short, friendly paragraph: you provide {inputs}, and {Display Name} creates
{the personalized output} for you — a done-for-you {deliverable} made just for your
situation. Lead with the outcome the buyer cares about.}

---

## Step 1 — Install it (about 2 minutes)

You'll install {Display Name} from the ZIP file you received.

1. **Download the ZIP file** — `{slug}-{version}.zip`. You don't need to unzip it.
2. **Open the Claude desktop app** and open **Cowork**.
3. Go to **Customize → Plugins**.
4. Click **Upload Zip** (the upload / "+" option) and choose the ZIP file you
   downloaded.
5. Wait a moment for it to install, then make sure **{Display Name} is enabled** —
   it shows up in your plugins list.

That's it — it's installed.

---

<!-- WHICH SLUG TO USE HERE:
     • Single-skill plugin → use the skill's {slug}.
     • Plugin with a master router skill (2+ functional skills) → use the
       {master-router-skill-slug}, NEVER an individual specialist skill's slug. The
       router decides which skill to run, so the buyer only remembers one command.
     Replace every `/{slug}` below with the correct one, then delete this comment. -->

## Step 2 — Run it

Always start {Display Name} by typing **`/{slug}`** and then adding your prompt —
for example: *`/{slug} go`* or *`/{slug} I want to {example request the buyer would
make}`*.

Invoking it directly with `/{slug}` makes sure **{Display Name}** runs (and not some
other skill), so you get the result you came for every time.

<!-- INCLUDE THE NOTE BELOW ONLY IF this plugin's SKILL.md has a "Remembering
     state across sessions" section (i.e. it uses the state.json persistence
     mechanic). Skip it entirely for genuinely stateless, one-shot products —
     they never need folder reconnection. Delete this comment either way. -->

> **Each new session, Claude may ask you to reconnect your project folder** —
> this is normal and expected, just choose the same folder again. Once
> connected, **{Display Name}** will remember your history automatically.

---

## Step 3 — Give it what it needs

{Display Name} will ask you for a few things. Have these ready:

1. **{Input}** — {what it is / how to provide it}
2. **{Input}** — {…}
3. **{Input}** *(optional)* — {…}

You can paste text, share a link, or upload a file where it makes sense. If you
leave something out, {Display Name} will simply ask.

---

## Step 4 — Get your {deliverable}

In moments, you'll receive your **{the personalized output}**, including:

1. **{Section / component}** — {one line}
2. **{Section / component}** — {…}
3. **{Section / component}** — {…}
{…through all the components.}

Everything is tailored to what you provided — it's yours.

---

## Tips & troubleshooting

- **Don't see it after installing?** Open the `/plugin` list and make sure
  **{Display Name}** is toggled **on**, then try again.
- **Nothing happens?** Make sure you started your message with **`/{slug}`** — that's
  what launches it. Try again, e.g. *`/{slug} go`*.
- **Want a different result?** Just tell {Display Name} what to change — it can
  revise your {deliverable}.
- **Get the best result:** the more specific your input, the more personalized and
  useful your {deliverable} will be.

---

Enjoy your {deliverable} — made just for you by **{Display Name}**.
