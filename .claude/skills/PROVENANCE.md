# Skill provenance

The two skills in this directory were installed from an uploaded plugin bundle, not written here.

- **Bundle**: `direct-sales-emails-1.0.2.zip`
- **Plugin name**: `direct-sales-emails` ("Direct Sales Emails For Claude")
- **Version**: 1.0.2
- **Author**: Darius Lukas Pte. Ltd.
- **Installed**: 2026-09-17
- **Skills**: `he-direct-sales-emails`, `he-anti-ai-writing`

## What was changed on install

Everything is verbatim from the bundle except one file:

- `he-direct-sales-emails/references/voice-and-examples.md` was filled in with Ubuntu Legacy
  Community Care tone rules, banned words, and sign-off style. It shipped as an empty template and
  is the file the skill is designed to have you fill in. The past-examples section is still empty.

The bundle's own `.claude-plugin/plugin.json` was not copied. The skills are installed as project
skills under `.claude/skills/` rather than as an installed plugin, so they load for anyone working
in this repository without a marketplace setup.

## Licensing

The bundle carried no licence file. Treat it as licensed for the purchaser's own use only. Do not
redistribute these skill files outside this organization without checking the terms of purchase.

## Upgrading

If a newer version of the bundle arrives, replace both skill directories from it and then restore
the customized `voice-and-examples.md`, which is the only file holding local content.
