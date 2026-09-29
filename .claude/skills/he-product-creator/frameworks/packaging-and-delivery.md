# Packaging & Delivery — From Files to an Installable ZIP + User Guide

> **Read this before Step 2.** This file defines how the Product Creator turns the
> written plugin codebase into the two final deliverables: an **installable ZIP**
> (named correctly, dropped on the Desktop) and a **User Guide** that tells the
> Plugin User how to install, run, and use the plugin. These two are the whole
> point of the skill — get them right.

---

## Step A — Notify, then write files to the Desktop

**Before writing any files, tell the developer where they're going.** A short,
friendly heads-up, e.g.:

> "I'll create all your plugin files in a new folder on your Desktop so you can see
> and open them easily. Building now…"

Then create a folder on the Plugin Developer's Desktop named with the plugin slug
and write the full codebase into it:

```
~/Desktop/{slug}/
├── .claude-plugin/plugin.json
├── skills/{slug}/SKILL.md
├── skills/{slug}/knowledge/…        (only if knowledge was provided)
└── README.txt
```

- Use the confirmed `{slug}` (kebab-case) for the folder name.
- The folder layout MUST match [`plugin-anatomy.md`](plugin-anatomy.md) exactly.
- **Try to write to the Desktop.** If the Desktop isn't writable or can't be found,
  fall back to the skill's own `output/{slug}/` folder and tell the developer the
  exact path you used — never fail silently.

> **macOS note:** the Desktop is `~/Desktop`. On other setups, use the platform's
> Desktop path; if unavailable, use the `output/` fallback above.

---

## Step B — Package the ZIP

Once all files are written and self-checked, package the plugin folder into a ZIP.

### Naming (non-negotiable)

The ZIP filename is **`{plugin-name}-{plugin-version}.zip`**, where:

- `{plugin-name}` = the `name` field in `.claude-plugin/plugin.json` (the slug)
- `{plugin-version}` = the `version` field in `.claude-plugin/plugin.json`

Example: `resume-rocket-1.0.0.zip`. **Read `plugin.json` to get the exact name and
version — do not guess them.**

### Structure (non-negotiable)

The archive's **top-level entry must be the plugin folder itself** (the one
containing `.claude-plugin/`), not its loose contents. Correct:

```
resume-rocket-1.0.0.zip
└── resume-rocket/
    ├── .claude-plugin/plugin.json
    ├── skills/resume-rocket/SKILL.md
    └── README.txt
```

### How to zip (macOS)

Zip **from the Desktop** so the top-level folder is the plugin folder, exclude
macOS junk, and drop the ZIP on the Desktop:

```bash
cd ~/Desktop && zip -r -X "{slug}-{version}.zip" "{slug}" -x "*.DS_Store"
```

- `-r` recurse, `-X` drop extra macOS attributes, `-x "*.DS_Store"` exclude Finder
  junk. Also exclude any `node_modules/` or cache folders (a clean sold plugin
  shouldn't have them).
- Confirm the resulting `.zip` is on the Desktop and is small (well under 50 MB).

### Final placement

The finished ZIP lives at **`~/Desktop/{slug}-{version}.zip`** unless the developer
asked for somewhere else. The unzipped `{slug}/` folder stays on the Desktop too,
so they can inspect or edit the source.

---

## Step C — Write the User Guide

The **User Guide** is for the **Plugin User** (the buyer), not the developer. It is
delivered alongside the ZIP — saved as `~/Desktop/{slug}-User-Guide.md` and also
offered in chat. **Do not** bundle it inside the ZIP (the buyer reads it before/
while installing). Generate it from
[`../templates/user-guide.template.md`](../templates/user-guide.template.md).

It must cover, in plain, friendly, non-technical language:

1. **What this plugin does for you** — the outcome, one short paragraph.
2. **How to install it in the Claude desktop app (Cowork)** — exact, numbered steps
   (see the canonical steps below).
3. **How to run it** — what to type or say to start it.
4. **What you'll be asked for** — the User Inputs, so they can have them ready.
5. **What you'll get** — the Personalized Output they receive.
6. **Tips & troubleshooting** — a few common fixes.

### Canonical install steps (Claude desktop app → Cowork)

Write the install section to match this flow:

1. Download the ZIP file (`{slug}-{version}.zip`) — no need to unzip it.
2. Open the **Claude desktop app** and open **Cowork**.
3. Go to **Customize → Plugins**.
4. Choose **Upload Zip** (the upload / "+" option) and select the ZIP file.
5. Wait for it to install, then make sure the plugin is **enabled** (it appears in
   the `/plugin` list).

### How to run it (after install)

- **Always invoke the skill directly with `/{slug}`** and add your prompt — e.g.
  *`/{slug} go`* or *`/{slug} I want to tailor my resume for this job`*.
- **If the plugin has a master router skill** (two or more functional skills — see
  [`plugin-anatomy.md`](plugin-anatomy.md)), the run command in Step 2 must be the
  **router's** slug — `/{master-router-skill-slug}` + prompt — never an individual
  specialist skill's slug. The router decides which skill to run, so the buyer only
  ever needs to remember the one router command.
- Explicitly invoking with `/{slug}` (or `/{master-router-skill-slug}`) guarantees
  this plugin runs (rather than some other skill being triggered or Claude going
  off-track), so the buyer gets the intended result every time. Do **not** tell
  buyers to "just ask in plain language."
- Then follow the prompts, provide your inputs, and receive your personalized
  output.

---

## Step D — Deliver and hand off

Wrap up with a short, clean summary the developer can act on:

- ✅ **Plugin folder:** `~/Desktop/{slug}/`
- ✅ **Installable ZIP:** `~/Desktop/{slug}-{version}.zip`
- ✅ **User Guide:** `~/Desktop/{slug}-User-Guide.md`
- **What to do next:** test it themselves (install the ZIP in Cowork and run it),
  then it's ready to sell.
- **Optional next step in the journey:** the **Sales Funnel Specialist**
  (`he-sales-funnel-specialist`) turns this plugin into a funnel — mention it only
  briefly, and only if it helps. No hard selling.

---

## Packaging quality checklist

Before telling the developer it's done, verify:

- ✅ All files written and matching [`plugin-anatomy.md`](plugin-anatomy.md).
- ✅ `plugin.json` is valid JSON; `name` and `version` are present and correct.
- ✅ ZIP is named `{name}-{version}.zip`, read straight from `plugin.json`.
- ✅ ZIP's top-level entry is the `{slug}/` folder (not loose files).
- ✅ No `.DS_Store` / junk inside the ZIP; size well under 50 MB.
- ✅ ZIP and folder are on the Desktop (or the stated fallback path).
- ✅ User Guide written, saved to the Desktop, and offered in chat — with accurate
  Cowork install steps and the correct `/{slug}` run command.
- ✅ Final summary lists all three paths and the next step.
