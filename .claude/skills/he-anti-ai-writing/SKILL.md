---
name: he-anti-ai-writing
description: >-
  Audit and rewrite copy to remove AI writing patterns ("AI-isms") such as overused words, repetitive
  sentence structures, triptychs (rule-of-three lists), generic transitions/filler, and other common
  tells that make text read as machine-generated. Use this whenever text needs a final human-sounding
  pass before it ships: sales emails, social posts, ad copy, page copy. Runs in two modes: rewrite
  (default, fixes the copy) or detect (flags only, no changes). Triggered directly ("clean up AI
  writing", "run the anti-AI pass", "make this sound less like AI") or called as a QA step by other
  specialist skills after they draft copy.
---

# Anti-AI Writing Check

This skill exists to catch the writing patterns that make copy sound machine-generated, so the final
output reads like something a person actually wrote and sent. It is a QA pass, not a voice generator:
it removes tells, it does not invent personality that was never there.

Adapted from patterns documented in several reviewed open-source skills (notably
`conorbronsdon/avoid-ai-writing`, `jalaalrd/anti-ai-slop-writing`, and `avectats7/anti-ai-writing`, all
MIT-licensed) and Wikipedia's "Signs of AI writing" reference page, condensed and re-scoped here for
short-form direct-response copy rather than long-form articles.

## Modes

**`rewrite`** (default) - flag every AI-ism found, then return the copy with all of them fixed.

**`detect`** - flag only, no rewriting. Use this when auditing copy someone else wrote, or when the
calling skill just wants a pass/fail read before deciding whether to touch anything.

## What to check

### 1. Banned / overused words
**Hard rule: never use the word "delve" (or any form of it: delves, delved, delving) in any output,
in any mode. If it appears in the source copy, it is always replaced, never kept as a judgment call.**

Flag these on sight and replace with a plainer word (or cut):

`delve`, `tapestry`, `landscape`, `testament`, `vibrant`, `pivotal`, `leverage`, `robust`, `seamless`,
`utilize`, `harness`, `showcase`, `elevate`, `unlock`, `empower`, `foster`, `streamline`, `paradigm`,
`ecosystem`, `game-changer`, `cutting-edge`, `unparalleled`, `revolutionize`, `holistic`, `synergy`,
`bespoke`, `curated`, `journey` (as a metaphor for a process), `dive in` / `dive deep`.

### 2. Repetitive sentence structures
- Every sentence landing in the same 12-20 word range with no variation. Vary length on purpose: mix a
  short punchy line with a longer one.
- The same sentence *shape* repeated (subject-verb-object, subject-verb-object, subject-verb-object).
  Break the pattern with a fragment, a question, or a different opener.
- Synonym cycling: swapping in a new word each time to avoid repeating one ("customers... clients...
  users... buyers...") when the plain repeated word would read more natural.

### 3. Triptychs / rule-of-three padding
Flag any list or clause that reflexively groups things in three when two would do or a fourth is
missing for no reason ("fast, simple, and effective" / "install it, run it, and watch it work"). Rule of
three is a real rhetorical device and isn't always wrong, but AI defaults to it reflexively. Ask: does
this specific claim actually need three items, or did the model just reach for the shape? If the third
item is vague filler, cut it.

### 4. Generic transitions and filler
Flag and cut or replace: "Moreover", "Furthermore", "Additionally", "In today's fast-paced world",
"In order to" (say "to"), "Due to the fact that" (say "because"), "It's worth noting that", "At the end
of the day", "Let's dive in" / "Let's explore" / "Let's break this down".

### 5. Chatbot / assistant artifacts
Flag and remove entirely: "I hope this helps!", "Great question!", "Certainly!", "Feel free to reach out
if you have questions", "As of my last update", any sign the copy is talking to the reader like an
assistant rather than a seller talking to a buyer.

### 6. Other recognizable AI tells (flag and fix each of these)
- **Copula avoidance**: "serves as / features / boasts" instead of plain "is / has".
- **Significance inflation**: "marking a pivotal moment" for something routine.
- **Vague attribution**: "Experts believe...", "Studies show..." with no actual source.
- **Formulaic openings**: "In the ever-evolving world of...".
- **Generic conclusions**: "The future looks bright", "Only time will tell".
- **Uniformity**: flag it when paragraphs or sentences are all the same size and nothing reads like a
  specific person typed it. Fix it using the two-sided test in section 7, so the fix doesn't swing
  into the opposite problem.
- **Em dashes**: already banned everywhere in this plugin's output (see `sequence-and-rules.md`), but
  flag any that slip through here too as a backstop.

### 7. Paragraph rhythm (phone-first copy)
Two opposite tells, and fixing one must not produce the other:
- **Stutter**: breaks where there shouldn't be any. A run of three or more consecutive one-sentence
  paragraphs that aren't a list. Reads like a slide deck. Merge the ones that belong together.
- **Wall**: no breaks where there should be. Three or more consecutive paragraphs of the same length,
  whether that's 30 words each or 6 words each. Same-length blocks are uniformity even when they're
  short.

The rule that resolves both: **a paragraph break marks a change of thought, never the end of a
sentence.** If a sentence completes, contrasts with, or answers the one before it, the two stay in the
same paragraph. "Effort was never the missing piece. Direction was." is one paragraph; splitting it
kills the contrast.

Fix by reading aloud, not by counting words. A breath after every sentence is stutter; running out of
breath mid-paragraph is a wall. Do not report word counts per paragraph, and do not tune to a target
number of words or sentences.

**Voice overrides all of this.** If the calling skill supplies voice examples, match their paragraph
texture, even if it's choppier or denser than the defaults above. Apply the defaults only when no
examples exist.

## Tone calibration for rewrites

- Vary sentence length on purpose: short next to long. Fragments are seasoning, two per email at most,
  spent on the turn or the reframe. Vary paragraph length the same way (see section 7).
- Be concrete: swap vague claims for a number, a name, a date, or a specific detail already present in
  the source copy. Never invent a specific that wasn't already there. If a concrete detail is missing,
  flag the gap; don't fabricate one to fill it.
- Keep the voice the user already set in `voice-and-examples.md` (for the sales-emails skill) or
  whatever voice reference the calling skill supplies. This pass removes AI tells; it does not overwrite
  someone's actual voice or add a new one that wasn't there.
- Don't over-edit. If a line is already clean and sounds human, leave it alone.

## Output format

### Rewrite mode
1. **Issues found** - bulleted, each with the flagged text quoted.
2. **Rewritten version** - the full copy with every flagged item fixed. Always produce this section.
   Producing only "Issues found" plus a question, with no rewrite, is never an acceptable substitute for
   this section, even when the source is entirely vague, generic, or has nothing concrete in it. Rewrite
   what can honestly be rewritten (cut the filler, fix the structure, plain the vocabulary), and where a
   claim genuinely needs a specific that isn't in the source, mark it inline with a bracketed
   placeholder instead of inventing one.

   **Worked example - source with zero concrete detail:**
   Source: "In today's fast-paced world, our platform serves as a comprehensive, robust, and seamless
   solution that leverages cutting-edge technology to unlock unparalleled value for businesses."
   Required section-2 output (not a question, not a refusal - exactly this shape):
   "Our platform helps [what kind of business] [do what, specifically] with [what data or process]."
   That is a complete, correctly-formatted answer to hand back, with the gaps marked inline. The
   surrounding prose (word choice, structure, filler) still gets fully cleaned up around the bracketed
   parts.
3. **What changed** - short summary of the meaningful edits (not a line-by-line diff). If the rewrite
   contains bracketed placeholders, say so here and name what's missing, so the reader knows to fill
   those in rather than ship them as-is.

### Detect mode
1. **Issues found** - bulleted, each with the flagged text quoted, grouped by type (word/phrase,
   structure, transition/filler, chatbot artifact, rhythm, other).
2. **Assessment** - for each flag, note whether it's a clear problem or a judgment call (some patterns,
   like a rule-of-three, are fine in small doses and not worth flattening every time).

## Using this from another skill

Other skills in this plugin family (e.g. `he-direct-sales-emails`) call this as a final QA pass on
drafted copy before presenting it to the user, in rewrite mode by default. Pass the drafted copy through
this skill's checklist above, apply fixes, then continue with that skill's own delivery format; don't
duplicate this skill's output sections inside the calling skill's response.
