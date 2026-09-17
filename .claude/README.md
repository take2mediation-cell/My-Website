# Claude configuration for this repository

## Sales agent

`.claude/agents/sales-agent.md` defines a `sales-agent` subagent that writes fundraising and
membership email campaigns for Ubuntu Legacy Community Care.

**How to use it.** In a Claude Code session in this repository, ask for the work and name the agent:

> Use the sales-agent to write a 3 email campaign for the year end appeal.

Or invoke the underlying skill directly:

> /he-direct-sales-emails start

The agent runs an intake first: what you are raising money for, who is on the list, the amount, the
deadline, any details worth including, and any stories you can point it to. Answer what you know and
leave the rest blank. It will not invent an amount, a date, a match, or a receipt claim.

**What it writes.** Donor appeals, membership drives, sponsorship asks, event and registration
pushes, monthly-giving upgrades, and lapsed-donor reactivation. Single emails or full sequences.

**What it does not write.** Newsletters, program updates, volunteer scheduling, thank-you and
receipting emails, and grant applications. Those are different jobs with different rules.

## First run

The agent will ask once for five or more of your past appeals so it can learn your voice, then save
them to `.claude/skills/he-direct-sales-emails/references/voice-and-examples.md`. Until that section
is filled in, it writes to the default voice already recorded in that file. You can paste the
examples in yourself at any time instead of waiting to be asked.

Strip donor names, email addresses, giving amounts, and any care details out of examples before
saving them. That file is committed to git.

## Before anything ships

Every campaign comes back with a **Before you send** list of facts that still need confirming.
Confirm them. The agent is built to refuse to guess at amounts, dates, receipting language, and
match terms, which means those gaps arrive as bracketed placeholders rather than as plausible
fabrications.

## Skills

`.claude/skills/` holds the two skills the agent runs on. See `.claude/skills/PROVENANCE.md` for
where they came from, what was customized, and how to upgrade them.
