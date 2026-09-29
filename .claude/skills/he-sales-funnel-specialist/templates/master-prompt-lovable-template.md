<!--
  MASTER PROMPT TEMPLATE FOR LOVABLE.DEV

  Output file: master-prompt-sales-page.md
  Purpose: a single prompt the user pastes into Lovable.dev to build the sales
  page COMPONENT-BY-COMPONENT from the approved sales-page-copy.md.

  HOW TO USE THIS TEMPLATE
  - Fill the GLOBAL DESIGN SYSTEM from the Branding input (one concrete aesthetic,
    fonts, hex colors, button style, radius, spacing).
  - Fill {Checkout URL} with the user's real checkout/order-page link.
  - Paste the full, approved sales page copy into the COPY & STRUCTURE block,
    organized under the same step headings shown below. Fill EVERY step with real
    copy — leave no {placeholders}. Drop any step whose section was OMITTED.
  - Everything below the line is the prompt the user copies verbatim into Lovable.
-->

---

You are an expert conversion-focused frontend developer and designer, specializing in developing high-converting sales pages that sell low-ticket digital products. I am going to provide you with the full blueprint, design rules, and exact page copy for a one-page Sales Page that sells a digital product.

You must build this sales page COMPONENT-BY-COMPONENT. Do not attempt to build the entire sales page at once.

### THE RULES OF THIS CHAT:
1. Read the entire master plan below so you understand the global design and context.
2. For this first turn, ONLY build Step 1 (Navbar & Hero Section).
3. Stop immediately after building Step 1. Do not generate code for any other sections yet.
4. At the end of your response, ask me: "Ready to proceed to Step 2?" and wait for my explicit confirmation.
5. Use the provided copy VERBATIM. Do not add, remove, shorten, reword, or invent any copy. The only things you may invent are placeholder images.
6. Build it fully responsive and mobile-first — it must look great on phones.
7. All images are placeholders for me to replace later. Use neutral placeholder blocks; do not fabricate real logos, photos, or screenshots.
8. All pricing/buy/CTA buttons link to {Checkout URL}. CTA buttons elsewhere on the page scroll smoothly to the #pricing section. {Checkout URL} is a placeholder — when you build the buy/pricing buttons, explicitly remind me to provide or set my real Checkout Page URL before publishing.
9. Make the navbar sticky, and on mobile add a sticky bottom "Get {Product Name}" CTA bar.

---

### GLOBAL DESIGN SYSTEM
- Theme/Aesthetic: {one concrete aesthetic from Branding, e.g. "ultra-minimalist modern SaaS"}
- Typography: Primary font [{Primary font}], Secondary font [{Secondary font}]
- Color Palette: Primary #[{HEX}], Accent #[{HEX}], Background #[{HEX}], Text #[{HEX}]
- Buttons: {style — e.g. solid accent fill, white text, bold} · Border radius: {e.g. 12px}
- Spacing: generous, consistent section padding; comfortable line length for copy

---

### COMPLETE SALES PAGE COPY & STRUCTURE
[Paste your entire markdown copy here, organized under the build steps below. Each
step maps to sections of the approved sales-page-copy.md. Make headings and
sections crystal clear. Skip any step whose source section was OMITTED (e.g. no
testimonials → skip the social-proof step). Keep step numbering continuous.]

# Step 1: Navbar & Hero Section
- Navbar: Logo placeholder, links to #features, #pricing, #faq, and a "Get {Product Name}" button.
- Hero Headline: {Big WOW headline}
- Hero Subheadline: {Subheadline}
- Primary CTA: Button reading "{Button Text}" scrolling to #pricing.
- Hero visual: product mockup placeholder.

# Step 2: Demonstration / Showcase (optional)
- {Insert markdown copy + example output placeholders — omit if no real examples...}

# Step 3: Problem & Future-Pacing
- {Insert markdown copy here...}

# Step 4: Product Introduction & Paradigm Shift
- {Insert markdown copy here...}

# Step 5: Features Grid (id="features")
- {Insert markdown copy here — grid of capability cards...}

# Step 6: How It Works (3 steps)
- {Insert markdown copy here...}

# Step 7: Results & Old Way vs New Way
- {Insert markdown copy here — include the comparison table...}

# Step 8: Value Stack & What's Inside
- {Insert markdown copy here — stacked value with anchors + total, then the detailed breakdown of everything inside...}

# Step 9: Market Timing (optional) & Testimonials (optional)
- {Insert markdown copy here — omit either if no real stats/proof...}

# Step 10: Pricing / The Offer (id="pricing")
- {Insert markdown copy here — one offer card, or two packs side by side. Buy buttons link to {Checkout URL}...}

# Step 11: Guarantee & Creator Info
- {Insert markdown copy here...}

# Step 12: FAQ (id="faq")
- {Insert markdown copy here...}

# Step 13: Final CTA & Footer
- {Insert markdown copy here — final CTA + secure-checkout line; footer with links and earnings/results disclaimer...}

---

### START EXECUTION:
Please initialize the project, set up the global tailwind/CSS styling according to the Design System, and build ONLY "Step 1: Navbar & Hero Section" using the exact copy provided. Do not build Step 2. Confirm you are pausing for my feedback.
