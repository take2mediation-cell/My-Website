# Plugin Anatomy — How to Build an Installable Claude Plugin

> **Read this before writing a single file.** This is the exact, current spec for
> a Claude Plugin that a Plugin User can install from a ZIP and run inside the
> **Claude desktop app → Cowork**. Every plugin the Product Creator ships must
> match this anatomy exactly, or it will fail to install, fail to load, or fail to
> trigger. When in doubt, this file wins.

The Product Creator's job is to turn the Plugin Developer's confirmed Plugin Specs
into a small, clean codebase that follows this anatomy, then package it (see
[`packaging-and-delivery.md`](packaging-and-delivery.md)).

---

## The shape of a sellable plugin

A low-ticket AI product is almost always **one plugin with one skill** — focused,
easy to install, easy to run, easy to support. Default to this shape. Only add a
second skill if the Offer DNA genuinely describes two distinct jobs. If you build
two or more functional skills that do distinct jobs, **always also build an extra
master router skill**. The role and purpose of the master router skill is to
determine which skill to invoke based on the user's intent, prompt, or stage. This
way the user doesn't need to know which specific skill in the plugin to invoke or
use — they just invoke the master router skill, and it figures out which specific
skill to invoke and use. This drastically improves the user experience and
usability of the entire plugin. If you build a master router skill, **"Step 2 — Run
it" in the User Guide must instruct the user to run `/{master-router-skill-slug}` +
prompt**.

```
{plugin-name}/                         ← the folder that gets zipped (top level)
├── .claude-plugin/
│   └── plugin.json                    ← the manifest (required)
├── skills/
│   └── {skill-name}/
│       ├── SKILL.md                   ← the product skill (the brain)
│       └── knowledge/                 ← optional bundled reference material
│           └── {knowledge-file}.md
└── README.txt                         ← short plain-text overview (recommended)
```

The **User Guide** is delivered alongside the ZIP for the Plugin User, **not**
bundled inside it (see [`packaging-and-delivery.md`](packaging-and-delivery.md)).

---

## `.claude-plugin/plugin.json` — the manifest

This file makes the folder a plugin. It lives in `.claude-plugin/` and **nowhere
else**. Generate it from
[`../templates/plugin-manifest.template.json`](../templates/plugin-manifest.template.json).

```json
{
  "name": "resume-rocket",
  "displayName": "Resume Rocket",
  "version": "1.0.0",
  "description": "Your personal AI resume writer — paste your resume + the job link and get a tailored, recruiter-ready resume in seconds.",
  "author": { "name": "{Plugin Developer or brand name}" }
}
```

