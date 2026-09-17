# Sequence Skeleton, Segmentation + Send Rules

This is how to assemble individual emails into a launch that sells, and the operational rules that
protect the offer and the list.

## The launch arc (7 emails default, 6-9 in practice)

Run over a ~5-day cart window. Each row = job, format to use (see `angle-playbook.md` / `email-templates.md`),
and where it goes.

| # | Job | Format / template | Primary audience | Notes |
|---|-----|-------------------|------------------|-------|
| 1 | Origin story + the reframe | A (story) or B (question) | 90-day engaged | The workhorse. Highest-revenue slot. Open personal, never with a deadline. |
| 2 | Why now / news / proof | C (launch-news), D (persona), or F (social proof) | 90-day engaged -> 1 Main-List blast | Use launch-news framing if anything is new/updated. |
| 3 | Mechanism / what it looks like | E (mechanism) | Openers + Clickers | Removes vagueness. Clicker-touching -> drop the discount number. |
| 3.5 (optional) | "Why didn't you join?" one-question survey | short, single question | Clickers | Send the night the cart closes; use to surface objections for the next run. |
| 4 | Disqualifier (reframe + filter) | G (disqualifier) | Openers / engaged | Opens high, filters buyers in. |
| 5 | Urgency + VIP + guarantee | H (urgency) | 90-day engaged + Openers | First VIP mention. Full guarantee paragraph starts here (a one-line mention is fine earlier, see Escalation rules). |
| 6 | Final call, tight clock (AM) | I (final call) | Clickers + engaged | "we're live today / X hours left." |
| 7 | PM reopen, event recap | J (PM reopen) | Clickers (this sequence only) | Evening of close. Event recap + "you haven't missed it." |

Scale down for a short promo (3 emails: story/news -> disqualifier or proof -> tight-clock closer). Scale
up for a big launch by adding a second proof email and a second urgency send on the final day (stack a
morning "X hours left" and an evening "60 minutes").

## Segmentation + send order (the efficiency rule)

### Map to your platform first
- If your platform can segment by opened / clicked: use the full plan below.
- If it cannot: send emails 1, 2, 4, 5, 6 to your whole engaged list (max 4 sends), skip emails 3 and 7,
  and ignore the clicker-safe rules below.
- If it has no revenue attribution: reconcile revenue from your checkout by send date after the promo.
  Do not skip the promo because tracking is imperfect.

Order audiences from most-engaged to least, because engaged converts and cold mostly adds reach:

1. **90-Day Engaged segment first.** Best open + conversion efficiency. This is the core money audience.
2. **One Main Email List blast** for reach. Cold-list opens are the lowest of any segment but, on volume,
   can still produce a large share of gross sales in a single send. Use it once or twice, not repeatedly.
3. **Openers + Clickers re-targets** for the back half (emails 3, 5, 6, 7). These print very high opens
   but rarely close on their own. Treat them as reach/reminder, not as the engine. The buyers come from
   the first sends to the engaged segment.

**Cap the broadcasts.** Clicks typically drop off significantly by the third broadcast to the same
segment. Three to four sends to the engaged list, then shift to re-targets.

**Standard exclusions on every sales send:** already-purchased (Gold/VIP/Order Completed), the
"Not Interested" suppression segment, and any unsubscribe-from-promo segment. Always include a
"not interested? click here" link on broad sends so people self-suppress instead of unsubscribing.

## The discount ladder (price goes UP)

Only use a ladder if the user has one. If the offer has a single price and a single deadline, run one
deadline with full-price reversion ("at midnight it goes back to ${full}"). Never invent phases or a
discount the user did not give you.

Run discounts so that buying earlier is cheaper. The intended structure:

| Phase | Window | Offer | To whom |
|-------|--------|-------|---------|
| 1 | Launch + first days | 50% OFF (cheapest entry) | Webclass registrants / hottest audience |
| 2 | Mid | 40% OFF | Main List |
| 3 | Final | 30% OFF (price highest) | 90-day engaged + re-targets |

Make the rising price explicit in the copy: "+$100 at midnight", "price goes up Friday", "back to full
price after." The point is to reward early action, so never quietly deepen the discount later, that
trains people to wait.

## Clicker-safe / re-target rules (protect the offer)

Emails that touch Clickers (people who already clicked a sales email) must NOT show the discount number or
the current discounted price. Frame the deadline as "the price goes up {day}" only if the user actually
has a real discount ladder; if the offer is a single flat price with no ladder, frame it as "doors close
{day}, no reopening until the next round" instead, never implying a price increase that wasn't given.
Reason: clickers see multiple sends and you do not want to anchor them on a number, look like the
discount is permanent, or invent a pricing mechanic that doesn't exist. Any clicker-touching send should
be explicitly flagged: "clicker-touching send, so NO discount number and NO current price."

## Escalation rules

- **VIP / upsell**: introduce only in the final 1-2 emails, no exceptions. Stack it as "everything in the
  program, plus {bonuses}, plus a private call." The VIP window closes with the main window.
- **Guarantee / risk-reversal**: a one-line mention (italic or P.S., under 15 words) is fine in any email.
  If the user gave a real guarantee, the full risk-reversal paragraph ("try it 14 days, full refund, keep
  the deliverables, the risk is on us") should actually appear somewhere in the final 1-2 emails, not
  just be permitted there, don't compress it down to another one-liner everywhere and never deliver the
  fuller version anywhere. Risk-reversal is a closer, not an opener, for the full version.
- **3-pay / payment plan**: mention in the P.S. of most emails ("3-pay is live too").

## Tracking (do this before the launch, not after)

Make sure the checkout fires the conversion event ("Placed Order" or equivalent) back into your email
platform, with order value, for every payment path (one-time, 3-pay, PayPal, etc.). A checkout that does
not post the event can leave your platform showing only a small fraction of real revenue, which makes
per-email decisions blind. If you cannot fix it in time, plan to reconcile revenue from the payment
processor by send date afterward.

## Pre-send QA checklist (per email)
- [ ] One job, one CTA, CTA bolded
- [ ] Subject = hook, preview = offer/price/deadline; 5 candidates written, A/B pair flagged
- [ ] Offer block matches the rest of the sequence
- [ ] Discount number / price hidden if this send touches Clickers
- [ ] VIP only present if this is a final-phase email; full guarantee paragraph only in final-phase
      emails (a one-line mention is fine anywhere)
- [ ] Correct exclusions applied (purchasers, not-interested, unsub-promo)
- [ ] No em dashes; voice matches `voice-and-examples.md`; short paragraphs
- [ ] Suppression ("not interested") link present on broad sends
