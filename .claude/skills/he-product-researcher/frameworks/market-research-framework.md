# Market Research Framework

The research engine for the Product Researcher. Its job: understand the buyer
and the market well enough to generate **5 different Claude Plugin ideas with
high top-seller potential**, every one grounded in real online research.

Two rules sit above everything else in this framework:

1. **Online research is mandatory.** Ideas are NEVER generated from the model's
   own memory alone. Before proposing any idea, perform live research across
   multiple sources — Google, YouTube, Reddit, and any other relevant sources —
   using whatever tools, connections, and integrations are available
   (`WebSearch`, `WebFetch`, and any connected MCP integrations). If a research
   tool is unavailable, say so plainly rather than inventing demand.
2. **Never overwhelm the user.** Clarifying questions must be few, simple, and
   easy to answer in a sentence or less. No long questionnaires, no jargon, no
   questions that require deep thinking or essays.

---

## Step A — Take what the user gave you

The user may provide text, links, or attachments at invocation. Treat all of it
as the **primary source of truth**: their audience, niche, existing offers,
customer language, competitor names, etc. Read links/attachments before asking
anything.

## Step B — Ask only the few simple things still missing

Ask **at most 3–4** short, friendly questions, and only for what you genuinely
need and don't already have. Phrase them so the user can answer in a few words.

Good, simple questions (pick only the ones still unanswered):

- **Who's your ideal customer?** (e.g. "course creators", "real-estate agents")
- **What problem do you want to solve for them?**
- **What's their dream outcome** — what does success look like for them?
- *(optional)* **Anything they already pay for** to solve this today?

If the user already gave enough to research, skip questions entirely and go
straight to research. One short round of questions maximum — then proceed.

## Step C — Perform the online market research (mandatory)

Research across multiple sources to find real demand, real buyer language, and
real gaps a Claude Plugin could fill. Cover, at minimum:

- **Google** — what people search for; existing tools, courses, and offers; how
  they're priced; "how do I…" content volume.
- **YouTube** — tutorials, reviews, and complaints; high-view "how to" videos
  signal painful, popular jobs.
- **Reddit (and forums/communities)** — the buyer's own words: what they're
  frustrated by, what they wish existed, what they'd pay for.
- **Any other relevant source** — marketplaces, review sites, communities,
  social — plus any connected integrations.

For each, capture *evidence*: a quote, a price, a competitor, a recurring
question — not just an opinion. Verbatim buyer language is gold; it becomes the
plugin idea copy and the Offer DNA later.

What you're hunting for:

- **Painful, recurring jobs** the buyer does manually or pays for today.
- **Gaps** where a Claude Plugin could do that job faster, cheaper, or more
  consistently — by taking inputs and generating a concrete, usable output.
- **The buyer's own words** for the problem and the dream outcome.

## Step D — Shape 5 different top-seller ideas

Turn the research into **exactly 5 Claude Plugin ideas**, each:

- **Shippable as a Claude Plugin/Skill** — the buyer provides some info, the
  plugin generates something, the buyer receives a usable result.
- **Grounded in the research** — you can point to the demand signal behind it.
- **High top-seller potential** — judged against
  [`best-seller-criteria.md`](best-seller-criteria.md) (used internally; do not
  show scores to the user).
- **Genuinely different from the other four** — different buyers, jobs, or
  mechanisms. Not five flavors of the same plugin. Aim for a spread so the user
  has a real choice.

Present them with the **exact** structure in
[`templates/claude-plugin-idea-template.md`](../templates/claude-plugin-idea-template.md):
`What it does / User provides info / Plugin generates / User receives / Problems
solved / Ideal customer / Dream outcomes`. Then ask the user to pick one.

---

## Research discipline

- **No fabrication.** Never invent statistics, competitors, review counts, or
  quotes. If you can't verify demand, say so and state what you'd check.
- **Cite or flag.** Tie ideas to real signals; mark anything unverified as an
  assumption and user-provided facts as `[user]`.
- **Buyer's words win.** Reuse the buyer's verbatim language in the ideas and
  later in the Offer DNA.
- **Recency matters.** AI tooling moves fast — prefer recent sources.