| Field | Required | Rules |
|-------|----------|-------|
| `name` | **Yes** | **kebab-case only** — lowercase letters, numbers, hyphens. No spaces, no underscores, no capitals. This is the install/invocation identity. |
| `displayName` | Recommended | The human-friendly name shown in the UI. Spaces and capitals allowed (e.g. `Resume Rocket`). |
| `version` | Recommended | Semantic version, e.g. `1.0.0`. New product ships at `1.0.0`. |
| `description` | Recommended | One clear sentence positioning the plugin as a Specialist/DFY service (not "a tool"). **Keep it short — ≤ ~300 chars** (see *Cowork validation rules*). |
| `author` | Recommended | Object with `name` (the Plugin Developer's name or brand). |

**Hard rules**

- `name` MUST be valid kebab-case, MUST match the plugin folder name, and SHOULD
  match the `{slug}` used everywhere else (skill folder, ZIP filename).
- The JSON must be valid — no trailing commas, no comments. A broken manifest = a
  plugin that silently won't load.
- Keep it minimal. Do not invent fields. The five above are all a sold plugin needs.
- **Never add `userConfig`** (omit it, or leave it `{}`). A populated `userConfig`
  makes Cowork reject the manifest and *every* skill silently fails to register.
  The manifest is not a place to store user data.

---

## `skills/{skill-name}/SKILL.md` — the product skill

This is the brain of the product — the skill the Plugin User runs. It takes the
user's input, enriches it with any bundled knowledge and available sources, and
generates the personalized output. Generate it from
[`../templates/product-skill.template.md`](../templates/product-skill.template.md).

### Frontmatter (required)

```yaml
---
name: resume-rocket
description: "Writes a tailored, recruiter-ready resume from the user's current resume and a target job. Use when the user wants to rewrite, tailor, or optimize a resume for a specific role. Trigger when the user says: \"tailor my resume\", \"rewrite my resume for this job\", \"optimize my CV\", or pastes a resume and a job link."
---
```

- `name` — kebab-case. For `skills/{name}/SKILL.md` the **folder name** is the
  invocation identity; keep the frontmatter `name` identical to the folder to
  avoid confusion.
- `description` — the single most important line in the whole product. It is **how
  the skill auto-triggers**. It must (1) say what the skill produces, and (2) list
  concrete trigger phrases the buyer would actually type. Write it trigger-aware,
  like the sibling skills in this plugin.
- **Length cap:** keep the `description` **≤ 1,024 characters**. Past that, Cowork
  truncates it and triggering degrades.
- **No `<`, `>`, `{`, `}`, or `http://` in the `description`** (see *Cowork
  validation rules* below). Fill in every `{placeholder}` — none may remain in the
  final description.
- No other frontmatter fields are needed for a standard sold plugin. Do not add
  `allowed-tools`, `model`, etc. unless a spec truly requires it.

### Body (the instructions)

The body tells Claude exactly how to deliver the product. It must encode, at
minimum:

1. **What it produces** — the personalized output, named concretely (the Confirmed
   Personalized Output spec).
2. **What it needs** — the minimum required inputs, and how to ask for anything
   missing in a few simple questions (the Confirmed User Inputs spec).
3. **How it builds the output** — the steps the skill runs, including reading any
   bundled `knowledge/` files and using available sources.
4. **The exact output format** — structure, sections, and layout of the deliverable
   (the Confirmed Personalized Output spec), so every run looks specialist-grade.
5. **Voice & tone** — how the output should sound (the Confirmed Voice spec).
6. **Quality bar** — a short checklist the skill self-checks before delivering.

Keep the body focused and readable. It is a spec for one job done excellently, not
a manual. Match the altitude of the sibling skills in this plugin.

---

## `skills/{skill-name}/knowledge/` — optional bundled knowledge

If the Plugin Developer provided additional knowledge (Spec 1.4), bundle it here as
one or more Markdown files and have `SKILL.md` reference them by **relative path**
(e.g. `knowledge/framework.md`). This is the plugin's private reference library —
frameworks, examples, proprietary methods, brand rules — that makes the output
better than a generic prompt could.

- Reference bundled files with relative links from `SKILL.md`, never absolute paths.
- Everything the skill needs must live **inside the plugin folder**. Files outside
  the plugin folder (e.g. `../something`) are not copied on install and will break.

---

## `README.txt` — short plain-text overview (recommended)

A brief, plain-text orientation for anyone who opens the plugin folder: what the
plugin is, what it produces, and a one-line "how to run it." Generate it from
[`../templates/plugin-readme.template.txt`](../templates/plugin-readme.template.txt).
This is developer-facing; the buyer-facing instructions live in the **User Guide**.

---

## Cowork validation rules (these fail silently — get them right)

Cowork uploads the plugin to a remote validator that enforces extra rules and hides
the real error behind a generic **"Plugin validation failed"** toast. The big ones:

- **Description length.** The `plugin.json` `description` must be short — **≤ ~300
  characters** is safe (much over ~500 silently fails). Each `SKILL.md` frontmatter
  `description` must be **≤ 1,024 characters**.
- **Forbidden characters in description fields.** Do **not** use `<`, `>`, `{`, `}`,
  or `http://` in any `description` (the manifest's or any skill's) — they get
  HTML-sanitized or rejected. Cowork only scans **description fields**, so normal
  prose and even raw `<tags>` are fine inside `SKILL.md` bodies and `knowledge/`
  files; just keep those characters out of the descriptions themselves.
- **No `userConfig`.** Omit it or leave it `{}` (see manifest rules above).
- **State persistence is a HARD RULE, not descriptive prose.** Cowork sandboxes
  each session and can't read `~/.claude/...` or other home-dir paths across
  sessions — writing there is silently useless, and a skill that merely *says*
  "saved to your project" without a real write behind it is a bug, not a
  shortcut. Default every generated plugin to **stateless** (input → output). But
  if the confirmed Personalized Output has **any reason to remember something
  across sessions** — a tracker, an ongoing multi-session build, a returning
  buyer's saved preferences or progress — the generated `SKILL.md` MUST encode
  this exact mechanic, not a vaguer paraphrase of it:
  1. **At the start of every session**, check whether `state.json` exists in the
     connected project folder (or the Plugin Developer's chosen connector —
     Google Drive / Notion — if that's what was confirmed instead).
  2. **If it exists** — load it and use its values. Never re-ask the buyer for
     anything already stored there.
  3. **If it doesn't exist** — ask the buyer the setup/config questions needed,
     then **actually write a real `state.json` file** (or equivalent connector
     record) with those values **before continuing** to generate any output.
  4. **Update it whenever it changes.** Re-write `state.json` (or the connector
     record) any time a session changes something worth remembering, so the next
     session picks up exactly where this one left off.
  - Never persist to the home dir or anywhere outside the connected project
    folder / connector — it will not survive across sessions in Cowork.
  - This mechanic belongs in the generated skill's own `SKILL.md` (see
    [`product-skill.template.md`](../templates/product-skill.template.md)) — not
    left implicit or assumed.

> These rules are empirically derived (Cowork behavior, early June 2026) and may
> change. If an upload fails, open Claude Desktop DevTools (**Cmd+Opt+I**) →
> **Network** → inspect the failed upload response for the real error.

---

## Naming: pick one slug and use it everywhere

From the confirmed Plugin Name, derive a single kebab-case **`{slug}`** and use it
consistently to avoid load failures:

- plugin folder: `{slug}/`
- manifest `name`: `{slug}`
- skill folder: `skills/{slug}/` (for a single-skill plugin, reuse the same slug)
- skill frontmatter `name`: `{slug}`
- ZIP file: `{slug}-{version}.zip`

`displayName` carries the pretty, human name (e.g. `Resume Rocket`); the slug is its
kebab-case form (`resume-rocket`).

---

## Where files must (and must not) go — the load-failure checklist

These are the most common reasons a generated plugin won't install, load, or
trigger. Check every one before packaging:

- ✅ `plugin.json` is inside `.claude-plugin/` — **not** at the plugin root, **not**
  inside `skills/`.
- ✅ `skills/`, `knowledge/`, and `README.txt` are at the **plugin root** — **not**
  inside `.claude-plugin/`.
- ✅ Each skill is `skills/{name}/SKILL.md` (a folder per skill), not a loose file.
- ✅ `name` fields are valid kebab-case and consistent (manifest, folder, skill).
- ✅ `plugin.json` is valid JSON (no trailing commas, no comments).
- ✅ Every `SKILL.md` has valid YAML frontmatter between `---` fences.
- ✅ The manifest `description` is ≤ ~300 chars; each skill `description` is
  trigger-aware and ≤ 1,024 chars.
- ✅ No `<`, `>`, `{`, `}`, or `http://` in any `description` field (no leftover
  `{placeholders}`).
- ✅ No `userConfig` in the manifest (omit it, or leave it `{}`).
- ✅ All internal links/paths are **relative** and point inside the plugin folder.
- ✅ No file references anything outside the plugin folder (`../` escapes break).
- ✅ The whole plugin is small (well under 50 MB) and free of `.DS_Store` clutter.

---

## What NOT to build

- **No `commands/`, `agents/`, `hooks/`, or `mcpServers`** unless a spec truly
  requires them. A sold low-ticket plugin is one skill that does one job well.
- **No build tooling, package.json, or scripts** unless the output genuinely needs
  them. The plugin should be pure Markdown + JSON wherever possible — it installs
  and runs with zero setup.
- **No external dependencies** the Plugin User would have to install. The product
  must work the moment it's enabled.
- **No fabricated knowledge.** Only bundle knowledge the Plugin Developer actually
  provided or confirmed. Never invent proprietary frameworks or fake examples.
